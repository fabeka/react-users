import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

export default class AddUserForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      gen:""
    }
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gen</Form.Label>
          <Form.Control type="number" placeholder="Gen" name="gen"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
