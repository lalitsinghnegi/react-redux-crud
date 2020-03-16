import  React,{ Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
class Post extends Component {
  handleDelete = (e) => {
    console.log(e)
    e.preventDefault();
    this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })
  }
  handleEdit = (e) => {
    console.log(e)
    e.preventDefault();
    this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
  }
render(){
  console.log("inside Post:",this.props.post);
  return (
        <div className="post">
        <h2 className="post_title">{this.props.post.title}</h2>
        <p className="post_message">{this.props.post.message}</p>
        <div className="control-buttons">
        <Button className="edit" onClick={this.handleDelete}>Delete</Button>
        <Button className="delete" onClick={this.handleEdit}>Edit</Button>
        </div>
        </div>
  )
}
}

export default connect()(Post);