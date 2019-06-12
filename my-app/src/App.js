import React,{ Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//   {
//     title:"Parasite",
//     poster:'http://img.movist.com/?img=/x00/05/04/96_p1.jpg',
//   },
//   {
//     title:"Arabian",
//     poster:'http://img.movist.com/?img=/x00/05/11/49_p1.jpg',
//   },
//   {
//     title:"Men in Black: International",
//     poster:'http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2019/01/24/7fTZ6uoOOl4s636839225549679277.jpg',
//   },
//   {
//     title:"Dark Phoenix",
//     poster:'http://img.movist.com/?img=/x00/05/09/99_p1.jpg'
//   },
// ]

// const result = (movie) => {

// }

// function App() {
//   return (
//     <div className="App">
//       <Movie title={movies.title} poster={movies.poster} />
//     </div>
//   );
// }

class App extends Component{
  // Render : componentWillMount() -> render() -> componentDidMount()
  // update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  // componentWillMount(){
  //   console.log('컴포넌트 전 - will mount');
  // }
  // componentDidMount(){
  //   console.log('컴포넌트 후 - did mount');
  // }
  
  // componentDidMount(){
  //   console.log('컴포넌트 후 - did mount');
  //   setTimeout(()=>{
  //     this.setState({
  //       // movies:[
  //       //   ...this.state.movies, //전체 리스트를 두고 아래 리스트 추가
  //       //   {
  //       //     title:"Rocketman",
  //       //     poster:'http://img.movist.com/?img=/x00/05/13/83_p1.jpg'
  //       //   }
  //       // ]
  //       movies: [
  //         {
  //           title:"Parasite",
  //           poster:'http://img.movist.com/?img=/x00/05/04/96_p1.jpg',
  //         },
  //         {
  //           title:"Arabian",
  //           poster:'http://img.movist.com/?img=/x00/05/11/49_p1.jpg',
  //         },
  //         {
  //           title:"Men in Black: International",
  //           poster:'http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2019/01/24/7fTZ6uoOOl4s636839225549679277.jpg',
  //         },
  //         {
  //           title:"Dark Phoenix",
  //           poster:'http://img.movist.com/?img=/x00/05/09/99_p1.jpg'
  //         },
  //         {
  //            title:"Rocketman",
  //            poster:'http://img.movist.com/?img=/x00/05/13/83_p1.jpg'
  //          }
  //       ]
  //     })
  //   }, 3000)
  // }

  state = {}

  // componentDidMount(){
  //   //외부 리스트 가져오기
  //   // 참조 사이트 https://yts.lt/api  ->영화 순위
  //   fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')//fetch는 ajax로 불러옴
  //     .then(res => res.json())//위 url의 data가 010101..로 넘어오는것을 json으로 만듬
  //     //.then(json => console.log(json)) //json으로 변환한거 콘소롤 확인
  //     .then(json => {
  //       this.setState({
  //         movies:json.data.movies
  //       })
  //       .then(()=>.then())
  //     })
  //     .catch( err => console.log(err) )
  // }
  componentDidMount(){
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map( movie => {
      console.log(movie)
      return <Movie title={movie.title_english} 
              poster={movie.medium_cover_image} 
              key={movie.id}
              genres={movie.genres}
              synopsis={movie.synopsis} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  
  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch( err => console.log(err) )
  }


  render(){ 
    const {movies} = this.state;
    return(
      <div className={movies ? "app" : "app--loading"}>
        {/* {this.state.movies.map( ( movie,index ) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}
        {/* {this.state.movies ? this._renderMovies() : <p className="loading">Loading...</p>} */}
        { movies ? this._renderMovies() : 'Loading...' }
      </div>
    );
  }
}

export default App;
