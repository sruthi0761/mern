import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
             <AppBar position='sticky'style={{backgroundColor:"blue",}}>
            <Toolbar>
           <img className='a2' src="https://www.usnews.com/object/image/00000191-d821-d8b8-adf7-f97944b10000/chevrolet-corvette-zr1-coupe-001.jpg?update-time=1725907944302&size=responsiveGallery" alt="" height={100} width={100}/>
                 
                
              
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{color:"white",fontFamily:"-moz-initial"}}>THE BLOG</Typography>
                <Link to='/add'>
                    <Button variant="contained">Login</Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/view'>
                    <Button variant="contained">VIEW</Button>
                </Link>
               
               
                &nbsp;
               
            </Toolbar>
        </AppBar>
        </div >
    )
}

export default Navbar