import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "../paintorder.styles.css";
import backButton from "../assets/backButton.svg";
import Donebar from "../assets/Donebar";
import InProgress from "../assets/InProgressBar";
import Openbar from "../assets/Openbar";
import OrderDetail from "./OrderDetail";
import CustomerDetail from "./CustomerDetail";

import edit from "../assets/edit.svg";
import del from "../assets/del.svg";
import { useLocation, useNavigate } from "react-router-dom";
import UpdatePaintOrder from "./UpdatePaintOrder";
import { orderService } from "../../../services/orderService";
import { toast } from "react-toastify";

const OrderInfo = () => {
	const location = useLocation();

	const order = location.state?.order;

	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
			<Stack className='os-mainContainer'>
				<Stack direction='row' justifyContent='space-between' height=''>
					<Stack direction='row' className='os-backContainer'>
						<img
							src={backButton}
							height='24px'
							width='24px'
							className='notif-icon'
							onClick={() => navigate("/")}
						/>
					</Stack>
					<Stack direction='row' alignItems='end'>
						<Stack marginRight='10px' height='40px'>
							<img
								src={edit}
								alt='edit'
								height='24px'
								width='24px'
								className='notif-icon'
								onClick={() => {
									handleOpenModal();
								}}
							/>
						</Stack>
						<Divider orientation='vertical' variant='middle' flexItem={`|`} />
						<Stack marginRight='10px' height='40px'>
							<img
								src={del}
								alt='delete'
								height='24px'
								width='24px'
								className='notif-icon'
								onClick={() => {
									orderService.deleteOrder(order._id).then((res) => {
										console.log("order res :", res);
										toast.success("Order Deleted Successfully!", {
											position: toast.POSITION.TOP_RIGHT,
										});
									});
									navigate("/");
								}}
							/>
						</Stack>
						<Divider orientation='vertical' variant='middle' flexItem />
						<Button
							variant='contained'
							color='primary'
							className='delivery-btn'
						>
							Download
						</Button>
					</Stack>
				</Stack>
				<Stack mt='17px'>
					<Stack direction='row'>
						<Typography variant='orderStatusTitle'>Order Status</Typography>
					</Stack>

					<Stack direction='row' className='statusBar'>
						<Openbar color='#D3F0FA' />
						{order.orderStatus === "open" && (
							<>
								<InProgress color='#F2F2F2' />
								<Donebar color='#F2F2F2' />
							</>
						)}
						{order.orderStatus === "in progress" && (
							<>
								<InProgress color='#FEF0C7' />
								<Donebar color='#F2F2F2' />
							</>
						)}
						{order.orderStatus === "done" && (
							<>
								<InProgress color='#FEF0C7' />
								<Donebar color='#DFFEEC' />
							</>
						)}
					</Stack>
				</Stack>

				{/* Order Details  */}

				<OrderDetail
					deliveryPartner={order.deliveryPartner}
					items={order.items}
					totalQuantity={order.totalQuantity}
					totalPrice={order.totalPrice}
					orderStatus={order.orderStatus}
					deliveryStatus={order.deliveryStatus}
				/>

				{/* Customer Details  */}

				<CustomerDetail customer={order.customer} />
			</Stack>
			{openModal && (
				<UpdatePaintOrder
					open={openModal}
					handleClose={handleCloseModal}
					order={order}
				/>
			)}
		</div>
	);
};

export default OrderInfo;
