import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import SearchField from './SearchField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterMenu from '../Menu/CategoryFilterMenu';
import FilterListMenu from '../Menu/ManufacturerFilterMenu';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';



function HeroUnit({ onSearch, weaponNames,weaponCategory,onCategorySelect,weaponManufacturer,onManufacturerSelect }) {
  //console.log('Weapon Names:', weaponNames);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFilterListActive, setIsFilterListActive] = useState(false);
  const [anchorEli, setAnchorEli] = useState(null);

  const handleSearch = (searchValue) => {
    onSearch(searchValue);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilterListClick = (event) => {
    setAnchorEli(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleListClose = () => {
    setAnchorEli(null);
  };

  const handleCategorySelect = (category) => {
    if (category !== '') {
      setIsFilterActive(true);
    } else {
      setIsFilterActive(false);
    }
    onCategorySelect(category);
    setAnchorEl(null);
  };

  const handleManufacturerSelect = (manufacturer) => {
    if (manufacturer !== '') {
      setIsFilterListActive(true);
    } else {
      setIsFilterListActive(false);
    }
    onManufacturerSelect(manufacturer);
    setAnchorEli(null);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          WWII Museum
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          This is a WWII Small Arms Museum, displaying every weapon each country, that participated,
          used during this huge war that broke out in the 1940's.Enjoy!
        </Typography>
        
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        {isFilterListActive ? (
            <FilterListOffIcon onClick={handleFilterListClick} />
            ) : (
            <FilterListIcon onClick={handleFilterListClick} />
            )}
          <SearchField onSearch={handleSearch} weaponNames={weaponNames}  />
          {isFilterActive ? (
            <FilterAltOffIcon onClick={handleFilterClick} />
            ) : (
            <FilterAltIcon onClick={handleFilterClick} />
            )}
            
        </Stack>
        <FilterMenu anchorEl={anchorEl} onClose={handleClose} weaponCategory={weaponCategory} onCategorySelect={handleCategorySelect} />
        <FilterListMenu anchorEli={anchorEli} onClose={handleListClose} weaponManufacturer={weaponManufacturer} onManufacturerSelect={handleManufacturerSelect} />
      </Container>
    </Box>
  );
}

HeroUnit.propTypes = {
  onSearch: PropTypes.func.isRequired,
  weaponNames: PropTypes.array.isRequired,
  weaponCategory: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
  weaponManufacturer: PropTypes.array.isRequired,
  onManufacturerSelect: PropTypes.func.isRequired,
};

export default HeroUnit;
