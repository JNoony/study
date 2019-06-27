import React,{ Component} from 'react';
import axios from 'axios';

import JobList from '../component/JobList'
import './Job.css';

class Job extends Component{
    constructor(props){
        super(props);
        this.state = {
            jobList:[]
        }
    }
    
    componentDidMount(){
        this._getList();
    }
    
    _getList(){
       const apiUrl = '/dummy/job_list.json';
       axios.get(apiUrl)
            .then(res=>{
                res.data.jobList.sort(function(a, b) { 
                    if(a['state'] === b['state']){
                        return b['id'] - a['id'];
                    }
                    return a.state < b.state ? 1 : a.state > b.state ? -1 : 0;
                });
                
                this.setState({
                    jobList: res.data.jobList
                });     
                console.log(this.state.jobList)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        return(
            <div className="page page4">
                <h2 className="con-title">Job</h2>
                <div className="con-img"></div>
                <div className="con-list">
                    <div className="job-con-head">
                        <p>경력</p>
                        <p>직무</p>
                        <p>제목</p>
                        <p>상태</p>
                        <p>기간</p>
                    </div>
                    { this.state.jobList ? (
                        <JobList list={this.state.jobList}/>
                    ) : (
                        <span>LOADING...</span>
                    ) }
                </div>
            </div>
        )
    }
}

export default Job;