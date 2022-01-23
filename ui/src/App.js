import React from "react";
import logo from './logo.jpeg';
import './App.css';

class App extends React.Component {

  render() {
      return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Login to check weather update
                </p>
                
                <input type="email" placeholder = "Username"/>
                <input type="password" placeholder = "Password"/>

                <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='http://127.0.0.1:8000';
                  }}
                > 
                Log in </button>
                <h3>Not resistered</h3>
                <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='http://127.0.0.1:8000/register';
                  }}
                > 
                Register now </button>
                {/* <h3>Not resistered</h3> */}
                <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='http://127.0.0.1:8000/GoogleApi';
                  }}
                > 
                Log in with google </button>
                {/* <h3>Not resistered</h3> */}
        
              </header>
            </div>
          );
  }
}

export default App;
