import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Iconify from 'src/components/iconify';


export default function AddTaskPopup() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    handleClose();
  };

  return (
    <>

    <Card 
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      padding:3,
      marginBottom:5,
    }}> 
        <Typography variant="h4">Tasks</Typography>
        <Button variant="contained" onClick={handleClickOpen} color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} align="right">
          New Task
        </Button>
      </Card>
    
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>New Task </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give informations about your task
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="content"
            name="content"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
