import { Button, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { themeTypography } from '../constants/theme/typography'
import { themeButtons } from '../constants/theme/Button'
import man from '../assets/man.svg'
import Group2 from '../assets/Group2.svg'
import Group14 from '../assets/Group14.svg'
import logo from '../assets/1.svg'
import ResetPasswordForm from './ResetPasswordForm';
import SingInForm from './SingInForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authService from '../services/authService';



function SignIn() {
  const navigate = useNavigate();
  const [isSetPassword, setIsSetPassword] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/user-management')
    }

  }, [])


  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      const { token, role, confirmedUser, userId } = await authService.login(values.email, values.password, values.role);
      console.log('Login success:', { token, role, confirmedUser });




      if (confirmedUser) {
        localStorage.setItem("userId", userId)
        localStorage.setItem("token", token)
        // toast.success("Login successfull!",{
        //   position:toast.POSITION.TOP_CENTER
        // })

        if (role === 'admin') {
          console.log('Entered if condition');
          navigate('/');
        } else {
          console.log('No role');
        }

        resetForm();
      }
      else {
        setIsSetPassword(false)
        // navigate('/set-password');

      }
    } catch (error) {
      if (error?.response?.status === 302) {
        setUser(error?.response?.data?.user)
        setIsSetPassword(true)
        console.log(error)
      }
      else {

        console.error('Login failed:',);
        toast.error("Invalid credential", {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handResetPassword = (values) => {

    authService.updatePassword(user["_id"], values.newpassword).then(res => {
      setUser({})
      setIsSetPassword(false)
      toast.success("Password Updated Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT
      })

    })
  }

  return (
    <Stack className='main-container' direction="row">
      <Stack className='left-container'>
        <img src={Group2} alt='group image' id='group2' width="98px" height='98px' />
        <Stack className='logo-main-container'>
          <Stack id='logo-div'> <img src={logo} alt='logo image' id='logo' height="60px" />
          </Stack>

          <img src={man} alt='man image' className='man-img' />
          <Stack alignItems="flex-start" rowGap='10px' width="100%">
            <Typography variant='colorText' color='primary' >Painters Management System</Typography>
            <Typography variant='manageOrders'>Manage your paint orders and delivery partners in only one tool.</Typography>
          </Stack>   </Stack>

        <img src={Group14} alt='group14' width="64px" height="64px" id='group14' />

      </Stack>
      <Stack className='right-container'>
        {isSetPassword ? <ResetPasswordForm handResetPassword={handResetPassword} /> : <SingInForm handleLogin={handleLogin} />}

      </Stack>
    </Stack>
  )
}

export default SignIn
