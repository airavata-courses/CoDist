import React from "react";

class Createaccount extends React.Component {
    render() {
      return (

            <div>
                <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='http://127.0.0.1:3000/register';
                  }}
                > 
                Register now </button>
            </div>
      );
    }
  }

  export default Createaccount