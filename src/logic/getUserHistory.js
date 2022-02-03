
import axios from 'axios';

export function getUserHistoryData(userId, token){

    // userId = String(1)
    console.log("UserId in getUserHistoryData: ", userId )
    console.log("token is: ", token)



    axios.post('https://17b1-2601-801-103-1100-e4da-695-aec6-f00f.ngrok.io/logging', {userId, token })
      .then(res => {
        console.log("this is Plotted Result : ", res);
        console.log("this is Plotted image : ", res.data);

        // window.open('http://res.cloudinary.com/dzlhjgubi/image/upload/v1643659320/KTLX20200531_171209_V06.png', '_blank', 'noopener,noreferrer')
        window.open(res.data, '_blank', 'noopener,noreferrer')


      }
      )
      .catch(err => {
        console.log("Error is : ", err)
      });

}

