
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Crop from "./Pages/Crop";
import SignUp from "./Pages/Signup";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'




function App() {
  return <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Crop" component={Crop}/>
            <Route exact path="/Signup" component={SignUp}/>
          </Switch>
        </Router>
}
  
export default App;