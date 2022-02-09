import React from "react";

function Login() {
    return (
          <div className="Log">
             <h2> Welcome to EvisFarm !  </h2>
             <h1> Login  </h1>
             <div className="textbox">
                 <label for="Username">Username/E-mail </label>
                 <input type="text" placeholder="" name="" value=""></input>
             </div>
             <div className="textbox">
                 <label for="Password">Password  </label>
                 <input type="Password" placeholder="" name="" value=""></input>
             </div>
                <button> Login </button>
          </div>
    );
}
export default Login;