
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Crop from "./Pages/Crop";
import SignUp from "./Pages/Signup";
import Ad from "./Common components/Ad";
import Marketplace from "./Pages/Marketplace";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Notifications from "./Pages/Notifications";
import AdInfo from "./Pages/AdInfo";
import dummy from "./Pages/dummy";




function App() {
  return <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Crop" component={Crop}/>
            <Route exact path="/Signup" component={SignUp}/>
            <Route exact path="/Ad" component={Ad}/>
            <Route exact path="/Marketplace" component={Marketplace}/>
            <Route exact path="/Notifications" component={Notifications}/>
            <Route exact path="/AdInfo" component={AdInfo}/>
            <Route exact path="/dummy" component={dummy}/>
          </Switch>
        </Router>
}
  
export default App;