
import {Button} from '@mui/material'
import React, {useState} from 'react'
const Counter = () => {
    var[count, setCount]= useState(0)

    const add = () =>{
        setCount(val+1)

    }
    const sub =() =>{
        setCount(val-1)
    }
    
  return (
    <div>
      <Button variant='contained'onClick={add}>Increment</Button>
      <Button variant='contained'onClick={sub}>Decrement</Button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
