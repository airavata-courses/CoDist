import React from "react";
import './App.css';
import Landingpage from "./Components/Landingpage";
import EnterDetails from "./Components/LandingComponents/EnterDetails";
import Dashboard from "./Components/LandingComponents/Dashboard";
// import { useState } from "react";
// import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
// import { authContext } from "./Components/authContext";

function App(){

    // const authConxt = useContext(authContext);

    // const [auth, setAuth] = useState(false);
    // const [token, setToken] = useState("pppp");
    
    
    return (
  
            <Router>
              <Routes>
                  <Route exact path='/' element={< Landingpage />}/>
                  <Route exact path='/register' element={< EnterDetails />}/>
                  {/* <authConxt.isLoggedIn && ( Route exact path='/profile' element={<Dashboard />)} /> */}
                  <Route path = '*' element={<Landingpage />}> </Route>
                  <Route exact path='/plotting' element={< Dashboard />}/>
                </Routes>
            </Router>

          );
    }
  


export default App;
