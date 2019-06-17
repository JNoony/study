import React from 'react';
import { Link } from 'react-router-dom';

const WebtoonList = (props)=>{ 
    return(
        <ul className="webtoon-list">
            { props.list.map((webtoon, index) => {
                return <li key={index}>
                    <Link to={`/webtoon/${webtoon.id}`} className="webtoon-link">
                        <img className="webtoon-img" 
                             src={webtoon.thumbnail} alt={webtoon.title} />
                        <div className="webtoon-info">
                            <strong className="webtoon-tit">{webtoon.title}</strong>
                            {webtoon.artist}
                        </div>
                    </Link>
                </li>
            }) }
        </ul>
    )
}


export default WebtoonList;