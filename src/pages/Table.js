import React from 'react'
// import { useState, useEffect } from 'react';
// import Fetch from '../pagesz/Fetch'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import { useEffect, useState, useContext } from 'react'
import img from '../assets/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg'
import '../fetch.css';
// import context from '../context/context';
import usecontext from '../context/usecontext';




const Tables = (zohebTableProps) => {
  const [selectedRow, setSelectedRow] = useState(null);
  console.log(' log data of zohebTableProps', zohebTableProps)
  const source = useContext(usecontext)

 
  useEffect(() => {
    console.log(selectedRow);
  }, [selectedRow]);
  
  return (
<>
      { zohebTableProps && zohebTableProps.data !== undefined ?
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell > Id</TableCell>
                <TableCell >Username</TableCell>
                <TableCell >Email</TableCell>

                <TableCell >Name</TableCell>


              </TableRow>
            </TableHead>

            <TableBody>
              {zohebTableProps.data.map((row) => (
                <ListItemButton >
                  <TableRow
                    key={row.id} onClick={() => setSelectedRow(row)} 

                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    </TableCell>
                    <TableCell align='left' >{row.id}</TableCell>
                    <TableCell align='left'>{row.username}</TableCell>
                    <TableCell align='left'>{row.email}</TableCell>
                    <TableCell align='left'>{row.name}</TableCell>


                  </TableRow>
                </ListItemButton>

              ))}
            </TableBody>
          </Table>
        </TableContainer> 
        : 
        <div className='no-data' >
     <img src={source.picture} alt='img no data'/>
          <h1>{source.content} </h1>
        </div>
      }
   
  </>
);

}



export default Tables;









