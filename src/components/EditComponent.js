import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class EditComponent extends Component{
    handleUpdate = (e) =>{
        console.log("handle update")
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        };
        this.props.dispatch({ type: 'UPDATE_POST', id: this.props.post.id,data:data })
    }
render(){
    return (
        <div key={this.props.post.id} className="post">
        <Form>
       <Form.Control size="sm" type="text" placeholder="Title" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title}/>
       <br /><br />
       <Form.Control as="textarea" rows="3" placeholder="Content of the Post" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message}/>
       <br></br>
       <Button variant="primary" type="submit" onClick={(e)=>this.handleUpdate(e)}>
           Update
         </Button>
       </Form>
       </div>
    )
}
}

export default connect()(EditComponent);