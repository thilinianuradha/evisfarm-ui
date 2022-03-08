import React, { Component } from 'react'
import axios from 'axios'

 class dummy extends Component {
     constructor(props){
         super(props)

         this.state={
             posts:[]
         }
     }
componentDidMount() {
    axios.get('https://localhost:7082/api/[advertisements]')
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    return (
      <div><p>list </p></div>
    )
  }
}

export default dummy
