import React from 'react';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterBtn = ({ handleSelectClick }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: 'var(--blue)', boxShadow: 'none', padding: '0 30px', color: 'var(--white)',  textTransform: 'capitalize'}}
      onClick={handleSelectClick}
    >
      <FilterAltIcon sx={{ fontSize: 24, color: 'var(--white)', marginRight: 1 }} />
      Filters
    </Button>
  );
};

export default FilterBtn;
