import React, { useState } from 'react';
// import Appchild from "./Component/Appchild"
// import Landingpage from './Pages/Landingpage';
import Registration from './Pages/Registration';
import Errorpage from './Pages/Errorpage';
import History from './Designedpage/History';

import SignIn from './Designedpage/Login';
import Signup from './Designedpage/Signup';
import Profile from './Designedpage/Profile';



import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


import {LoginContext} from './Context/LoginContext';



function App()
{
    const [username, setUsername] = useState("");
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState("");
    // const [auth, setAuth] = useState(false);
    const [userId, setUserId] = useState("")
    const [logs, setLogs] = useState("");

    
    return (
    <div> 
        <LoginContext.Provider value = {{username, setUsername, auth, setAuth, token, setToken, userId, setUserId, logs, setLogs}}>
            <Router>
              <Routes>
                {auth && <Route exact path="/profile" element={<Profile/>} />}
                {auth && <Route exact path="/history" element={<History/>} />}
                <Route exact path="/" element={<SignIn/>} />
                {/* <Route exact path="/profile" element={<Profile/>} /> */}
                <Route exact path="/register" element={<Signup />} />
                <Route exact path="*" element={<Errorpage />} />
                <Route exact path="/history" element={<History />} />
              </Routes>
            </Router>
        </LoginContext.Provider>
      </div>
  );
}

export default App



// let navigate = useNavigate(); 
// <button onClick={()=>{
            // navigate("/registration")
            // }}>Chnage to Profile</button>




