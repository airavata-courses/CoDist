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
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
import { baseUrl } from '../baseurls';



import axios from 'axios';

import { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import Select from 'react-select';

import { useNavigate } from "react-router-dom";

import {getUserHistoryData} from '../logic/getUserHistory'

const tiers = [
  {
    buttonText: 'Get Weather update',
  },
  {
    buttonText: 'Get started',
  }
];

function validateInputs(year, month, day, hour, minute, second, station ){
  console.log(isNaN(year),isNaN(month),isNaN(day),isNaN(hour),isNaN(minute),isNaN(second))
  if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(minute) || isNaN(second)){
    return false
  }
  if(!station)
    return false
  return true
}

function PricingContent() {

  const { auth, setAuth } = useContext(LoginContext)
  const { token, setToken } = useContext(LoginContext)
  const { username, setUsername } = useContext(LoginContext)
  const { userId, setUserId} = useContext(LoginContext)
  const [loading, setLoading] = useState(false)

  const {defaultDate, setDefaultDate} = useContext(LoginContext);
  const {defaultStation, setDefaultStation} = useContext(LoginContext);
  // const {defaultTime, setDefaultTime} = useContext(LoginContext);
  
  const { selectRadar, setSelectRadar} = useContext(LoginContext);
  const { imgSource, setImgsource } = useState("")
  const { logs, setLogs} = useContext(LoginContext);  

  let navigate = useNavigate();

  console.log('Radar value is :',selectRadar)
  console.log('Default date  in profile : ',defaultDate)
  // console.log('Default time  in profile : ',defaultTime)
  
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
  // const options = [
  //   { value: 1, label: 'KABR' },
  //   { value: 2, label: 'KABX' },
  //   { value: 3, label: 'KAMA' },
  //   { value: 4, label: 'PAHG' },
  //   { value: 5, label: 'PGUA' },
  //   { value: 6, label: 'KFFC' },
  //   { value: 7, label: 'KBBX' },
  //   { value: 8, label: 'KAKQ' },
  // ];

  const getWeather = (event) => {
    event.preventDefault();
    setLoading(true)
  

    // setDefaultDate(Date(defaultDate))
    // const data = new FormData(event.currentTarget);
    console.log('Clieck on weather: ',defaultDate)
    var month = String(defaultDate.getMonth()+1)
    var day = String(defaultDate.getDate())
    var hour = String(defaultDate.getHours())
    var minute = String(defaultDate.getMinutes())
    var second = String(defaultDate.getSeconds())
    var year = String(defaultDate.getFullYear())
    var station = selectRadar.label
    var authToken = token

    console.log("Hey I am new one ", year, month, day, hour, minute, second, station)
    
    console.log("Default Date: ", defaultDate)
    
    // console.log("Default Time: ", defaultTime)

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
  // date


  const handleLogout = (event) => {

    setAuth(false);
    setUsername("");
    setToken("null")
    navigate("/");
    

    console.log("Coming to console", defaultDate)
  };

  const getHistory = (event) => {
    setLoading(true)
    event.preventDefault()    
    console.log("Profile getHistory Function.")

      axios.post(baseUrl+'/logging', {userId, token })
      .then(res => {
        setLoading(false)
        console.log("this is log response : ", res);
        console.log("This is log data : ", res.data.response);
        // if ( (res.data.response === null) || ( !Array.isArray(res.data.response)) || res.data.response.length === 0 )
        if ( (res.data.response === null) || ( !Array.isArray(res.data.response)) || res.data.response.length === 0 )
        {
          alert("History deos not exists!")
        }else if(auth){
          setLogs(res.data.response)
          navigate("/history");
        }
      })
      .catch(err => {
        console.log("Error is : ", err)
        alert("Some Error Generated")
        navigate("/error")
      });
       
  };

  function onDateChange(defaultDate){
    console.log("On change",defaultDate)

    setDefaultDate(defaultDate)
  }

  // function onTimeChange(defaultDateTime){
  //   console.log("On Chagne Time: ", defaultDateTime)
  //   setDefaultDate(defaultDateTime)
  // }



  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {username}
          </Typography>

          <Button onClick={handleLogout} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
        <Typography
          component="h6"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Select your choice!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="sm" component="main">
        <Typography variant="h9" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
              <DatePicker
                disableFuture
                label="Select Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={defaultDate}
                onChange={defaultDate => onDateChange(defaultDate)}
                renderInput={(params) => <TextField {...params} />}
                maxDate={new Date()}
              />

              <TimePicker
                ampm={false}
                openTo="hours"
                views={['hours', 'minutes', 'seconds']}
                inputFormat="HH:mm:ss"
                mask="__:__:__"
                label="Select time"
                value={defaultDate}
                onChange={defaultDate => onDateChange(defaultDate)}
                renderInput={(params) => <TextField {...params} />}
                
              />
              
              </Stack>
              <br></br>
              {loading? null: <Select
                label = {selectRadar}
                value={selectRadar}
                options={options}
                onChange={selectRadar => setSelectRadar(selectRadar)}
              >
              </Select>}
              <br></br>
              <Button fullWidth onClick={getWeather} disabled= {loading}> Get Weather Forecast </Button>
              </LocalizationProvider>

        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <br /><br />

          <Button fullWidth onClick={getHistory} disabled= {loading}> User history </Button>
        </Box>
        <div style={{marginLeft: 255}}>
         {loading? <ClipLoader size={50} loading={loading}/>:null}
        </div>
        
      </Container>


      {/* {Image && } */}

    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}

