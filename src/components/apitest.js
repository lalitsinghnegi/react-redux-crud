import React,{Component} from 'react';
import testing from '../services/testing.service';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class APITest extends Component {
  constructor(props){
    super(props)
    this.state ={
      responseData:""
    }
    this.handleCallApi = this.callApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  callApi = (api) =>{
   
     console.log('test api called ...')
     testing.gettestapi(api)
     .then(res=>{
       this.setState({
        responseData:JSON.stringify(res)
       })
     })
    }
    handleChange = (event) =>{
      this.setState({responseData: event.target.value});
    }
 render(){
        return (
        <div>
       <Jumbotron>
  <h1>API Test url</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <Form inline>
  <Button variant="outline-primary" onClick={()=>this.handleCallApi('auth')}>Authanticate</Button>
  <Button variant="outline-primary" onClick={()=>this.handleCallApi('cus/viaCAC')}>Customer via CAC</Button>
  
  </Form>
  <hr></hr>
  <p>Response</p>
  <Form.Control as="textarea" rows="15" onChange={()=>this.handleChange}  value={this.state.responseData} />
 
 
</Jumbotron>
        </div>
        )
    }
}

export default APITest;