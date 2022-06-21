import React, { Fragment } from 'react'

import './Create.css';

import Navbar from "../Navbar";

function Create() {
  return (
    <Fragment>
      <Navbar/>
      
      <card>
        <div className="centerDiv">
            <h1 style={ {position:'center' ,color :"blue"}}>Add New Course</h1>
            <label htmlFor="fname">Course Name</label>
            <br />
            <input
              className="input"
              type="text"
              
           
              id="fname"
              name="Name"
             
            />
            <br />
            <label htmlFor="fname">Course content</label>
            
              <br />
            <textarea className="input" rows="5" cols="50" id="multiLineInput"></textarea>
            <br />
            <label htmlFor="duration">Course duration</label>
            <br />
            <input className="input" type="time"
            
            id="duration" name="courseduration" />
            <br />

            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"
            
            id="fname" name="Price" />
            <br />
          
          <br />
          <label htmlFor="fname">Photo</label>
            <br />
            <input 
            
            type="file" />
            <br />
            <button  className="uploadBtn">Upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  )
}

export default Create