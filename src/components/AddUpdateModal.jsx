import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import close from '../assets/close.svg'
import { ErrorMessage, Field, Formik } from 'formik';
import { SendIcon } from '../assets/icons';
import * as Yup from 'yup';


const AddUpdateModal = ({ open, handleClose, handleSave, role, editRow }) => {



  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    handleSave(values)

  }
  const handleNumberChange = (e, handleChange) => {
    const value = e.target.value;
    const isNumber = !isNaN(value);
    if (isNumber && value.length < 11) {
      handleChange(e)
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name required!'
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name required!'
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!"

    } else if (values.phone.length < 10) {
      console.log("hiii", values);

      errors.phone = "Phone Number should be 10 digits!"

    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.addressLine1) {
      errors.addressLine1 = "Address is required!"
    }

    if (!values.addressLine2) {
      errors.addressLine2 = "Address is required!"
    }



    return errors;
  };


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack className='modal-body' direction='column'>
        <Stack className='modal-heading' direction='row'>
          {editRow ? <Typography variant='addUserHeading'>{role === 'admin' ? "Edit Admin" : "Edit Delivery Partner"}</Typography>
            : <Typography variant='addUserHeading'>{role === 'admin' ? "Add Admin" : "Add Delivery Partner"}</Typography>
          }          <img src={close} alt='close image' width='24px' onClick={handleClose} height='24px' />
        </Stack>
        <Stack >
          <Formik initialValues={editRow ?? {}} validate={validate} onSubmit={handleSubmit}>
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
                <Stack className='modal-form'>
                  <Stack direction='row' className='form-inner-stack'>


                    <Stack direction='column' className='form-input' >
                      <Typography variant='normalText'>First Name</Typography>
                      <TextField
                        type="text"
                        name="firstName"
                        placeholder='Type here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}

                      />
                      <Typography variant='validationError'>{errors.firstName && touched.firstName && errors.firstName}</Typography>
                    </Stack>


                    <Stack direction='column' className='form-input' >
                      <Typography variant='normalText'>Last Name</Typography>
                      <TextField
                        type="text"
                        name="lastName"
                        placeholder='Type here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                      />
                      <Typography variant='validationError'>{errors.lastName && touched.lastName && errors.lastName}</Typography>
                    </Stack>

                    <Stack direction='column' className='form-input'>
                      <Typography variant='normalText'>Phone Number</Typography>
                      <TextField
                        type="text"
                        name="phone"
                        placeholder='XXXXX XXXXX'
                        onBlur={handleBlur}
                        onChange={(e) => handleNumberChange(e, handleChange)}
                        value={values.phone}
                        required="true"
                        c
                      />
                      {console.log(values?.phone?.length < 11 && handleChange, values)}
                      <Typography variant='validationError'>{errors.phone && touched.phone && errors.phone}</Typography>

                    </Stack>

                    <Stack direction='column' className='form-input'>
                      <Typography variant='normalText'>Email address</Typography>
                      <TextField
                        type="email"
                        name="email"
                        placeholder='Type here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}


                      />
                      <Typography variant='validationError'>{errors.email && touched.email && errors.email}</Typography>

                    </Stack>


                    <Stack direction='column' className='form-input'>
                      <Typography variant='normalText'>Address Line 1</Typography>
                      <TextField
                        type="text"
                        name="addressLine1"
                        placeholder='Type here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.addressLine1}

                      />
                      <Typography variant='validationError'>{errors.addressLine1 && touched.addressLine1 && errors.addressLine1}</Typography>

                    </Stack>


                    <Stack direction='column' className='form-input'>
                      <Typography variant='normalText'>Address Line 2</Typography>
                      <TextField
                        type="text"
                        name="addressLine2"
                        placeholder='Type here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.addressLine2}
                      />
                      <Typography variant='validationError'>{errors.addressLine2 && touched.addressLine2 && errors.addressLine2}</Typography>

                    </Stack>
                  </Stack>
                  <Stack className='modal-actionbox'>

                    <Button variant='contained' disabled={Object.keys(errors).length > 0|| Object.keys(values).length===0} className='send-btn' type='submit' startIcon={<SendIcon />}>{editRow ? "Edit" : "Send Invite"}</Button>
                  </Stack>

                </Stack>

              </form>
            )}
          </Formik>
        </Stack>


      </Stack>
    </Modal>
  );
};

export default AddUpdateModal;
