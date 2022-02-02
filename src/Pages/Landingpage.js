import React, { useState, useContext } from 'react';

import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {LoginContext} from '../Context/LoginContext';






function Landingpage(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {auth, setAuth} = useContext(LoginContext)
    const {username, setUsername} = useContext(LoginContext)


    let navigate = useNavigate(); 

    function handleSubmit(event) {
        event.preventDefault();

        
        
        if (auth == false){
            setAuth(true)
            setUsername(JSON.stringify(email))
            navigate("/profile") ;
        }

                    
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return (
        <div>Hi working on Landingpage

            <br/>
            <br/>

            {/* ============================================================= */}

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



            {/* ============================================================= */}
            <button onClick={()=>{
                navigate("/register")
            }}>User registration</button>

        </div>
    );
  }

  export default Landingpage;
  