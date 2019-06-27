import React,{ Component} from 'react';
// import SimpleReactValidator from 'simple-react-validator';

class Recruit extends Component{
    // form 유효성 체크 [ simple-react-validator ]
    constructor(props){
        super(props);
        this.state = {
           // id:'',
           companyName:'',
           email:'',
           name:'',
           phone:'',
           position:'',
           option:'',
           title:'',
           message:''
        }
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // 상태 초기화
        this.setState({
            companyName:'',
            email:'',
            name:''
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="page page3">
                <h2 className="con-title">Recruit</h2>
                <div className="con-form">
                    <form onSubmit={this.handleSubmit}>
                        <p>Company Infomation</p>
                        <div className="con-form-box">
                            <span>
                                <label>회사</label>
                                <input type="text" placeholder="ex) 모비데이즈" 
                                       value={this.state.companyName}
                                       onChange={this.handleChange}
                                       name="companyName" 
                                       id="id_companyName"/>
                                {/* {this.validator.message('title', this.state.companyName, 'required|alpha')} */}
                            </span>
                            <span>
                                <label>이메일</label>
                                <input type="text" placeholder="ex) email@mail.com" 
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       name="email"
                                       id="id_email" />
                            </span>
                            <span>
                                <label>담당자명</label>
                                <input type="text" placeholder="ex) 홍길동" 
                                       value={this.state.name}
                                       onChange={this.handleChange}
                                       name="name" 
                                       id="id_userName" />
                            </span>
                            <span>
                                <label>전화번호</label>
                                <input type="text" placeholder="ex) 01012341234" 
                                       value={this.state.phone}
                                       onChange={this.handleChange}
                                       name="phone" 
                                       id="id_phoneNum"/>
                            </span>
                        </div>
                        <p>Job Description</p>
                        <div className="con-form-box">
                            <span>
                                <label>직무</label>
                                <input type="text" placeholder="ex) 팀장"
                                       value={this.state.position}
                                       onChange={this.handleChange}
                                       name="position" 
                                       id="id_position"/>
                            </span>
                            <span>
                                <label>경력</label>
                                <select value={this.state.option} >
                                    <option value="1">신입</option>
                                    <option value="2">경력</option>
                                    <option value="3">신입/경력</option>
                                </select>
                            </span>
                            <span>
                                <label>제목</label>
                                <input type="text" 
                                       value={this.state.title} 
                                       onChange={this.handleChange} 
                                       name="title"
                                       id="id_title" />
                                <label>상세내용</label>
                                <textarea  cols="28" rows="10"
                                        value={this.state.message} 
                                        onChange={this.handleChange} 
                                        name="message" 
                                        id="id_message" ></textarea>
                            </span>
                        </div>
                        <button type="submit" className="btn btn-b">보내기</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Recruit;