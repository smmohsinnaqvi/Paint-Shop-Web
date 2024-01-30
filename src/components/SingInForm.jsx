import { Button, IconButton, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Formik } from 'formik';
import { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './UserManagement';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function SignInForm({ handleLogin }) {
  const navigate = useNavigate();
  const initialValues = { email: '', password: '' };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
    return errors;
  };



  return (
    <Stack className='sigin-form' width="465px" alignItems="flex-start" justifyContent="center">
      <Typography variant='heading'>Sign In</Typography>
      <Typography variant='subheading'>Please enter your credentials here.</Typography>

      <Formik initialValues={initialValues} validate={validate} onSubmit={handleLogin}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack rowGap="20px" margin="50px 0px 20px 0px" width="465px">
              <Stack alignItems="flex-start" rowGap="13px" width="100%">
                <Typography variant='normalText'>Email address</Typography>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Typography variant='validationError'>{errors.email && touched.email && errors.email}</Typography>
              </Stack>
              <Stack alignItems="flex-start" rowGap="13px" width="100%">
                <Typography variant='normalText'>Password</Typography>
                {/* <TextField
                  fullWidth
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                /> */}
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handleTogglePasswordVisibility}
                          size="large"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography variant='validationError'>{errors.password && touched.password && errors.password}</Typography>
              </Stack>

              <Button
                type="submit"
                sx={{ height: '50px' }}
                disabled={isSubmitting || Object.keys(errors).length > 0}
                variant='contained'
                color='primary'
              >
                Login
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
}


export default SignInForm
