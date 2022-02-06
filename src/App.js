import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errorpage from './Pages/Errorpage';
import History from './Designedpage/History';
import {LoginContext} from './Context/LoginContext';
import Profile from './Designedpage/Profile';
import React, { useState } from 'react';
import SignIn from './Designedpage/Login';
import Signup from './Designedpage/Signup';
// import "react-loader-spinner/ssr/dist/loader/css/react-spinner-loader.css";

// import Historyinfo from './Designedpage/Historyinfo';

import { Oval } from  'react-loader-spinner'

function App()
{
    const [username, setUsername] = useState("");
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("")
    const [logs, setLogs] = useState("");
    const [defaultDate, setDefaultDate] = useState("");
    const [defaultTime, setDefaultTime] = useState("");
    const [ selectRadar, setSelectRadar] = useState("");

    
    return (
        <div> 
            <LoginContext.Provider value = {{username, setUsername, auth, setAuth, token, setToken, userId, setUserId, logs, setLogs, defaultDate, setDefaultDate, selectRadar, setSelectRadar, defaultTime, setDefaultTime}}>
                <Router>
                  <Routes>
                    {auth && <Route exact path="/profile" element={<Profile/>} />}
                    {auth && <Route exact path="/history" element={<History/>} />}
                    <Route exact path="/" element={<SignIn/>} />
                    {/* <Route exact path="/profile" element={<Profile/>} /> */}
                    <Route exact path="/register" element={<Signup />} />
                    <Route exact path="*" element={<Errorpage />} />
                    
                  </Routes>
                </Router>
            </LoginContext.Provider>
        </div>
  );
}

export default App;