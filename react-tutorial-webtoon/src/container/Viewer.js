import React,{ Component } from 'react';
import axios from 'axios/index';
import { Link } from 'react-router-dom';

/*--------------------------------------------------------
* 컴포넌트는 특별한 이유가 없으면 함수형으로 빠르게 제작하는게 좋지만,
* 컨테이너 역할을 하는 컴포넌트들은  prop을 router를 통해 전달 받을 예정이므로 class형으로.
--------------------------------------------------------*/
class Viewer extends Component{
    constructor(props){
        super(props)
        this.state={
            episodeId: parseInt(props.match.params.episodeId,10),
            episode: {}
        }
    }
    
    componentDidMount(){
        this._getEpisodeList();
    }

    _getEpisodeList(){
        const apiUrl = '/dummy/episode_list.json';
        axios.get(apiUrl)
             .then(data=>{
                 this.setState({
                     episode : data.data.webtoonEpisodes.find(episode => (
                         episode.id === this.state.episodeId
                     ))
                 })
             })
             .catch(err=>{
                 console.log(err)
             })
    }

    render(){
        const episode = this.state.episode;
        return(
            <div className="viewer-wrap">
                { episode.id ? (
                    <div>
                        <div className="viewer-top">
                            {episode.title}
                            <Link to={`/webtoon/${episode.webtoonId}`} className="btn-close">x</Link>
                        </div>
                        <div className="viewer-img">
                            { episode.images.map((img,index)=>(
                                <img key={index} src={img} />
                            )) }
                        </div>
                    </div>
                ) : (
                    <span>Loading...</span>
                ) }
            </div>
        )
    }
}

export default Viewer;