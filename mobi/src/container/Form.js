import React,{ Component} from 'react';
// import axios from 'axios';

class Form extends Component{    
    // constructor(prop){
    //     super(prop);
    //     this.state = {
    //         companyName:'',
    //         email:'',
    //         name:'',
    //         phone:'',
    //         position:'',
    //         value:'',
    //         title:'',
    //         message:''
    //     }
    // }

    constructor(){
        super();
        this.state = {};
    }

    // handleChange = (e)=>{
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    handleSubmit = (e ) => {
        e.preventDefault();
        const data = new FormData(e.target);
        //리액트 네거티브에서 fetch사용
        //웹브라우저 axios 사용 (ajax같은거)
        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });
        this.setState({
            res: stringifyFormData(data),
        });

        // const url = '/dummy/recruit_list.json';
        // axios.post(url, {
        //     // headers: { 'Content-type': 'application/x-www-form-urlencoded', },
        //     params:{ data }
        // })
    }

    render(){
        // const { res, invalid } = this.state;
        // const { 
        //     companyName, email, name, phone, position, value, title, message
        // } = this.state;
        return(
            <form onSubmit={this.handleSubmit} >
                <p>Company Infomation</p>
                <div className="con-form-box">
                    <span>
                        <label  htmlFor="companyName">회사</label>
                        <input  type="text" placeholder="ex) 모비데이즈" required 
                                // value={companyName}
                                // onChange={this.handleChange}
                                name="companyName" 
                                id="id_companyName"/>            
                    </span>
                    <span>
                        <label  htmlFor="email">이메일</label>
                        <input  type="text" placeholder="ex) email@mail.com" required 
                                // value={email}
                                // onChange={this.handleChange}
                                name="email"
                                id="id_email" />
                    </span>
                    <span>
                        <label  htmlFor="name">담당자명</label>
                        <input  type="text" placeholder="ex) 홍길동" required
                                // value={name}
                                // onChange={this.handleChange}
                                name="name"
                                id="id_userName" />
                    </span>
                    <span>
                        <label  htmlFor="phone">전화번호</label>
                        <input  type="text" placeholder="ex) 01012341234" pattern="\d+" required
                                // value={phone}
                                // onChange={this.handleChange}
                                name="phone" 
                                id="id_phoneNum"/>
                    </span>
                </div>
                <p>Job Description</p>
                <div className="con-form-box">
                    <span>
                        <label  htmlFor="position">직무</label>
                        <input  type="text" placeholder="ex) 팀장" required
                                // value={position}
                                // onChange={this.handleChange}
                                name="position" 
                                id="id_position"/>
                    </span>
                    <span>
                        <label>경력</label>
                        <select name="sel">
                            <option value="1" name="sel">신입</option>
                            <option value="2" name="sel">경력</option>
                            <option value="3" name="sel">신입/경력</option>
                        </select>
                    </span>
                    <span>
                        <label  htmlFor="title">제목</label>
                        <input  type="text" required
                                // value={title} 
                                // onChange={this.handleChange} 
                                name="title"
                                id="id_title" />
                        <label htmlFor="message">상세내용</label>
                        <textarea   cols="28" rows="10" required
                                    // value={message} 
                                    // onChange={this.handleChange} 
                                    name="message" 
                                    id="id_message" >                
                        </textarea>
                    </span>
                </div>

                <button>보내기</button>

                {this.state.res &&(<pre>{this.state.res}</pre>)}
            </form>
        )
    }
}

export default Form;

//Enter 누를때도 submit
function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}