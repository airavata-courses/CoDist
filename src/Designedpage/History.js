import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
        {logs.response.map((item, i) => (
                <tr key={i}>
                <td>{item.insertedOn}</td>
                <td>{item.logDetails}</td>
                <td>{item.logtype}</td>
                </tr>
            ))}
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}