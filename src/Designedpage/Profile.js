import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';


import axios from 'axios';

import { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import Select from 'react-select';

import { useNavigate } from "react-router-dom";


const tiers = [
  {
    buttonText: 'Get Weather update',
  },
  {
    buttonText: 'Get started',
  }
];

function PricingContent() {

  const { auth, setAuth } = useContext(LoginContext)
  const { token, setToken } = useContext(LoginContext)
  const { username, setUsername } = useContext(LoginContext)
  const [date, newDate] = React.useState(new Date(''));
  const [selectRadar, setSelectRadar] = useState("");
  const { imgSource, setImgsource } = useState("")

  let navigate = useNavigate();


  const options = [
    { value: 1, label: 'Select radar' },
    { value: 1, label: 'KABR' },
    { value: 2, label: 'KABX' },
    { value: 3, label: 'KAMA' },
    { value: 4, label: 'PAHG' },
    { value: 5, label: 'PGUA' },
    { value: 6, label: 'KFFC' },
    { value: 7, label: 'KBBX' },
  ];

  const getWeather = (event) => {

    event.preventDefault();
    // const data = new FormData(event.currentTarget);
      var year= String(date.getFullYear())
      var month= String(date.getMonth() + 1)
      var day= String(date.getDate())
      var hour= String(date.getHours())
      var minute= String(date.getMinutes()) 
      var second= String(date.getSeconds())
      var station= selectRadar.label
      var authToken= token

    // Put code for validating data
    
    console.log('token in profile is: ',token)

    axios.post('http://localhost:8080/plotting', { headers: { "authToken": "jsknjskn" }, year, month, day, hour, minute, second, station, authToken })
      .then(res => {
        console.log("this is Data : ", res);

        window.open('http://res.cloudinary.com/dzlhjgubi/image/upload/v1643659320/KTLX20200531_171209_V06.png', '_blank', 'noopener,noreferrer')

      }
      )
      .catch(err => {
        console.log("Error is : ", err)
      });

  };


  const handleLogout = (event) => {

    setAuth(false);
    setUsername("");
    setToken("null")
    navigate("/");

    console.log("Coming to console", date)
  };

  const getHistory = (event) => {

    alert("checking history")

  };


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
          Select your choise!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Typography variant="h9" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={date}
                  onChange={date => newDate(date)}
                //   onChange={(newDate) => {
                //     newDate(date);
                //   }
                // }
                />
              </Stack>
            </LocalizationProvider>

            {/* <FormControl fullWidth> */}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              value={selectRadar}
              options={options}
              onChange={selectRadar => setSelectRadar(selectRadar)}
            >
            </Select>
            {/* </FormControl> */}

            <Button fullWidth onClick={getWeather} > Get Weather Forecast </Button>

          </Box>

        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
          <br /><br />

          <Button fullWidth onClick={getHistory} > User history </Button>
        </Box>
      </Container>


      {/* {Image && } */}

    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}

