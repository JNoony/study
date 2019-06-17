import React,{ Component } from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import axios from 'axios/index';
import WebtoonInfo from '../component/WebtoonInfo';
import EpisodeList from '../component/EpisodeList';

/*--------------------------------------------------------
* 컴포넌트는 특별한 이유가 없으면 함수형으로 빠르게 제작하는게 좋지만,
* 컨테이너 역할을 하는 컴포넌트들은  prop을 router를 통해 전달 받을 예정이므로 class형으로.
--------------------------------------------------------*/
class WebtoonHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            webtoonId: parseInt(props.match.params.webtoonId,10),
            webtoon: {},
            episodeList: []
        }
    }

    componentDidMount(){
        this._getWebtoon();
        this._getEpisodeList();
    }
    
    _getWebtoon(){
        const apiUrl = '/dummy/webtoon_detail.json';
        axios.get(apiUrl)
             .then(data=>{
                 this.setState({
                     webtoon:data.data.webtoons.find(w=>(
                         w.id === this.state.webtoonId
                     ))
                 })
             })
             .catch(err=>{
                 console.log(err)
             })
    }
    _getEpisodeList(){
        const apiUrl = '/dummy/episode_list.json';
        axios.get(apiUrl)
             .then(data=>{
                 this.setState({
                     episodeList:data.data.webtoonEpisodes.filter(episode => (
                        episode.webtoonId === this.state.webtoonId
                     ))
                 })
             })
             .catch(err=>{
                 console.log(err)
             })
    }

    render(){
        return(
            <div>
                <Header />
                <Gnb />
                { this.state.webtoon.id ? (
                    <WebtoonInfo webtoon={this.state.webtoon} />
                ) : (
                    <span>Loading...</span>
                ) }

                { this.state.episodeList.length > 0 ? (
                    <EpisodeList episodes={this.state.episodeList} />
                ) : (
                    <span>Loading...</span>
                ) }
                <Footer />
            </div>
        )
    }
}



export default WebtoonHome;