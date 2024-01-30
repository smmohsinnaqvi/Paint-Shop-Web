import React, { useEffect, useState } from 'react'
import SideNavBar from './SideNavBar'
import { Avatar, Button, InputBase, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useScrollTrigger } from '@mui/material'
import SearchInput from './common-components/searchInput';
import DataTable from './common-components/DataTable';
import { AdminTableColumns, PartnerTableColumns } from './common-components/constant';
import { useDispatch } from 'react-redux';
import userService from '../services/userService';
import AddUpdateModal from './AddUpdateModal';
import { toast } from 'react-toastify';
import Dropdown from './common-components/DropDown';
import { AddIcon } from '../assets/AddIcon';




function UserManagement() {

  const [editRow, setEditRow] = useState(null)
  const [isModelOpen, setIsModelOpen] = useState(false);
const [filter,setFilter]=useState(null)
  const handleOpenModel = () => {
    setIsModelOpen(true);
  };

  const handleCloseModel = () => {
    setEditRow(null)
    setIsModelOpen(false);
  };


  const [tab, setTab] = useState("admin")
  const [searchKey, setSearchKey] = useState('');
  const[request, setRequestKey]=useState('')
  const [tableData, setTableData] = useState([])

  const dispatch = useDispatch();
   const[search, setSearch]=useState('')

 
  const fetchAllUsers = () => {
    const params = { role: tab};

    userService.getAllUsers(params).then(res => {
      console.log("res", res)
      const { users = [] } = res
      if (users.length) {
        const filteredData = users?.filter((d) => d.role === tab && !d.isDeleted)
        setTableData(filteredData)
      }
      
      else {
        setTableData([])
      }
    });
  }
  useEffect(() => {
    if (tab) {
      fetchAllUsers()

    }
  }, [tab])

  const handleSave = (values) => {
    console.log("values", values)
    const { firstName, lastName, phone, email, addressLine1, addressLine2 } = values;
    const payload = { firstName, lastName, phone, email, addressLine1, addressLine2, role: tab }
    if(editRow){
      userService.updateUser(editRow["_id"],payload).then(res => {
        console.log("res", res)
        if (tab == 'admin') {
          toast.success("Admin Edited Successfully!", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        else {
          toast.success("Delivery-Partner Edited Successfully!", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        fetchAllUsers()
        handleCloseModel();


      })
    }
else {
      userService.createUser(payload).then(res => {
        console.log("res", res)
        if (tab == 'admin') {
          toast.success("Admin Created Successfully!", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        else {
          toast.success("Delivery Partner Created Successfully!", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        fetchAllUsers()
        handleCloseModel();


      })
    }

  }

  const handleEdit = (row) => {
    setEditRow(row);
    setIsModelOpen(true)
    console.log("row", row)
  }
  const handleDelete = (row) => {
    console.log("row", row)
   userService.deleteUser(row["_id"]).then(res=>{
    console.log(res)
    if (tab == 'admin') {
      toast.success("Admin Deleted Successfully!", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    else {
      toast.success("Delivery-Partner Deleted Successfully!", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    fetchAllUsers();
   })
  }


  const action = {
    handleEdit,
    handleDelete
  }

  useEffect(()=>{
    if(search||filter){
    const query = { role: tab,};

    if(search){query.search=search}
    if(filter){query.filter=filter}

    userService.getAllUsers(query).then((res) => {
      console.log("res", res);
      const { users = [] } = res;
      if (users.length) {
        const filteredData = users?.filter((d) => !d.isDeleted);
        setTableData(filteredData);
      } else {
        setTableData([]);
      }
    });}
    else{
      fetchAllUsers()
    }

   },[search,filter])

  return (
    <Stack className='um-maincontainer' mt='19px'>
      <Stack className='um-topconatiner' direction='row'>
        <Typography variant='paintOrderHeading'>User Management</Typography>
        <Stack direction='row' columnGap='15px'>

          <SearchInput setSearch={setSearch} />
          <Dropdown setFilter={setFilter} filter={filter}/>
          <Button variant='contained' onClick={handleOpenModel} color='primary' startIcon={<AddIcon/>} className='delivery-btn'>{tab === 'admin' ? "Admin" : "Delivery partner"}</Button>


        </Stack>
      </Stack>
      <Stack className='um-middlecontainer' direction='row' columnGap="25px" mt='10px'>
        <Typography variant='tableheading' onClick={() => setTab('admin')} className={tab === 'admin' ? 'active-tab' : ''}>Admin</Typography>
        <Typography variant='tableheading' onClick={() => setTab('partner')} className={tab === 'partner' ? 'active-tab' : ''}>Delivery Partner</Typography>
      </Stack>
      <Stack className='um-tablecontainer' mt='20px' style={{ overflow: 'hidden' }}>
        <DataTable tableColumns={tab === "admin" ? AdminTableColumns : PartnerTableColumns} tableData={tableData} action={action} />
      </Stack>
      {isModelOpen && <AddUpdateModal open={isModelOpen} handleClose={handleCloseModel} role={tab} handleSave={handleSave} editRow={editRow} />
      }    </Stack>
  )
}

export default UserManagement
