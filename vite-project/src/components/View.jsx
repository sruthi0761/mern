import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const View = () => {
    const [data,setdata]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data)
        setdata(res.data)
    })
  return (
    <div>
      <h1>TABLE</h1>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.body}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default View