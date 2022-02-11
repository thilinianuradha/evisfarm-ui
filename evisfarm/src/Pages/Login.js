import React, { Component} from "react";
import './Login.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Profile from "./Profile";

class Login extends Component
{
  render(){
    return (
          <div className="Log">
              <h2>Welcome to Evisfarm !</h2>
             <form> 
                <label> <p>Username</p> <input type="text" /> </label>
                <label> <p>Password</p> <input type="password" /> </label>
                 <div>
                   <Link to="/Profile"><button> Submit </button></Link>
                   <Router>
                   <Switch> 
                     <Route path="/Profile" component={Profile} /> 
                   </Switch> 
                   </Router>
                   </div>
                   </form>
          </div>
    );
}
}
export default Login;