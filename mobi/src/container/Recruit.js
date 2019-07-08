import React,{ Component} from 'react';

import Form from './Form';
// import SimpleReactValidator from 'simple-react-validator';

// import '../js/mobi.validation.js';

class Recruit extends Component{
    

    // handleChange = (e) => {
    //     e.preventDefault();

    //     this.setState({
    //       [e.target.name]: e.target.name
    //     });

    //     // let { inputData } = this.state;
    //     // if(e.target.id == 'id_userName' ){
    //     //     e.target.inputEraser({
    //     //         maxlength: 4,
    //     //         hangul: true,
    //     //         ENGLISH: false,
    //     //         english: false,
    //     //         digits: false,
    //     //         space: false,
    //     //         special: false
    //     //     });
    //     // }
    // }


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     // alert( `recruitList -  ${this.state.recruitList}` );
    //     // this.props.onCreate(this.state);
        
    //     // if( formValid(this.state.formErrors) ){
    //     //     console.log(`
    //     //     --SUBMITTING--
    //     //     companyName:${this.state.companyName},
    //     //     email:${this.state.email},
    //     //     name:${this.state.name},
    //     //     phone:${this.state.phone},
    //     //     position:${this.state.position},
    //     //     value:${this.state.value},
    //     //     title:${this.state.title},
    //     //     message:${this.state.message},
    //     //     `)
    //     // }else{
    //     //     console.error('err');
    //     // }
    //     //// 상태 초기화
    //     // this.setState({
    //     //     companyName:'',
    //     //     email:'',
    //     //     name:''
    //     // })
    // }

    // // init_inputEraser =(e) => {
    // //     let { inputData } = this.state;
    // //     let id = e.target.id;
    // //     if(id == 'id_userName' ){
    // //         id.inputEraser({
    // //             maxlength: 4,
    // //             hangul: true,
    // //             ENGLISH: false,
    // //             english: false,
    // //             digits: false,
    // //             space: false,
    // //             special: false
    // //         });
    // //     }
          
    // // }

    // handleCreate = (data) => {
    //     console.log(data);
    //     // init_inputEraser()
    // }

    // handleSubmit = ({e , data}) => {
    //     e.preventDefault();
    //     console.log("Submitting");
    //     console.log(data);
    // }

    render(){
        // const { handleSubmit } = this;

        return(
            <div className="page page3">
                <h2 className="con-title">Recruit</h2>
                <div className="con-form">
                    <Form />
                </div>
            </div>
        )
    }

}





export default Recruit;