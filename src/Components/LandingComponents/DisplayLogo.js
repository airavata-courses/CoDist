import React from "react";
import logo from './logo.jpeg';

class DisplayLogo extends React.Component {
    render() {
      return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            // <h1>Hiii</h1>
      );
    }
  }

  export default DisplayLogo