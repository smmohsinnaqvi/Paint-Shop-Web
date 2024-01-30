import { Button, IconButton, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Formik } from 'formik';
import { themeTypography } from '../constants/theme/typography'
import { themeButtons } from '../constants/theme/Button'
import man from '../assets/man.svg'
import Group2 from '../assets/Group2.svg'
import Group14 from '../assets/Group14.svg'
import logo from '../assets/1.svg'
import authService from '../services/authService';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function ResetPasswordForm({ handResetPassword }) {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const initialValues = { newpassword: '', password: '' }
  const validate = values => {
    const errors = {};
    if (!values.newpassword) {
      errors.newpassword = 'Password is required!'
    }
    if (values?.newpassword?.length < 6) {
      errors.newpassword = 'Password should be 6 or more characters!'
    }
    if (values?.password?.length > 5 && values?.newpassword !== values?.password) {
      errors.newpassword = 'Password should be 6 or more characters!'
    }
    if(!values.newpassword){
      errors.newpassword="New Password is required!"
    }
    if (!values.password) {
      errors.password = 'Confirm Password is required!';
    }

    return errors;
  }


  return (
    <Stack className='sigin-form' width="465px" alignItems="flex-start" justifyContent="center">
      <Typography variant='heading'>Set Password</Typography>
      <Typography variant='subheading'>Set your new password.</Typography>


      <Formik initialValues={initialValues} validate={validate} onSubmit={handResetPassword}>

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
                <Typography variant='normalText'>New Password</Typography>
                {/* <TextField
        fullWidth
         type="password"
         name="newpassword"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.newpassword}
       /> */}


                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  name="newpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newpassword}
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
                <Typography variant='validationError'>{errors.newpassword && touched.newpassword && errors.newpassword}</Typography>
              </Stack>
              <Stack alignItems="flex-start" rowGap="13px" width="100%">
                <Typography variant='normalText'>Confirm Password</Typography>
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

              {console.log(errors)}
              <Button type="submit" sx={{ height: '50px' }} disabled={isSubmitting || Object.keys(errors).length > 0 || values?.password?.length < 5} variant='contained' color='primary'>
                Set Password
              </Button>
            </Stack>
          </form>
        )}
      </Formik>








    </Stack>
  )
}

export default ResetPasswordForm
