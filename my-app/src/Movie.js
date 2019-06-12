import React,{ Component }  from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

import './Movie.css';


// class Movie extends Component{
//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <MoviePoster poster={this.props.poster} />   
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//     static propTypes = {
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie Poster" />
//         )
//     }
// }

// function MoviePoster(props){
//     return(
//         <img src={props.poster} />
//     )
// }

function Movie( {title, poster,genres,synopsis} ){
    return(
        <div className="Movie">
            <div className="Movie-col Movie-col-left">
                <MoviePoster poster={poster} alt={title} /> 
            </div>
            <div className="Movie-col Movie-col-right">
                <h2>{title}</h2>
                <div className="Movie-gen">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie-synop">
                    <LinesEllipsis 
                        text={synopsis} 
                        maxLine='3' 
                        ellipsis='...' 
                        trimRight 
                        basedOn='letters' />
                    
                </p>
            </div>              
        </div>
    )
}

function MoviePoster( {poster, alt} ){
    return <img src={poster} alt={alt} title={alt} className="Movie-img" />
}

function MovieGenre( {genre} ){
    return (
        //모든 컴포넌트를 쪼개고 작게 만드는게 세련된 코딩
        <span className="Movie-gen-span">{genre} </span>
    )
}

// type check
Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired,
}
MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}
MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}


export default Movie;