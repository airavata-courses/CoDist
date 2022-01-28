import React from "react";
import './App.css';
import Landingpage from "./Components/Landingpage";
import EnterDetails from "./Components/RegistrationPage/EnterDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

class App extends React.Component {

  render() {
      return (


        <Router>
          <Routes>
              <Route exact path='/' element={< Landingpage />}/>
              <Route exact path='/register' element={< EnterDetails />}/>
              
            </Routes>
        </Router>
        // <BrowserRouter>
        //     <Route path='/' component={Createaccount} />
        // </BrowserRouter>
                      // <div className="App">
                      //     <header className="App-header">
                      //       <DisplayLogo></DisplayLogo>
                      //       <p>
                      //         Login to check weather update
                      //       </p>
                      //       <Login></Login>
                            
                      //       <h3>Not resistered</h3>
                            
                      //       <Createaccount></Createaccount>
                      //       <GLogin></GLogin>
                      //       <GLogout></GLogout>
                      //     </header>
                      //   </div>
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