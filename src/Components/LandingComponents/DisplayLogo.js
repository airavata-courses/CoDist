import React from "react";
import logo from './logo.jpeg';

class DisplayLogo extends React.Component {
    render() {
      return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
      );
    }
  }

  export default DisplayLogo