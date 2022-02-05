import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errorpage from './Pages/Errorpage';
import History from './Designedpage/History';
import {LoginContext} from './Context/LoginContext';
import Profile from './Designedpage/Profile';
import React, { useState } from 'react';
import SignIn from './Designedpage/Login';
import Signup from './Designedpage/Signup';
// import Historyinfo from './Designedpage/Historyinfo';


function App()
{
    const [username, setUsername] = useState("");
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("")
    const [logs, setLogs] = useState("");
    const [defaultDate, setDefaultDate] = useState("");
    const [defaultTime, setDefaultTime] = useState("");
    const [defaultStation, setDefaultStation] = useState("")

    
    return (
        <div> 
            <LoginContext.Provider value = {{username, setUsername, auth, setAuth, token, setToken, userId, setUserId, logs, setLogs, defaultDate, setDefaultDate, defaultStation, setDefaultStation, defaultTime, setDefaultTime}}>
                <Router>
                  <Routes>
                    {/* {auth && <Route exact path="/profile" element={<Profile/>} />} */}
                    {auth && <Route exact path="/history" element={<History/>} />}
                    <Route exact path="/" element={<SignIn/>} />
                    <Route exact path="/profile" element={<Profile/>} />
                    <Route exact path="/register" element={<Signup />} />
                    <Route exact path="*" element={<Errorpage />} />
                    
                  </Routes>
                </Router>
            </LoginContext.Provider>
        </div>
  );
}

export default App;