import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h1>Myapp</h1>
          <Link to='/log'>
            <button variant='contained'>Login</button>
          </Link>
          <Link to='/Sign'>
          <button variant='contained'>Signup</button>
          </Link>
          <Link to='/State'>
            <button variant='contained'>State</button>
          </Link>
          <Link to='/Counter'>
            <button variable='contained'>Counter</button>
          </Link>
          <Link to='/Name'>
            <button variable='contained'>Name</button>
          </Link>
          <Link to='/Api'>
            <button vaiable='contained'>Api</button>
          </Link>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar

