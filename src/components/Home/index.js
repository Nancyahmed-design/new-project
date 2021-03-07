import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Home =() =>{
    return (
        <>
        <div>
        <Jumbotron fluid className=" bg-primary">
        <Container fluid className="text-white ">
          <h1 className="display-3 text-right">To Do App</h1>
          <p className="lead text-right">Add new to do</p>
          <input type="text" className="form-control form-control-sm" placeholder="Enter New task"/>
          <button className="btn btn-primary">add</button>
        </Container>
      </Jumbotron>
        </div>
        </>
    )

}
export default Home;