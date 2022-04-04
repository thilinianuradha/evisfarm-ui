
import Login from "./Pages/Login";
//import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Crop from "./Pages/Crop";
import SignUp from "./Pages/Signup";
import Ad from "./Common components/Ad";
import Marketplace from "./Pages/Marketplace";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Notifications from "./Pages/Notifications";
import AdInfo from "./Pages/AdInfo";
import dummy from "./Pages/dummy";
import Bid from "./Pages/Bid"
import Contact from "./Pages/Contact";
import SocialMedia from "./Common components/SocialMedia";
import AboutUs from "./Pages/AboutUs";
import ProfileX from "./Pages/ProfileX";
import AdPost from "./Pages/AdPost";
import SearchBar from "./Common components/SearchBar";




function App() {
  return <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
         
            <Route exact path="/Crop" component={Crop}/>
            <Route exact path="/Signup" component={SignUp}/>
            <Route exact path="/Ad" component={Ad}/>
            <Route exact path="/Marketplace" component={Marketplace}/>
            <Route exact path="/Notifications" component={Notifications}/>
            <Route exact path="/AdInfo" component={AdInfo}/>
            <Route exact path="/dummy" component={dummy}/>
            <Route exact path="/Bid" component={Bid}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/SocialMedia" component={SocialMedia}/>
            <Route exact path="/AboutUs" component={AboutUs}/>
            <Route exact path="/ProfileX" component={ProfileX}/>
            <Route exact path="/AdPost" component={AdPost}/>
            <Route exact path="/SearchBar" component={SearchBar}/>
        

          </Switch>
        </Router>
}
  
export default App;