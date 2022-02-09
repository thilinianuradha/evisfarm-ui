
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



function App() {
  return <Router> 
            <Switch> 
                <Route path="/Login" component={Login} /> 
                <Route path="/Profile" component={Profile} /> 
                <Route path="/" component={Home} /> 
            </Switch>
          </Router>
}
  
export default App;