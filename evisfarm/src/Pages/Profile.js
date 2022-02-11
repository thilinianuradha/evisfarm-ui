import React from "react";
import { useHistory } from "react-router";
import './Profile.css';

function Profile(){
let history = useHistory();

    return (
        <div className="user_profile"> <h1>welcome user #####</h1>
        <button onClick={() => {history.push('./Home')}}> Back to Home </button>
       
     </div>

        );
    }
    export default Profile;