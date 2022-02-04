import React, { useState } from 'react';
// import Appchild from "./Component/Appchild"
// import Landingpage from './Pages/Landingpage';
import Registration from './Pages/Registration';
import Errorpage from './Pages/Errorpage';
import History from './Designedpage/History';

import SignIn from './Designedpage/Login';
import Signup from './Designedpage/Signup';
import Profile from './Designedpage/Profile';
import Historyinfo from './Designedpage/Historyinfo';
import Grid from '@mui/material/Grid';




import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


import {LoginContext} from './Context/LoginContext';

const tiers = [
  {
      "userId": "1",
      "logIdentifier": "123",
      "logType": "RESPONSE",
      "logDetails": "These are log details",
      "insertedOn": "2022-02-03T17:27:41.504348Z",
      "url": "google.com"
  },
  {
      "userId": "2",
      "logIdentifier": "456",
      "logType": "RESPONSE",
      "logDetails": "These are log details",
      "insertedOn": "2022-02-03T16:49:09.739462Z",
      "url": "google.com"
  },
  {
      "userId": "3",
      "logIdentifier": "678",
      "logType": "RESPONSE",
      "logDetails": "xyz",
      "insertedOn": "2022-02-03T16:48:25.437296Z",
      "url": "xxxxxxxx"
  }
];


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
      {
        tiers.map((item, i)=>(
          // console.log('test');
          // <li>Test</li>
          <Historyinfo id={item.userId} log= {item.logIdentifier} type = {item.logType} details = {item.logDetails} time= {item.insertedOn} url= {item.url}></Historyinfo>
        ))
      }
      </div>
        // <div> 
        //     <LoginContext.Provider value = {{username, setUsername, auth, setAuth, token, setToken, userId, setUserId, logs, setLogs}}>
        //         <Router>
        //           <Routes>
        //             {auth && <Route exact path="/profile" element={<Profile/>} />}
        //             {auth && <Route exact path="/history" element={<History/>} />}
        //             <Route exact path="/" element={<SignIn/>} />
        //             {/* <Route exact path="/profile" element={<Profile/>} /> */}
        //             <Route exact path="/register" element={<Signup />} />
        //             <Route exact path="*" element={<Errorpage />} />
        //             <Route exact path="/history" element={<History />} />
        //           </Routes>
        //         </Router>
        //     </LoginContext.Provider>
        //   </div>
  );
}

export default App



// let navigate = useNavigate(); 
// <button onClick={()=>{
            // navigate("/registration")
            // }}>Chnage to Profile</button>




