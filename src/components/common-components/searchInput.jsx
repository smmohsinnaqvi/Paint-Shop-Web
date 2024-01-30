import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import userService from '../../services/userService';

const SearchInput = ({ setSearch }) => {
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearch(query);
  };
  

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', border: "1px solid #EBEBE4", width:"262px", height:"38px", padding:"0px 15px", borderRadius:'5px'}}>
        
        <InputBase
            onChange={(e)=>handleInputChange(e)}
          placeholder="Search here"
          inputProps={{ 'aria-label': 'search' }}
          style={{ flexGrow: 1 }}
        />
        <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
      </div>
    </div>
  );
};

export default SearchInput;
