import React from 'react';

const WebtoonInfo = (props) => {
    const webtoon = props.webtoon;
    return(
        <div className="webtoon-wrap">
            <img className="webtoon-img"
                 src={webtoon.thumbnail} alt={webtoon.title} />
            <div className="webtoon-info">
                <strong className="webtoon-tit">{webtoon.title}</strong>
                { webtoon.genre.map((g,index) => (
                    <span key={index} className="genre-txt">{g}</span>
                )) }
                <span className="score-num">평점 : {webtoon.score}</span>
            </div>
        </div>
    )
}

export default WebtoonInfo;