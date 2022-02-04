import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';




export default function Historyinfo(props) {

    const [ id, setId ] = useState(props.id)
    const [ log, setLog ] = useState(props.log)
    const [ type, setType ] = useState(props.type)
    const [datetime, setDatetime] = useState(props.time)
    const [details, newDetails] = useState(props.details)
    const [url, selUrl] = useState(props.url)

    function getDateTime(){
        
        var getArray = datetime.split('T')
        alert(getArray)
        var date = getArray[0].split('-')
        var time = getArray[1].split(':')
        alert("Date : " + date + " Time : " + time)


        console.log("Hour is: ", hour)
        axios.post(baseUrl+'/plotting', {year, month, day, hour, minute, second, station, authToken }, { headers: { "authToken" : String(authToken) , 'Access-Control-Allow-Origin': "*"} })
        .then((res) => {
        console.log("this is Data : ", res);
        window.open(res.data)
        })
        .catch(err =>{
        console.log("Error is : ", err)
        });
    }


    const handleClick = (event) => 
    {
        getDateTime()
         
        
    }

  return (
    <div>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 5fr)' }}>
                

                <h5>{props.id}</h5> 
                <h5>{props.log} </h5>
                <h5>{props.type}</h5> 
                <h5>{props.time}</h5> 
                <h5>{props.details}</h5> 
                <h5>{props.url} </h5>

               
            </Box>
            <button onClick={handleClick}>Button1</button>

        {/* <h5>jii</h5> */}
    </div>
  );
}