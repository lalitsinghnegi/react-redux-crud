import React, { Component } from 'react';
import AllPosts from './AllPosts';
import PostForm from './PostForm';

class Crud extends Component{
render(){
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Post It</h2>
    </div>
<PostForm></PostForm>
<AllPosts></AllPosts>
</div>
)
}
}

export default Crud;