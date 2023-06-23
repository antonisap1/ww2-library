import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function FilterMenu({ anchorEl, onClose, weaponCategory, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setSelectedCategory('');
  }, [weaponCategory]);

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
    onClose();
  };

  const handleRemoveFilter = () => {
    setSelectedCategory('');
    onCategorySelect('');
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
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
      {selectedCategory && (
        <MenuItem onClick={handleRemoveFilter}>
          Remove Filter
        </MenuItem>
      )}
      {weaponCategory.map((category) => (
        <MenuItem key={category} onClick={() => handleMenuItemClick(category)}>
          {category}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default FilterMenu;
