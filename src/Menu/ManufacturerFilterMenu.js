import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function FilterListMenu({ anchorEli, onClose, weaponManufacturer, onManufacturerSelect }) {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  useEffect(() => {
    setSelectedManufacturer('');
  }, [weaponManufacturer]);

  const handleMenuItemClick = (manufacturer) => {//Sets selected manufacturer if any
    setSelectedManufacturer(manufacturer);
    onManufacturerSelect(manufacturer);
    onClose();
  };
  const handleRemoveFilter = () => { //nullifies deselected filter
    setSelectedManufacturer('');
    onManufacturerSelect('');
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEli}
      open={Boolean(anchorEli)}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {selectedManufacturer && (
        <MenuItem onClick={handleRemoveFilter}>
          Remove Filter
        </MenuItem>
      )}
      {weaponManufacturer.map((manufacturer) => ( //displays all the unique manufacturer
        <MenuItem key={manufacturer} onClick={() => handleMenuItemClick(manufacturer)}>
          {manufacturer}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default FilterListMenu;
