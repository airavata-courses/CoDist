import axios from 'axios';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./App.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Dashboard from "./Dashboard";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    var userInfo;

    const data = { email, password };
    console.log(data)
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => {
      console.log("this is Data : ", res.data);
      userInfo = res.data;
      console.log("this is user info : ", userInfo.email, userInfo.id);
      if (userInfo.id == 101){
        alert("Registered");
        <a href= "http://localhost:3000/"/>
      }
    })
    .then(res => localStorage.setItem('This is DATA', res.data))
    .catch(err =>{
      console.log("Error is : ", err)
    });

  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}

