import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from './Card'

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import { useState } from "react";




// const theme = createTheme();

export default function History(props) {

    const {logs, setLogs} = useContext(LoginContext)
    const theme = createTheme();
    console.log("logs" , logs.response)
    const filteredLogs = logs.filter(e=> e.logType === "RESPONSE");

    console.log("Filtered LOGS: ", filteredLogs)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{margin:'40px'}} >

        {filteredLogs.map((e) =>{
            return (
              <Card  userId={e.userId} 
                      logIdentifier={JSON.parse(e.logIdentifier)} 
                      insertedOn={e.insertedOn} 
                      logType = {e.logType}
                      logDetails = {e.logDetails}
                      url = {e.url}
                      />
          );})}
            
            


          {logs.map((e)=>{
              
          })}
          </div>



        {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <table style={{border: "1px solid black" }}>
            <tr >
                <th style={{border: "1px solid black" }}>TIMESTAMP</th>
                <th style={{border: "1px solid black" }}>LOG ID</th>
                <th style={{border: "1px solid black" }}>LOG TYPE</th>
                <th style={{border: "1px solid black" }}>LOG DETAILS</th>
                <th style={{border: "1px solid black" }}>URL</th>
            </tr>
            {logs.response.map((item, i) => (
                    <tr key={i}>
                    <td style={{border: "1px solid black" }}>{item.insertedOn}</td>
                    <td style={{border: "1px solid black" }}>{JSON.parse(item.logIdentifier)}</td>
                    <td style={{border: "1px solid black" }}>{item.logType}</td>
                    <td style={{border: "1px solid black" }}>{item.logDetails}</td>
                    <td style={{border: "1px solid black" }}>{item.url}</td>
                    </tr>
                ))}
            </table>


        </Box> */}
      </Container>
    </ThemeProvider>
  );
}