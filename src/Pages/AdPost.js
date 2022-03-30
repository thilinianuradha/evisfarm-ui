import axios from 'axios';
import React, { useState } from 'react'

export default function AdPost(Props) {
const [cropType,setcropType] = useState('');
const [cropName, setcropName] = useState('');

function onCreatePost(){
  //e.preventDefault();
  const postData = {
    cropType,
    cropName,
  };
  axios.post('https://localhost:7082/api/crops/posts.json',postData,)
  .then(response=>{
    console.log(response);
  });
}



/*componentDidMount() {
  // POST request using axios with error handling
  const postData = { cropType: 'React POST Request Example' };
  axios.post('https://reqres.in/invalid-url', article)
      .then(response => this.setState({ articleId: response.data.id }))
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });
}
*/



  return (
    <div>
      <h1>Create post form</h1>
    <form onSubmit={onCreatePost}>
      <div className='mb-3'> 
      <label> cropType : </label>
      <input type="text" 
      value={cropType}
      onChange = {(e) => setcropType(e.target.value)}
      className='border border-gray-400'
      placeholder='cropType'
      />
      </div>
      <div className='mb-3'> 
      <label> cropName : </label>
      <input type="text" 
      value={cropName}
      onChange = {(e) => setcropName(e.target.value)}
      className='border border-gray-400'
      placeholder='cropName'
      />
      </div>
      <div className='mb-3'> 
      <button type='submit' className='bg-purple-500 text--white px-3 py-1'>Submit</button>
      </div>
    </form>
    </div>
  )
}
