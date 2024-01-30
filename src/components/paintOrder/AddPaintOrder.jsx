import {
	Box,
	Button,
	Chip,
	MenuItem,
	Modal,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import close from "../../assets/close.svg";
import { Formik } from "formik";
import Open from "./Open";
import Done from "./Done";
import Progress from "./Progress";
import styled from "@emotion/styled";
import userService from "../../services/userService";

import { orderService } from "../../services/orderService";
import { toast } from "react-toastify";
import open from "./assets/open.svg";
import { useNavigate } from "react-router-dom";
import openIcon from "../paintOrder/assets/open.svg";

function AddPaintOrder({ open, handleClose, fetchAllOrders }) {
	const [orderitems, setOrderItems] = useState([]);
	const [quantity, setQuantity] = useState();
	const [itemName, setItemName] = useState("");
	const [paints, setPaints] = useState([]);

	const [selectedValue, setSelectedValue] = useState("option1");
	const navigate = useNavigate();

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};
	const handleAdd = () => {
		const newItem = { itemName, quantity };
		setOrderItems([...orderitems, newItem]);
		setQuantity("");
		setItemName("");
	};
	const handleItemDelete = (itemName) => {
		const newOrderItems = orderitems.filter((item) => {
			return item.itemName !== itemName;
		});
		setOrderItems(newOrderItems);
	};
	const handleSave = async (values) => {
		const { firstName, lastName, email, phone, addressLine1, addressLine2 } =
			values;

		const payload = {
			firstName,
			lastName,
			email,
			phone,
			addressLine1,
			addressLine2,
			orderStatus: "open",
			items: orderitems,
		};
		console.log("Payload", payload);
		orderService.createOrder(payload).then((res) => {
			console.log("order res :", res);
			toast.success("Order Created Successfully!", {
				position: toast.POSITION.TOP_RIGHT,
			});
		});
		setOrderItems([]);
		handleClose();
		fetchAllOrders();
		navigate("/");
	};

	useEffect(() => {
		orderService.getPaint().then((res) => {
			if (res) {
				setPaints(res);
			}
		});
	}, []);
	const handleNumberChange = (e, handleChange) => {
		const value = e.target.value;
		const isNumber = !isNaN(value);
		if (isNumber && value.length < 11) {
			handleChange(e);
		}
	};

	const validate = (values) => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = "First Name required!";
		}
		if (!values.lastName) {
			errors.lastName = "Last Name required!";
		}
		if (!values.phone) {
			errors.phone = "Phone Number is required!";
		} else if (values.phone.length < 10) {
			console.log("hiii", values);

			errors.phone = "Phone Number should be 10 digits!";
		}

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}

		if (!values.addressLine1) {
			errors.addressLine1 = "Address is required!";
		}

		if (!values.addressLine2) {
			errors.addressLine2 = "Address is required!";
		}

		return errors;
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Stack className='paint-modal'>
				<Stack className='paint-modal-heading' direction='row'>
					<Typography variant='addUserHeading'>Add New Paint Order</Typography>
					<img
						src={close}
						alt='close image'
						width='24px'
						onClick={handleClose}
						height='24px'
					/>
				</Stack>
				<Stack className='paint-modal-body'>
					<Stack className='paint-form-heading'>
						<Typography variant='paintHeading'>Customer Details</Typography>
					</Stack>
					<Stack>
						<Formik validate={validate} initialValues={{}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
							}) => (
								<form onSubmit={() => handleSave(values)}>
									<Stack className='modal-form'>
										<Stack direction='row' className='paint-inner-stack'>
											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>First Name</Typography>
												<TextField
													type='text'
													name='firstName'
													placeholder='Type here'
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.firstName}
												/>
												<Typography variant='validationError'>
													{errors.firstName &&
														touched.firstName &&
														errors.firstName}
												</Typography>
											</Stack>

											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>Last Name</Typography>
												<TextField
													type='text'
													name='lastName'
													placeholder='Type here'
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.lastName}
												/>
												<Typography variant='validationError'>
													{errors.lastName &&
														touched.lastName &&
														errors.lastName}
												</Typography>
											</Stack>

											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>
													Phone Number
												</Typography>
												<TextField
													type='text'
													name='phone'
													placeholder='XXXXX XXXXX'
													onBlur={handleBlur}
													onChange={(e) => handleNumberChange(e, handleChange)}
													value={values.phone}
												/>
												<Typography variant='validationError'>
													{errors.phone && touched.phone && errors.phone}
												</Typography>
											</Stack>

											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>
													Email Address
												</Typography>
												<TextField
													type='text'
													name='email'
													placeholder='Type here'
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.email}
												/>
												<Typography variant='validationError'>
													{errors.email && touched.email && errors.email}
												</Typography>
											</Stack>

											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>
													Address Line 1
												</Typography>
												<TextField
													type='text'
													name='addressLine1'
													placeholder='Type here'
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.addressLine1}
												/>
												<Typography variant='validationError'>
													{errors.addressLine1 &&
														touched.addressLine1 &&
														errors.addressLine1}
												</Typography>
											</Stack>

											<Stack direction='column' className='form-input'>
												<Typography variant='normalText'>
													Address Line 2
												</Typography>
												<TextField
													type='text'
													name='addressLine2'
													placeholder='Type here'
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.addressLine2}
												/>
												<Typography variant='validationError'>
													{errors.addressLine2 &&
														touched.addressLine2 &&
														errors.addressLine2}
												</Typography>
											</Stack>
										</Stack>
										<Stack className='order-form'>
											<Stack className='order-form-heading' rowGap='25px'>
												<Typography variant='paintHeading'>
													Order Details
												</Typography>
												<Stack direction='row' className='paint-inner-stack'>
													<Stack direction='column' className='form-input'>
														<Typography variant='normalText'>
															Item Type
														</Typography>
														<Select
															value={itemName}
															onChange={(e) => {
																setItemName(e.target.value);
															}}
															displayEmpty
															inputProps={{ "aria-label": "Without label" }}
														>
															{console.log(orderitems)}
															<MenuItem value=''>
																<em>None</em>
															</MenuItem>
															{paints.map((paint, i) => {
																return (
																	<MenuItem key={i} value={paint.paintName}>
																		{paint.paintName}
																	</MenuItem>
																);
															})}
														</Select>
													</Stack>
													<Stack
														direction='row'
														alignItems='center'
														columnGap='20px'
													>
														<Stack
															direction='column'
															className='form-input-quantity'
														>
															<Typography variant='normalText'>
																Quantity
															</Typography>
															<TextField
																type='number'
																name='quantity'
																placeholder='Type here'
																onChange={(e) => {
																	setQuantity(parseInt(e.target.value));
																}}
																value={quantity}
															/>
														</Stack>

														<Button
															variant='contained'
															onClick={handleAdd}
															className='add-btn'
														>
															Add
														</Button>
													</Stack>
													<Stack
														className='order-detail'
														direction='row'
														alignItems='flex-start'
														justifyContent='flex-start'
														width='100%'
														columnGap='15px'
														flexWrap='wrap'
													>
														{orderitems?.map((orderitem) => (
															<Chip
																sx={{
																	backgroundColor: "#F8F3FB",
																	justifyContent: "flex-start",
																	backgroundColor: "#F8F3FB",
																	color: "#7F56D9",
																	fontSize: "16px",
																	fontWeight: "400",
																	borderRadius: "4px",
																	"& .css-i4bv87-MuiSvgIcon-root": {
																		color: "#7F56D9",
																		height: "16px",
																		width: "16px",
																	},
																	padding: "9px 10px",
																}}
																label={
																	orderitem?.itemName +
																	" : " +
																	orderitem.quantity +
																	" Qty"
																}
																onDelete={() => {
																	handleItemDelete(orderitem.itemName);
																}}
															/>
														))}
													</Stack>
												</Stack>
											</Stack>
											<Stack
												boxSizing='border-box'
												direction='row'
												columnGap='8px'
												alignItems='center'
												justifyContent='flex-start'
											>
												<Typography>Status :</Typography>
												<Stack className='status'>
													<img src={openIcon} width='24px' height='24px' />
													<Typography>Open</Typography>
												</Stack>
											</Stack>
											<Stack className='paint-actionbox'>
												<Button
													disabled={
														Object.keys(errors).length > 0 ||
														Object.keys(values).length === 0
													}
													variant='contained'
													className='send-btn'
													type='submit'
												>
													Add Order
												</Button>
											</Stack>
										</Stack>
									</Stack>
								</form>
							)}
						</Formik>
					</Stack>
				</Stack>
			</Stack>
		</Modal>
	);
}

export default AddPaintOrder;
