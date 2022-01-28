import React from "react";
import axios from 'axios';

class Login extends React.Component {

  state = {
    email : '',
    password : ''
  }

  handleChange = (e) =>{
    const{name, value} = e.target
    this.setState({[name]:value})
    // console.log(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.value;
    // window.location.href='http://127.0.0.1:8000/login';
    

    console.log(": ", this.state)
    // testing if post is working 
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then(Response => {
        console.log(Response)
    })
    .catch(error => {
      console.log(Response)
  })
  
    }
    render() {

      // console.log("email: ",  this.state.email, "password: ",  this.state.password )
      
      return (

            <div>
                <input type="email" name = "email" placeholder = "Username" required onChange={ this.handleChange }/>
                <input type="password" name = "password" placeholder = "Password" required onChange={ this.handleChange }/>

                <button
                type="button"
                onClick={this.handleSubmit}
                >
                login </button>
            </div>

    
      );
    }
  }

  export default Login