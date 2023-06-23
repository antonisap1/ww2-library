import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MenuListComposition from './MenuListComposition';


function MyAppBar({ onCountrySelect }) {
  const [open, setOpen] = useState(false);

  const handleMenuIconClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCountrySelect = (country) => {
    onCountrySelect(country); // update selectedCountry state in parent App component
    setOpen(false); // close menu drawer
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}  onClick={handleMenuIconClick} >
          <MenuIcon/>  
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>     
        <MenuListComposition
          open={open}
          onClose={() => setOpen(false)}
          setSelectedCountry={handleCountrySelect}
        />
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;