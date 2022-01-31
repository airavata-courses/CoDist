// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";

// import { Button } from "@chakra-ui/button";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { VStack } from "@chakra-ui/layout";
// // import { Calendar } from "react-calendar";

// import 'date-fns'
// import axios from "axios";
// import React, { useState} from "react";

// import Calendar from 'react-calendar'


// class Weather extends React.Component {
    
//     const [date, setStartDate] = useState (new Date());

//     state = {date = new Date()}

//     onChange = date = () =>{
//         setDate(date)
//     }

//     componentDidMount()
//     {
//         this.getBlogPost();
//     }

//     getBlogPost = () =>{

//         console.log("Got data : ---------------------------------- ", );
//         axios.get('https://jsonplaceholder.typicode.com/todos/')
//         .then ((response)=>{
//             const data = response.data;
//             this.setState({posts : data});
//             console.log("received data", response);
//             console.log("1   data", this.state);

//             console.log("2   data", data);
//         })
//         .catch(()=>{
//             alert('Error in receiving data')
//         });
//     }

//     getWeather= () => {
//       }


//     render() {
//         return (
//             <VStack spacing="10px">
//               <FormControl id="email" isRequired>
                
//               <DatePickerComponent></DatePickerComponent>
        
//               </FormControl>
              
//               <Button
//                 variant="solid"
//                 colorScheme="red"
//                 width="100%"
//                 onClick={ this.getWeather }
//               >
//                 Submit
//               </Button>
//             </VStack>
//           );
//     }
//   }

//   export default Weather;
  
// import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import axios from 'axios';
import { DeprecatedLayoutGroupContext } from 'framer-motion';




function Weather() {
    const [date, setStartDate] = useState(new Date());
    const [selectRadar, setSelectRadar] = useState("");

    const options = [
      {value:1, label:'Select radar'},
      {value:1, label:'Radar1'},
      {value:2, label:'Radar2'},
      {value:3, label:'Radar3'},
      {value:4, label:'Radar4'},
      {value:5, label:'Radar5'},
      {value:6, label:'Radar6'},
      {value:7, label:'Radar7'},
    ];


// const handleChange = obj => {
//   alert("HIii")
//   setRadar(obj);
// }
function handleSubmit(event){
  
  // var year = date.year();
  // var month = date.getDate();
  // var date = date.getDate();
  // var hours = date.getDate();
  // var minutes = date.getFullYear();
  // var seconds = date.getDate();
  // var radar = selectRadar.label;
  

  // var plotdata = {"year" : year ,"month": month, "day": date, "hour": hours, "minute": minutes, "second": seconds, "radar": radar}
  // console.log(d, date.getMonth, date.getDate, date.setHours, date.setMinutes, date.setSeconds, selectRadar.label)
  
  
  
  
  var plotdata = {"year" : date.getFullYear() ,"month": date.getMonth()+1, "day": date.getDate(), "hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds(), "radar": selectRadar.label}
  
  
  axios.post('https://jsonplaceholder.typicode.com/posts',
    { headers: { "authorization" : "token" }, plotdata })
    .then(res => {
      // token = setToken(res.authorization);
      console.log("This is the response : \n", res.data.SignUpStatus);
      console.log("Full Response ", res);
    })
    .catch(err =>{
      console.log("Error is : ", err)
    });
  
}
  return (
    <div>

        <p>Select Date</p>
        <DatePicker 
        selected={date} 
        onChange={date => setStartDate(date)} 
        />

        <p>Select Radar</p>
        <Select value = {selectRadar} options={options} onChange={selectRadar => setSelectRadar(selectRadar)}/>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button
            variant="solid"
            colorScheme="red"
            width="100%"
            onClick={handleSubmit}
        >
        Submit
        </Button>


    </div>
  );
}

export default Weather;