import React,{ Component } from 'react';
import axios from 'axios';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Gnb from '../component/Gnb';
import WebtoonList from "../component/WebtoonList";

/*--------------------------------------------------------
* 컴포넌트는 특별한 이유가 없으면 함수형으로 빠르게 제작하는게 좋지만,
* 컨테이너 역할을 하는 컴포넌트들은  prop을 router를 통해 전달 받을 예정이므로 class형으로.
--------------------------------------------------------*/
class Main extends Component{
    // npm install --save axios
    // axios.get( )을 통해 서버와 통신하고 받아 온 webtoonList는 메인 컴포넌트의  state로 지정.
    constructor(props){
        super(props);

        const query = new URLSearchParams(props.location.search); 
        const day = query.get('day'); //query string 으로 day 값 얻음

        this.state={
            day: day || 'mon', //디폴트로 월요일
            webtoonList:[]
        }
    }

    componentDidMount(){
        this._getList();
    }

    componentDidUpdate(prevProps){
        let prevQuery = new URLSearchParams(prevProps.location.search); 
        let prevDay = prevQuery.get('day'); 
        let query = new URLSearchParams(this.props.location.search); 
        let day = query.get('day'); 
        
        if(prevDay !== day){ 
            this.setState({ day }) 
        };
    }

    _getList(){
        const apiUrl = 'dummy/webtoon_list.json';
        axios.get(apiUrl)
             .then(data=>{
                 this.setState({
                    webtoonList: data.data.webtoonList
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
                <Gnb day={this.state.day} />

                { this.state.webtoonList.length > 0 ? (
                    <WebtoonList list={
                        this.state.webtoonList.filter(webtoon => (
                            webtoon.day === this.state.day
                        ))
                    } />
                ) : (
                    <span>
                        LOADING...
                    </span>
                )}
                
                <Footer />
            </div>
        )
    }
}

export default Main;