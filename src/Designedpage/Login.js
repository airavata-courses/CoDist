import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';

import { useContext } from 'react';
import {LoginContext} from '../Context/LoginContext';

import { useNavigate } from "react-router-dom";
import { baseUrl } from '../baseurls';



const theme = createTheme();

export default function SignIn() {
  
const {auth, setAuth} = useContext(LoginContext)
const {token, setToken} = useContext(LoginContext)
const {username, setUsername} = useContext(LoginContext)
const {userId, setUserId} = useContext(LoginContext)
const [ tempState, setTempState] = useState("")

let navigate = useNavigate(); 
var respectiveData;
var respectiveEmail;
var respectivePassword;



const handleSubmit = async (event) => {    
  
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  var email = data.get('email')
  var password = data.get('password')
  respectiveEmail = email
  respectivePassword = password


  const input = { email, password };
  console.log(input)
  
await axios.post(baseUrl+'/login', {email, password }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
  .then((res) => {
  
    if(res.data.statusCode == "userNotExists"){
      alert("SIGN UP PLEASE")
    }else if (res.data.status){

      
      setAuth(true)
 
      
      console.log("this is Data : ", res.data.response.result.token)
      setToken(res.data.response.result.token)

      console.log("resp Token", res.data.response.result.token)
      
      setUserId(String(res.data.response.result._id))
      console.log("User Id: ", userId)
      setUsername(JSON.stringify(email))

      
      setTempState(res.data.response.result.token)
      navigate("/profile");
    }else{
      alert("User Not Authenticated")
    }
  })
  .catch(err =>{
    console.log("Error is : ", err)
  });

};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}