import { Link } from '@mui/material'
import React, { Component } from 'react'

export default class ProfileX extends Component {
  render() {
    return (
      <div>
          <Link to = "/AdPost" > <button>Create Post</button></Link>
      </div>
    )
  }
}
