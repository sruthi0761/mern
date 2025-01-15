import React from 'react'
import TextField from '@mui/material/TextField';

const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      
    email:<input type="text" name="" id="" />
    <br/>
    password:<input type="text" name="" id="" />
    <br/>
    confirm password:<input type="text" name="" id="" />
    <br/>
    <TextField id="outlined-basic" label="Full name" variant="outlined" />
    <TextField id="outlined-basic" label="Phone number" variant="outlined" />
    <br/><button>Sign Up</button>
    </div>
  )
}

export default SignUp
