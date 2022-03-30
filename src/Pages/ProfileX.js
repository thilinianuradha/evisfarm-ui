import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'
import React, { Component } from 'react'
import AdPost from './AdPost'

export default class ProfileX extends Component {
  render() {
    return (
      <div>
        <Link to="AdPost"><button> CLICK </button></Link> 
      </div>
    )
  }
}
