
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return <Router>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Profile" component={Profile}/>
          </Switch>
        </Router>
}
  
export default App;