import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = (props) => {
    return(
        <ul className="webtoon-list webtoon-episode-list">
            { props.episodes.map((episode,index)=>{
                return <li key={index}>
                    <Link to={`/viewer/${episode.id}`} className="webtoon-link"> 
                        <img src={episode.thumbnailImage.url} className="webtoon-img" alt={episode.title} /> 
                        <div className="webtoon-info"> 
                            <strong className="webtoon-tit"> {episode.title} </strong> 
                            {`${episode.dateCreated.substr(0,4)}.${episode.dateCreated.substr(4,2)}.${episode.dateCreated.substr(6,2)}`} 
                        </div> 
                    </Link>
                </li>
            }) }
        </ul>
    )
}

export default EpisodeList;