
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Navigation from "./Common components/Navigation";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



function App() {
  return <Router>
  <Navigation/>
          <Switch>
         
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Profile" component={Profile}/>
          </Switch>
        </Router>
}
  
export default App;