import React, { Component } from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
class PostForm extends Component{
constructor(props){
    super(props)
    this.state = {
        typeData : []
    }
}
componentDidMount(){
this.setState({typeData:[
    {Key:"1",Value:"Corona"},
    {Key:"2",Value:"Travel"},
    {Key:"3",Value:"Work"},
    {Key:"4",Value:"Media"}
]});
}
handleType =(e) =>{
e.preventDefault();
}
handleSubmit = (e) =>{
    e.preventDefault();

    const data = {
        id:new Date(),
        title:this.getTitle.value,
        message:this.getMessage.value,
        editing:false
    };

    this.props.dispatch({
        type:'ADD_POST',
        data
    })
    this.getTitle.value = '';
    this.getMessage.value = '';
}   

render(){
    return (
        <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
 <Form>
<Form.Control as="select" onChange={(e) => this.handleType(e)}>
    {this.state.typeData && this.state.typeData.map((e,i) => {
    return <option key={i} value={e.Key}>{e.Value}</option>;
 })}
 </Form.Control>
<Form.Control size="sm" type="text" placeholder="Title" ref={(input) => this.getTitle = input}/>
<Form.Control as="textarea" rows="3" placeholder="Content of the Post" ref={(input) => this.getMessage = input}/>
<br></br>
<Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Post
</Button>
</Form>  </div>
    )
    }
}
export default connect()(PostForm);