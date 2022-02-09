import React from 'react'
import './Home.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login'


function Home() {
  return (
    <div className='home'> <h1>EvisFarm</h1>
    <p>This is "EvisFarm" Home page </p>
      <Link to="/Login"><button> Login </button></Link>
                   <Router>
                   <Switch> 
                <Route path="/Login" component={Login} /> 
            </Switch> </Router>
    </div>
  )
}

export default Home