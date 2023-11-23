import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useData } from '../../hooks/filterContext';

const Search = () => {
  const { search, changeInput } = useData();

  return (
    <TextField
      fullWidth
      name='Search'
      variant="outlined"
      placeholder="Search article"
      type="search"
      value={search}
      onChange={changeInput}
       size="small"

      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

export default Search;
