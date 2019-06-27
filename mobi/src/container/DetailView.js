import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DetailView extends Component{
    // constructor(props){ 
    //     super(props) 
    //     this.state = { 
    //         episodeId : parseInt(props.match.params.episodeId, 10), episode : {} 
    //     }; 
    // } 
    // componentDidMount(){ 
    //     this._getEpisodeList(); 
    // } 
    // _getEpisodeList(){ 
    //     const apiUrl = '/dummy/job_list.json'; 
    //     axios.get(apiUrl) 
    //          .then(data => { 
    //              this.setState({ 
    //                 job : data.data.webtoonEpisodes.find(episode => ( 
    //                      episode.id === this.state.episodeId 
    //                  )) 
    //              }); 
    //          }) 
    //          .catch(error => { console.log(error); }); 
    // }
    
    render(){
        return(
            <div>헿</div>
        )
    }
}


export default DetailView;