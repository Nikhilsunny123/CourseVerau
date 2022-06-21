import React from "react";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './CourseDetails.css';
import Card from 'react-bootstrap/Card'


function CourseDetails() {
  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div style={{display:"grid", gridTemplateColumns:"repeat(1, minmax(200px, 700px))"}}>
              <div className="mt-5 w-100">
                <div className="create">
                  <div className="mb-2">
                   <Button variant="info glyphicon glyphicon-plus-sign"  >
                     <Link to="/create" style={{color:'white'}}> Add New Course</Link> 
                   </Button>
                  </div>
                </div>
              </div>
            </div>
          <div>
          <h3>All Courses</h3>
        </div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title style={{color:"blue"}}>Course Name</Card.Title>
                <Card.Text>
                  text to build on the card title.
              </Card.Text>
              <Card.Text>
                  Price : 25000
              </Card.Text>
              <Card.Text>
                  Duration : 6 Months
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <Button variant="primary"><Link to="/edit" style={{color:'white'}}>Edit</Link></Button>
            </Card.Body>
        </Card>
      
      </div>
    </div>
  </div>
  </div>
     

    
  )
}

export default CourseDetails