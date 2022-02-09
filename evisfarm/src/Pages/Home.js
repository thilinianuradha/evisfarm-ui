import React from 'react'
import './Home.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login'


function Home() {
  return (
    <div className='home'> <h1>Welcome to EvisFarm</h1>
      <Link to="/Login"><button> Login </button></Link>
                   <Router>
                   <Switch> 
                <Route path="/Login" component={Login} /> 
            </Switch> </Router>
    </div>
  )
}

export default Home