
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../baseurls';


export function GetUserHistoryData(userId, token){

    // userId = String(1)
    console.log("UserId in getUserHistoryData: ", userId );
    console.log("token is: ", token);

    const [logs, setLogs] = useState([]);



    // https://jsonplaceholder.typicode.com/todos/
    // axios.post('https://17b1-2601-801-103-1100-e4da-695-aec6-f00f.ngrok.io/logging', {userId, token })
      
      axios.post(baseUrl + '/logging', {userId, token })
      .then(res => {
        console.log("this is Plotted Result : ", res);
        console.log("this is Plotted image : ", res.data);
        setLogs(res.data)
        window.open(res.data, '_blank', 'noopener,noreferrer')
      })
      .catch(err => {
        console.log("Error is : ", err)
      });


      return (
        logs.map((item, i) => {
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.complete}</td>
            <td>{item.id}</td>
          </tr>
        })
      )

}

