import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import ClipLoader from "react-spinners/ClipLoader";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { baseUrl } from '../baseurls';



import axios from 'axios';

import { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import Select from 'react-select';

import { useNavigate } from "react-router-dom";

function validateInputs(year, month, day, hour, minute, second, station ){
    console.log("Hey I am new one ", year, month, day, hour, minute, second, station)
    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(minute) || isNaN(second)){
        return false
    }
    if(!station)
        return false
    

    var today = new Date().getFullYear();
    console.log("-----",today)
    if(year > 2022){
        return false
    } 
    return true
}

function ProfilePage() {

    const { auth, setAuth } = useContext(LoginContext)
    const { token, setToken } = useContext(LoginContext)
    const { username, setUsername } = useContext(LoginContext)
    const { userId, setUserId} = useContext(LoginContext)
    const [loading, setLoading] = useState(false)

    const {defaultDate, setDefaultDate} = useContext(LoginContext);
    
    const { selectRadar, setSelectRadar} = useContext(LoginContext);
    const { logs, setLogs} = useContext(LoginContext);  

    
    let navigate = useNavigate();

    console.log('Radar value is :',selectRadar)
    console.log('Default date  in profile : ',defaultDate)
    
    const options = [
      {label: 'KABR' },
      {label: 'KABX' },
      {label: 'KAMA' },
      {label: 'PAHG' },
      {label: 'PGUA' },
      {label: 'KFFC' },
      {label: 'KBBX' },
      {label: 'KAKQ' },
    ];

    const getWeather = (event) => {
        
        setLoading(true)
        event.preventDefault();

        if (defaultDate === "" || defaultDate === null){
          setLoading(false)
          alert("Please enter valid input")
          return
        }
        
        console.log('Clieck on weather: ',defaultDate)
        var month = String(defaultDate.getMonth()+1)
        var day = String(defaultDate.getDate())
        var hour = String(defaultDate.getHours())
        var minute = String(defaultDate.getMinutes())
        var second = String(defaultDate.getSeconds())
        var year = String(defaultDate.getFullYear())
        var station = selectRadar.label
        var authToken = token

        console.log('radar inside get weatther is: ',station)

            if(validateInputs(year, month, day, hour, minute, second, station)){
                axios.post(baseUrl+'/plotting', {year, month, day, hour, minute, second, station, authToken}, { headers: { "authToken" : String(authToken) , 'Access-Control-Allow-Origin': "*"} })
                .then((res) => {
                  setLoading(false)
                  console.log("this is Data : ", res);
                  window.open(res.data)
                  console.log("Image source : ", res.data)
                })
                .catch(err =>{
                  console.log("Error is : ", err)
                  navigate("/error")
                });
            }
            else{
                setLoading(false)
                alert ("Incorrect format")
            }
    };

    const handleLogout = (event) => {
        setAuth(false);
        setUsername("");
        setToken("")
        setDefaultDate("")
        setSelectRadar("")
        navigate("/");

        console.log("Coming to console", defaultDate)
    };

    const getMerraPlot = (event) => {
        // setLoading(true)
        // event.preventDefault()    
        // console.log("Profile getHistory Function.")

        //     axios.post(baseUrl+'/logging', {userId, token })
        //     .then(res => {
        //         setLoading(false)
                
        //         if ( (res.data.response === null) || ( !Array.isArray(res.data.response)) || res.data.response.length === 0 )
        //         {
        //             alert("History deos not exists!")
        //         }else if(auth){
        //             setLogs(res.data.response)
        //             navigate("/history");
        //         }
        //     })
        //     .catch(err => {
        //         console.log("Error is : ", err)
        //         navigate("/error")
        //     });
        navigate("/profile")
        
    };

    function onDateChange(defaultDate){
        console.log("On change",defaultDate)
        setDefaultDate(defaultDate)
    }
    function onDateChange(defaultDate){
      console.log("On change",defaultDate)
      setDefaultDate(defaultDate)
    }

    return (

      <div>
        <Button variant="outlined" onClick={getMerraPlot}>Merra-Data</Button>
        <Button variant="outlined" onClick={getMerraPlot}>NEXRAD-Data</Button>
      </div>
      

    );
  }

  export default function Profile() {
    return <ProfilePage />;
  }

