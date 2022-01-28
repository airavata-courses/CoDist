import React from "react";
import Createaccount from "./LandingComponents/Createaccount";
import DisplayLogo from "./LandingComponents/DisplayLogo";
import Login from "./LandingComponents/Login";
// import Landingpage from "./Components/Landingpage";

// import { GoogleLogin, GoogleLogout} from "react-google-login";
import GLogin from "./LandingComponents/GLogin";
import GLogout from "./LandingComponents/GLogout";

class Landingpage extends React.Component {
    render() {
      return (

            <div className="App">
                          <header className="App-header">
                            <DisplayLogo></DisplayLogo>
                            <p>
                              Login to check weather update
                            </p>
                            <Login></Login>
                            
                            <h3>Not resistered</h3>
                            
                            <Createaccount></Createaccount>
                            {/* <GLogin></GLogin> */}
                            {/* <GLogout></GLogout> */}
                          </header>
                        </div>
      );
    }
  }

  export default Landingpage