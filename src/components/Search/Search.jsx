import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search article"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
          width: '300px',
          borderRadius: '8px',
          border: '1px solid var(--accent)',
          backgroundColor: 'var(--white)',
          paddingLeft: '12px',
          color: 'var(--text)'
        },
      }}
    />
  );
};

export default Search;
