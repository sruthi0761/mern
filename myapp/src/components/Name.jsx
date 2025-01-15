
import React,{useEffect,useState} from 'react'
import {Button} from '@mui/material'

const Name = () => {
    var[str,setstr] = useState()  
    const react =()=>{
        setstr("Welcome to React")
    }
    const ang =()=>{
        setstr("Welcome to Angular")
    }
    const vue =()=>{
        setstr("Welcome to Vue")
    
    }
    useEffect(() =>{
        ang()
    },[])
    return (
    <div>
      <Button variant='contained' onClick={react}>React</Button>
      <Button variant='contained' onClick={ang}>Angular</Button>
      <Button variant='contained' onClick={vue}>Vue</Button>
      <h1>{str}</h1>

    </div>
  )
}

export default Name
