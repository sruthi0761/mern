import React from 'react'
import {useState} from 'react' 
import {TextField,Button} from '@mui/material'
const State = () => {
    var[name,setname]=useState("ram")
    var[val,setval]=useState()

    const handleinput= (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const change = ()=>{
        console.log("Heyy "+name)
        setval(name)
    }

    
    
  return (
    <div>
      <h1>state basics</h1>
      <h2>welcome {val}</h2>
      <TextField label="Name" variant='outlined' onChange={handleinput}/>
    <Button variant='contained' onClick={change}>Submit</Button>
    </div>
  )

}
export default State
