import React from "react";
import {
	Avatar,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import "../paintorder.styles.css";
import open from "../assets/open.svg";
import inprogress from "../assets/inprogress.svg";
import done from "../assets/done.svg";
import accepted from "../assets/accepted.svg";
import declined from "../assets/declined.svg";
import notassigned from "../assets/notassigned.svg";
import phone from "../assets/phone.svg";
import pickedUp from "../assets/pickedUp.svg";
import delivered from "../assets/delivered.svg";

import OrderDetailTable from "./OrderDetailTable";

const OrderDetail = ({
	deliveryPartner,
	items,
	totalQuantity,
	totalPrice,
	orderStatus,
	deliveryStatus,
}) => {
	const generateRandomColor = () => {
		const newColor =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, "0");
		return newColor;
	};

	return (
		<Stack>
			<Stack mt='24px' className='po-border'>
				<Stack direction='row' className='po-detailsHeading'>
					<Typography variant='orderStatusTitle' alignItems='start'>
						Paint Order Details
					</Typography>
				</Stack>

				{/* Table */}

				<OrderDetailTable
					items={items}
					totalQuantity={totalQuantity}
					totalPrice={totalPrice}
				/>

				{/* Order Info */}

				<Stack direction='row' padding='25px' className='po-border'>
					<Stack
						direction='column'
						alignItems='start'
						width='25%'
						marginRight='25px'
					>
						<Typography variant='appInfo1'>Status</Typography>

						<Stack direction='row' mt='12px'>
							{orderStatus === "open" && (
								<Stack className='open' direction='row'>
									<img src={open} width='14px' height='14px' />{" "}
									<Typography variant='orderStatus'>Open</Typography>
								</Stack>
							)}
							{orderStatus === "in progress" && (
								<Stack className='inprogress' direction='row'>
									<img src={inprogress} width='20px' height='20px' />{" "}
									<Typography variant='orderStatus'>In Progress</Typography>
								</Stack>
							)}
							{orderStatus === "done" && (
								<Stack className='done' direction='row'>
									<img src={done} width='14px' height='14px' />{" "}
									<Typography variant='orderStatus'>Done</Typography>
								</Stack>
							)}
						</Stack>
					</Stack>
					<Stack
						direction='column'
						alignItems='start'
						width='25%'
						margin='0px 25px'
					>
						<Typography variant='appInfo1'>Delivery Status</Typography>
						<Stack direction='row' mt='12px'>
							{deliveryStatus === "accepted" && (
								<Typography variant='appInfo1'>
									<img src={accepted} width='14px' height='14px' /> Accepted
								</Typography>
							)}
							{deliveryStatus === "not assigned" && (
								<Typography variant='appInfo1'>
									<img src={notassigned} width='14px' height='14px' /> Not
									Assigned
								</Typography>
							)}
							{deliveryStatus === "declined" && (
								<Typography variant='appInfo1'>
									<img src={declined} width='14px' height='14px' /> Declined
								</Typography>
							)}
							{deliveryStatus === "picked up" && (
								<Typography variant='appInfo1'>
									<img src={pickedUp} width='14px' height='14px' /> Picked Up
								</Typography>
							)}
							{deliveryStatus === "delivered" && (
								<Typography variant='appInfo1'>
									<img src={delivered} width='14px' height='14px' /> Delivered
								</Typography>
							)}
						</Stack>
					</Stack>
					<Stack
						direction='column'
						alignItems='start'
						width='25%'
						margin='0px 25px'
					>
						<Typography variant='appInfo1'>Assigned to</Typography>
						{!deliveryPartner && (
							<Stack direction='row' mt='12px'>
								<Typography variant='appInfo1'>N/A</Typography>
							</Stack>
						)}
						{deliveryPartner && (
							<Stack direction='row' mt='12px'>
								<Stack direction='row' columnGap='10px' alignItems='center'>
									<Avatar
										sx={{
											borderRadius: "100000px",
											background: generateRandomColor(),
											height: "24px",
											width: "24px",
										}}
									>
										<Typography
											variant='appInfo1'
											sx={{ fontSize: "12px", color: "white" }}
										>
											<span>
												{deliveryPartner.firstName.slice(0, 1) +
													deliveryPartner.lastName.slice(0, 1)}
											</span>
										</Typography>
									</Avatar>
									<Typography variant='appInfo1'>
										{deliveryPartner.firstName + " " + deliveryPartner.lastName}
									</Typography>
								</Stack>
							</Stack>
						)}
					</Stack>
					<Stack
						direction='column'
						alignItems='start'
						width='25%'
						marginLeft='25px'
					>
						<Typography variant='appInfo1'>Contact Number</Typography>
						{!deliveryPartner && (
							<Stack direction='row' mt='12px'>
								<Typography variant='appInfo1'>N/A</Typography>
							</Stack>
						)}
						{deliveryPartner && (
							<Stack direction='row' mt='12px'>
								<img src={phone} width='20px' height='20px' />
								<Typography variant='appInfo1' marginLeft='8px'>
									{"+91-" +
										deliveryPartner?.phone.slice(0, 5) +
										" " +
										deliveryPartner?.phone.slice(5)}
								</Typography>
							</Stack>
						)}
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default OrderDetail;
