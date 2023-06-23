import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function ModalContent({ card, onCloseModal, onNextClick }) {
  if (!card) {
    return null;
  }

  const handleCloseClick = () => {
    onCloseModal();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxHeight: '90vh',
        overflow: 'auto',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        p: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 2,
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          {card.title}
        </Typography>
        <img
          src={card.imagePath}
          alt={card.title}
          style={{ width: '100%', height: 'auto' }}
        />
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Category:
          {card.category}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Manufacturer:
          {card.manufacturer}
        </Typography>
        <Typography sx={{ mt: 2 }}>{card.description}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={handleCloseClick}>
            Close
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}


export default ModalContent;
