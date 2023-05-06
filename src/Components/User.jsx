import React from 'react'
import {Container, Card, Col, Button} from 'react-bootstrap'

function User(props) {
  return (
    <Col md="4" style={{marginButtom:"1rem"}}>
      <Card >
      <Card.Body>        
        <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
        <Card.Title>{props.userInfo.name}</Card.Title>
        <Card.Text>
          <p>Email: {props.userInfo.email}</p>
          <p>Gen: {props.userInfo.gen}</p>
        </Card.Text>
        <Button variant="info" size="sm" type="submit">Update</Button>
        <Button variant="danger" size="sm" type="submit" style={{marginLeft:10}}>Delete</Button>
        
      </Card.Body>
    </Card>
    </Col>
  )
}

export default User;
