import axios from 'axios';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Login from './Login';

export default function EnterDetails() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    const data = { firstName, lastName, email, password };
    // const token = 'a123b';

    console.log(data)
    axios.post('https://jsonplaceholder.typicode.com/posts',
    { headers: { "authorization" : "token" }, firstName, lastName, email, password })
    .then(res => {
      console.log("This is the response : \n", res.data.headers.authorization);
      console.log("Full Response ", res.data.authorization);

      if (res.data.email.length > 0){
        alert("Registered");
        <a href= "http://localhost:3000/"/>
      }
        
    })
    .catch(err =>{
      console.log("Error is : ", err)
    });




  }

  return (



    <div className="Login">
      
      <Form onSubmit={handleSubmit}>
        
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
      {/* <Login></Login> */}
    </div>
  );
}