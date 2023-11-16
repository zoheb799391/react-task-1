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
import { useEffect, useState } from 'react'
import img from '../assets/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg'
import '../fetch.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Backdrop, Box, Divider, List, ListItem, ListItemText, Modal } from '@mui/material';

const componentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #67A1D5',
  boxShadow: 24,
  p: 1,
  // overflowx: 'auto',
  // maxHeight: '75vh',
};

const Tables = (zohebTableProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedRow, setSelectedRow] = useState(null);
  console.log(' log data of zohebTableProps', zohebTableProps)

  // const ZohebTablePropsData = ({ zohebTableProps }) => {
  //   return (
  //     <List>
  //       { zohebTableProps && zohebTableProps.data && zohebTableProps.data.map((data, index) => {
  //         <>
  //           <ListItem sx={{ display: 'flex', justifyContent: 'center' }} key={`zoheb_data_${index}`}>
  //            <ListItemText primary="LLLLL" />
  //           </ListItem>
  //           <Divider component="li" />
  //         </>
  //       })}
  //     </List>
  //   )
  // }

  useEffect(() => {
    console.log(selectedRow);
  }, [selectedRow]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
<>
      { zohebTableProps && zohebTableProps.data !== undefined ?
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell > id</TableCell>
                <TableCell >username</TableCell>
                <TableCell >email</TableCell>

                <TableCell >name</TableCell>


              </TableRow>
            </TableHead>

            <TableBody>
              {zohebTableProps.data.map((row) => (
                <ListItemButton onClick={handleClickOpen}>
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
          <img src={img} alt='no data' />
          <h1>no data found </h1>
        </div>
      }
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        timeout: 500,
      }}
    >
      <Box sx={componentStyle}>
        <h1>
          Modal Title
        </h1>
       <div>
          <List>
            { zohebTableProps && zohebTableProps.data && zohebTableProps.data.map((data) => {
              return (
                <>
                <ListItem sx={{ display: 'flex', justifyContent: 'center' }} key={data.id}>
                <ListItemText>
                id : -{data.id}
                </ListItemText>
                <ListItemText>
                username : -{data.username}
                </ListItemText>
                <ListItemText>
                email : -{data.email}
                </ListItemText>
                <ListItemText>
                name : -{data.name}
                </ListItemText>
                </ListItem>
                <Divider component="li" />
             
              </>
              )
            })}
        </List>
       </div>
       <div>
        <Button> Submit </Button>
        <Button> Ok </Button>
        <Button onClick={handleClose}>  Cancel </Button>
       </div>
      </Box>
   </Modal>
  </>
);

}



export default Tables;









