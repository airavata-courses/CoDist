

import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {LoginContext} from './LoginContext';



function Profile(){

    const { username } = useContext(LoginContext)

    let navigate = useNavigate(); 
    
    return (
        

        <div>Welcome Profile {username}!
            {/* <button onClick={()=>{
                setAuth(false)
                navigate("/")
            }}>Logout</button> */}
        </div>
    );
  }

  export default Profile;







  