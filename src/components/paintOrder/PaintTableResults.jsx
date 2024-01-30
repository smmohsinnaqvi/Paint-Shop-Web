import { Avatar, Stack, TableCell, Typography } from "@mui/material";
import React from "react";
import done from "./assets/done.svg";
import accepted from "./assets/accepted.svg";
import inprogress from "./assets/inprogress.svg";
import open from "./assets/open.svg";
import declined from "./assets/declined.svg";
import notassigned from "./assets/notassigned.svg";
import pickedUp from "./assets/pickedUp.svg";
import delivered from "./assets/delivered.svg";

import "./paintorder.styles.css";

const PaintTableResults = ({ order }) => {
	const totalPrice = order.totalPrice.toLocaleString("en-IN", {
		style: "currency",
		currency: "INR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});

	const generateRandomColor = () => {
		const newColor =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, "0");
		return newColor;
	};
	// console.log("In Paint Table Result", order.customer.firstName);
	return (
		<>
			<TableCell component='th'>
				<Stack direction='row' columnGap='10px' alignItems='center'>
					<Avatar
						sx={{
							borderRadius: "100000px",
							background: generateRandomColor(),
							width: "34px",
							height: "34px",
							fontSize: "16px",
							fontWeight: "400",
						}}
					>
						<span>
							{order.customer.firstName.slice(0, 1) +
								order.customer.lastName.slice(0, 1)}
						</span>
					</Avatar>
					<Typography variant='paintData'>
						{order.customer.firstName + " " + order.customer.lastName}
					</Typography>
				</Stack>
			</TableCell>
			<TableCell align='left'>
				<Typography variant='paintData'>{order?.items.length}</Typography>
			</TableCell>
			<TableCell align='left'>
				<Typography variant='paintData'>{order?.totalQuantity}</Typography>
			</TableCell>
			<TableCell align='left'>
				{order?.orderStatus === "done" && (
					<Typography variant='orderStatus' className='done'>
						<img src={done} width='14px' height='14px' /> Done
					</Typography>
				)}
				{order?.orderStatus === "in progress" && (
					<Typography variant='orderStatus' className='inprogress'>
						<img src={inprogress} width='14px' height='14px' /> In Progress
					</Typography>
				)}
				{order?.orderStatus === "open" && (
					<Typography variant='orderStatus' className='open'>
						<img src={open} width='14px' height='14px' /> Open
					</Typography>
				)}
			</TableCell>
			<TableCell align='left'>
				{order?.deliveryStatus === "not assigned" && (
					<Stack direction='row' alignItems='center' columnGap='6px'>
						<img src={notassigned} width='12px' height='12px' />
						<Typography variant='paintData'> Not Assigned</Typography>
					</Stack>
				)}
				{order?.deliveryStatus === "accepted" && (
					<Stack direction='row' alignItems='center' columnGap='6px'>
						<img src={accepted} width='12px' height='12px' />
						<Typography variant='paintData'> Accepted</Typography>
					</Stack>
				)}
				{order?.deliveryStatus === "declined" && (
					<Stack direction='row' alignItems='center' columnGap='6px'>
						<img src={declined} width='12px' height='12px' />
						<Typography variant='paintData'> Declined</Typography>
					</Stack>
				)}
				{order?.deliveryStatus === "picked up" && (
					<Stack direction='row' alignItems='center' columnGap='6px'>
						<img src={pickedUp} width='16px' height='16px' />
						<Typography variant='paintData'> Picked Up</Typography>
					</Stack>
				)}
				{order?.deliveryStatus === "delivered" && (
					<Stack direction='row' alignItems='center' columnGap='6px'>
						<img src={delivered} width='16px' height='16px' />
						<Typography variant='paintData'>Delivered</Typography>
					</Stack>
				)}
			</TableCell>

			<TableCell align='left'>
				{!order?.deliveryPartner && (
					<Typography variant='paintData'>N/A</Typography>
				)}
				{order?.deliveryPartner && (
					<Stack direction='row' columnGap='10px' alignItems='center'>
						<Avatar
							sx={{
								borderRadius: "100000px",
								background: generateRandomColor(),
								width: "34px",
								height: "34px",
								fontSize: "16px",
								fontWeight: "400",
							}}
						>
							<span>
								{order?.deliveryPartner?.firstName.slice(0, 1) +
									order?.deliveryPartner?.lastName.slice(0, 1)}
							</span>
						</Avatar>
						<Typography variant='paintData'>
							{order?.deliveryPartner?.firstName +
								" " +
								order?.deliveryPartner?.lastName}
						</Typography>
					</Stack>
				)}
			</TableCell>

			<TableCell align='left'>
				<Typography variant='paintData'>{totalPrice}</Typography>
			</TableCell>
		</>
	);
};

export default PaintTableResults;
