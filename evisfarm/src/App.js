
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return <Router>
          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Profile" component={Profile}/>
          </Switch>
        </Router>
}
  
export default App;