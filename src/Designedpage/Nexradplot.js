

import * as React from 'react';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import { useNavigate } from "react-router-dom";


function Nexradpage() {

    // const { auth, setAuth } = useContext(LoginContext)
    // const { token, setToken } = useContext(LoginContext)
    // const { username, setUsername } = useContext(LoginContext)
    // const { userId, setUserId} = useContext(LoginContext)
    // const [loading, setLoading] = useState(false)

    // const {defaultDate, setDefaultDate} = useContext(LoginContext);
    
    // const { selectRadar, setSelectRadar} = useContext(LoginContext);
    // const { logs, setLogs} = useContext(LoginContext);  

    
    // let navigate = useNavigate(); 

    // console.log('Radar value is :',selectRadar)
    // console.log('Default date  in profile : ',defaultDate)

    const getMerraPlot = (event) => {
        alert("Going to Metta")
        // navigate("/profile")
        
    };
    

    return (

      <div>
        <Button variant="outlined">NEXRAD-Data--DOing it </Button>
      </div>
      

    );
  }

export default function NexradData() {
    return <Nexradpage />;
}