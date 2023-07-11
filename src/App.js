import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './Components/Users';
import { Component } from 'react';
import AddUserForm from './Components/AddUserForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
         {
          name:"Yaw Barima",
          email:"yawbarima@gmail.com",
          gen:10
         },
         {
          name:"Ama Mensah",
          email:"ama12@gmail.com",
          gen:12
         },
         {
          name:"Eric Coffie",
          email:"ohio66@gmail.com",
          gen:14
         },
      ]
    }
  }
  addNewUser=(user)=>{
      this.setState({
        users: [...this.state.users, user]
      })
  }
  render(){
  return (
    <div className="App">
      
    <Container fluid style={{marginTop:"2rem" }}>
        <Row >
            <Col md="4">
              <AddUserForm addUser={this.addNewUser}/>
            </Col>

            <Col>
              <Users usersData={this.state.users}/>
            </Col>

        </Row>
    </Container>
    </div>
  );
}
}

export default App;
