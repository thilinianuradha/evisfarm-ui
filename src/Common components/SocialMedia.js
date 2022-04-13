import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './SocialMedia.css';

  import React from 'react'
  
  export default function SocialMedia() {
    return (
      <div>
<div class="social-container">
    <div className="d-flex p-2">
      <h3>Follow us on social media</h3>
    
</div>
<div className="d-flex p-2">
<a href="#"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      </div>
      </div>
    )
  }
  