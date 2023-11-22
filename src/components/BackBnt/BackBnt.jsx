import React from 'react';
import IconButton from '@mui/material/IconButton';import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackBtn = () => {
  return (      
      <IconButton aria-label="delete" size="large" color="primary">
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
  );
};

export default BackBtn;
