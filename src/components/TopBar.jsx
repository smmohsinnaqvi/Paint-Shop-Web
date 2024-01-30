import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import notification from '../assets/notification.svg'
import { Avatar, Typography } from '@mui/material'
import profile from '../assets/profile.png'
import userService from '../services/userService'
import { toast } from 'react-toastify'
function TopBar() {
  const userId=localStorage.getItem("userId")
const [user,setUser]=useState({})
const handleNotification=()=>{
  toast.info("Coming Soon",{
    position:toast.POSITION.TOP_CENTER
  })

}


  useEffect(()=>{
    
if(userId){
    userService.getUser(userId).then(res=>{
      setUser(res?.user[0])
        console.log(res)})
    }
  },[userId])

  const generateRandomColor = () => {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
return newColor  };

  return (
    <Stack className="top-bar" direction='row' columnGap="10px"  >
    <img src={notification}  onClick={handleNotification} alt='notification'className='notif-icon' width="24px" height="24px" />
    <Stack flexDirection='column' alignItems="flex-end" rowGap='2px'>
        <Typography variant='profilename'>{`${user?.firstName}  ${user?.lastName}`}
        </Typography>
        <Typography variant='profileEmail'>{user?.email}</Typography>
        
    </Stack>
    {/* <img src={profile} width='40px' height='40px' alt='profile'/>
     */}
     <Avatar width='40px' height='40px' sx={{bgcolor:generateRandomColor()}}><span>{user?.firstName?.slice(0,1)+user?.lastName?.slice(0,1)}</span> </Avatar> 

    </Stack>
  )
}

export default TopBar