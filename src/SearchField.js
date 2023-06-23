import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const CustomTextField = styled(TextField)`
  width: 300px; // Adjust the width as needed
  // Add more custom styling here if desired
`;

function SearchField({ onSearch, weaponNames }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [weaponNames]);

  const handleInputChange = (event, newValue) => {
    setValue(newValue);
    onSearch(newValue);
  };

  const handleSelect = (event, newValue) => {
    if (newValue) {
      setValue(newValue);
      onSearch(newValue);
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        options={weaponNames}
        onChange={handleSelect}
        inputValue={value}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            fullWidth
            autoComplete="off"
            label="Search for a gun"
          />
        )}
      />
    </div>
  );
}

export default SearchField;
