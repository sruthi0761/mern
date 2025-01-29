import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Add = () => {
  return (
    <div>
      <h1>ENTER THE DETAILS </h1>
   
      
       
            <br /><br />
            <TextField variant='outlined'label="Enter Blog "style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField variant='outlined'label="Enter Description"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
            <TextField variant='outlined'label="Enter Authour Name"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField variant='outlined'label="Enter Blog Name"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br /><br /><br /><br />
            <Button variant='contained'style={{backgroundColor:"white",color:"black"}}>Submit Blog</Button><br /><br />
           
                      <br /><br />
      
        <br /><br /><br /> <Link to='/home'>
                          <Button variant="contained">HOME</Button>
                      </Link>
  
      
    </div>
  )
}

export default Add