import React from 'react';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterBtn = ({ handleSelectClick }) => {
  return (
    <Button
        variant="contained"
        style={{ backgroundColor: 'var(--accent)', boxShadow: 'none',height: '56px', padding: '0 30px', color: 'var(--text)',  textTransform: 'capitalize'}}
        onClick={handleSelectClick}
    >
      <FilterAltIcon sx={{ fontSize: 24, color: '#888', marginRight: 1 }} />
      Filters
    </Button>
  );
};

export default FilterBtn;
