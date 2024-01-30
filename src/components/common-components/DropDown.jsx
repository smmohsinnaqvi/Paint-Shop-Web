
import React, { useState } from 'react';
import { Select, MenuItem, Typography, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accepted from './Accepted';
import Pending from './Pending';
import tick from '../../assets/tick.svg'
import pending from '../../assets/pending.svg'


const Dropdown = ({setFilter,filter}) => {

  const handleChange = (event) => {
const value=event.target.value
   if(value==="all") setFilter(null);
   else setFilter(value)
  };

  return (
    <div>
      <div style={{    display: 'flex', flexDirection:"row", alignItems: 'center', border: '1px solid #EBEBE4', width:'170px', height: '38px', borderRadius: '5px'}}>

        <Select
        
          value={filter??"all"}
          onChange={handleChange}
          IconComponent={ArrowDropDownIcon}
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 'none' },
            "  .MuiSelect-select":{ display: 'flex', flexDirection:"row", columnGap:"5px"}
          }}
          style={{
            flexGrow: 1,
            display:'flex',
              flexDirection:"row",
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
            <MenuItem value="all" className='menuItem'>
            <Typography>All Users</Typography>
            
          </MenuItem>
          <MenuItem value="accepted" className='menuItem'>
            <img src={tick} width='24px' height='24px'/>
            <Typography>Accepted</Typography>
            
          </MenuItem>
          
          
          <MenuItem value="pending" className='menuItem'>
            <img src={pending} width='24px' height='24px'/>
            <Typography>Pending</Typography>
            
          </MenuItem>            
          
        </Select>

      </div>
    </div>
  );
};

export default Dropdown;

