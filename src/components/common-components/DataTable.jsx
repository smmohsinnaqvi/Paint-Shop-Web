import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Avatar, IconButton } from '@mui/material';
import search from '../../assets/search.svg'
import Paper from '@mui/material/Paper';
import tick from '../../assets/tick.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import editIcon from '../../assets/editIcon.svg'
import pending from '../../assets/pending.svg'

const DataTable = ({ tableColumns, tableData ,action}) => {

  const generateRandomColor = () => {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
return newColor  };

const userId=localStorage.getItem("userId")

  const renderCellContent = (row, column) => {
    if (column.key === "name") {
      return (
        <Stack direction='row' alignItems='center' columnGap='10px'>
         <Avatar sx={{bgcolor:generateRandomColor()}}><span>{row?.firstName.slice(0,1)+row?.lastName.slice(0,1)}</span> </Avatar>  { `${row.firstName} ${row.lastName}`}
        </Stack>
     )
    }
    if (column.key === "action") {
      return (
        <Stack direction='row' alignItems='center' columnGap='10px'>
          <IconButton><img src={editIcon} onClick={()=>action?.handleEdit(row)} className='notif-icon' width='24px' height='24px' /></IconButton>
         <IconButton className={row._id===userId&&"disabled"} disabled={row._id===userId}><img src={deleteIcon} onClick={()=>action?.handleDelete(row)} className='delete-icon' width='24px' height='24px' /></IconButton> 
        </Stack>
     )
    }
    if (column.key === "confirmedUser") {
      return (
        <Stack direction='row' alignItems='center' columnGap='10px'>
            <img src={row[column.key]?tick:pending} width='24px' height='24px' alt={"status"} />
            {row[column.key]?"Accepted":"Pending"}
      
        </Stack>
   )
    }
    return row[column.key];

  };

  return (
    <TableContainer>
      <Table style={{ paddingLeft: '18px' }}>
        <TableHead className='tablehead'>
          <TableRow>
            {tableColumns.map((column) => (
              <TableCell key={column.key} align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              {tableColumns.map((column) => (
                <TableCell key={column.key}>{renderCellContent(row, column)}</TableCell>
              ))}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
