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
    axios.get('https://localhost:7082/api/[crops]')
    .then(response =>{
        console.log(response)
        this.setState({posts : response.data})
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    const { posts } = this.state
    return (
      <div>
      list of state
      {
        posts.length ?
        posts.map(post => <div key={post.id}>{post.id} {post.cropType} {post.cropName}</div>) :
        null
      }
      </div>
    )
        }
  }

export default dummy

