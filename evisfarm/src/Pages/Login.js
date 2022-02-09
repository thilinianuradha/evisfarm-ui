import React from "react";
import './Login.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Profile from "./Profile";

function Login() 
{
    return (
          <div className="Log">
             <form> 
                <label> <p>Username</p> <input type="text" /> </label>
                <label> <p>Password</p> <input type="password" /> </label>
             <div>
                <button type="submit">Submit</button>
             </div>
            </form>
               
                   <Link to="/Profile"><button> USER </button></Link>
                   <Router>
                   <Switch> 
                     <Route path="/Profile" component={Profile} /> 
                   </Switch> 
                   </Router>
          </div>
    );
}
export default Login;