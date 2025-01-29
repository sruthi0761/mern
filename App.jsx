import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'
import Add from './components/Add'
import Home from './components/Home'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     
    <br></br><br></br><br></br><br></br>
     
      
 
      <Navbar></Navbar>

      
        
        
      <Routes>
       
        <Route path="/add" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>
       
      
       
       
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>

    </>
  )

}

export default App