import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email :'',
            password: ''
        }
    }
    
    render(){
        const{ email, password } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={this.handleChange}
                />
                <label htmlFor="Password">Password</label>
                <input type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting");
        console.log(this.state);
    }

}

export default LoginForm;