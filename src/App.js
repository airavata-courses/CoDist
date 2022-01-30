import React from "react";
import './App.css';
import Landingpage from "./Components/Landingpage";
import EnterDetails from "./Components/LandingComponents/EnterDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

class App extends React.Component {

  render() {
      return (


        <Router>
          <Routes>
              <Route exact path='/' element={< Landingpage />}/>
              <Route exact path='/register' element={< EnterDetails />}/>
              <Route exact path='/dashboard' element={< EnterDetails />}/>
              
            </Routes>
        </Router>
          );
  }
}

export default App;


// <div className="App">
//                           <header className="App-header">
//                             <DisplayLogo></DisplayLogo>
//                             <p>
//                               Login to check weather update
//                             </p>
//                             <Login></Login>
                            
//                             <h3>Not resistered</h3>
                            
//                             <Createaccount></Createaccount>
//                             {/* <GLogin></GLogin>
//                             <GLogout></GLogout> */}
//                           </header>
//                         </div>