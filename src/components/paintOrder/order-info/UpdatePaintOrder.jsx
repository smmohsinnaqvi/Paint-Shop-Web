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
import close from "../../../assets/close.svg";
import { Formik } from "formik";
import Open from "../Open";
import Done from "../Done";
import Progress from "../Progress";
import { toast } from "react-toastify";
import { orderService } from "../../../services/orderService";
import { useNavigate } from "react-router-dom";
import openIcon from "../assets/open.svg";
import inprogressIcon from "../assets/inprogress.svg";
import doneIcon from "../assets/done.svg";
import "../paintorder.styles.css";
import opensvg from "../assets/open.svg";
import inprogress from "../assets/inprogress.svg";
import done from "../assets/done.svg";

function UpdatePaintOrder({ open, handleClose, order }) {
	const [orderitems, setOrderItems] = useState(order.items);
	const [quantity, setQuantity] = useState();
	const [itemName, setItemName] = useState("");
	const [paints, setPaints] = useState([]);

	const [selectedValue, setSelectedValue] = useState(order.orderStatus);

	const handleChange = (event) => {
		console.log(event.target.value);
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
	const navigate = useNavigate();
	const handleUpdate = async (values) => {
		const { firstName, lastName, email, phone, addressLine1, addressLine2 } =
			values;

		const payload = {
			firstName,
			lastName,
			email,
			phone,
			addressLine1,
			addressLine2,
			orderStatus: selectedValue,
			items: orderitems,
		};
		console.log("Payload", payload, order);
		orderService.editOrder(order._id, payload).then((res) => {
			if (res) {
				console.log("order res :", res);
				toast.success("Order Updated Successfully!", {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		});
		setOrderItems([]);

		navigate("/");
		handleClose();
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
					<Typography variant='addUserHeading'>Edit Paint Order</Typography>
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
						<Formik
							validate={validate}
							initialValues={{
								firstName: order.customer.firstName,
								lastName: order.customer.lastName,
								phone: order.customer.phone,
								email: order.customer.email,
								addressLine1: order.customer.addressLine1,
								addressLine2: order.customer.addressLine2,
							}}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
							}) => (
								<form onSubmit={() => handleUpdate(values)}>
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
													onChange={handleChange}
													value={values.phone}
												/>
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
															<MenuItem value=''>
																<em>None</em>
															</MenuItem>
															;
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
																type='text'
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
																	display: "flex",
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
												<Stack
													direction='row'
													columnGap='8px'
													alignItems='center'
													justifyContent='center'
												>
													<Typography>Status :</Typography>
													<Select
														name='orderStatus'
														value={selectedValue}
														onChange={(e) => setSelectedValue(e.target.value)}
														sx={{
															boxShadow: "none",
															" .MuiSelect-select": {
																display: "flex",
																padding: "5px 15px",
															},
															".MuiOutlinedInput-notchedOutline": { border: 0 },
															borderColor: "transparent !important",
														}}
													>
														<MenuItem
															value='open'
															selected={selectedValue === "open"}
														>
															<Stack className='open' direction='row'>
																<img src={opensvg} width='20px' height='20px' />{" "}
																<Typography variant='orderStatus'>
																	Open
																</Typography>
															</Stack>
														</MenuItem>
														<MenuItem value='in progress'>
															<Stack className='inprogress' direction='row'>
																<img
																	src={inprogress}
																	width='20px'
																	height='20px'
																/>{" "}
																<Typography variant='orderStatus'>
																	In Progress
																</Typography>
															</Stack>
														</MenuItem>
														<MenuItem value='done'>
															<Stack className='done' direction='row'>
																<img src={done} width='20px' height='20px' />{" "}
																<Typography variant='orderStatus'>
																	Done
																</Typography>
															</Stack>
														</MenuItem>
													</Select>
												</Stack>
												<Stack className='modal-actionbox'>
													<Button
														disabled={
															Object.keys(errors).length > 0 ||
															Object.keys(values).length === 0
														}
														variant='contained'
														className='send-btn'
														type='submit'
													>
														Update Order
													</Button>
												</Stack>
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

export default UpdatePaintOrder;
