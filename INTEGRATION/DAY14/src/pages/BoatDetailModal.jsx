
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import BoatDetails from './BoatDetails';;
import '../assets/css/Modal.css'
const BoatDetailsModal = ({ isOpen, onClose, onAddBoat }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="boat-details-modal-title"
      aria-describedby="boat-details-modal-description"
    >
      <DialogTitle id="boat-details-modal-title">Adding new boat Details</DialogTitle>
      <DialogContent>
        <BoatDetails onAddBoat={onAddBoat} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BoatDetailsModal;
