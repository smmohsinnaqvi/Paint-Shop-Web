import "./paintorder.styles.css";
import {
	Button,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import PaintRequestTable from "./PaintOrderTable";
import AddPaintOrder from "./AddPaintOrder";
import SearchInput from "../common-components/searchInput";
import { AddIcon } from "../../assets/AddIcon";
import OrderStatusDropdown from "../common-components/OrderStatusDropDOwn";

import canofpaint from "./assets/canofpaint.svg";
// import PaintOrderTable from "./PaintOrderTable";
import DeliveryStatusDropDown from "../common-components/DeliveryStatusDropDown";
import SearchPaintOrder from "../common-components/SearchPaintOrder";
import PaintOrderTable from "./PaintOrderTable";
import { orderService } from "../../services/orderService";
function PaintOrder() {
	const [searchKey, setSearchKey] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [selectedOrderStatus, setSelectedOrderStatus] = useState("all"); // Set initial value as needed
	const [deliverdStatus, setDeliverdStatus] = useState("all");
	const handleOrderStatusChange = (event) => {
		setSelectedOrderStatus(event.target.value);
	};

	const handleDeliverdStatus = (event) => {
		setDeliverdStatus(event.target.value);
	};

	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => {
		setOpenModal(false);
		fetchAllOrders();
	};
	const [orders, setOrders] = useState([]);

	const fetchAllOrders = () => {
		const params = {
			search: searchKey,
			orderStatus: selectedOrderStatus,
			deliveryStatus: deliverdStatus,
		};
		orderService.getAllOrdersWithFilters(params).then((res) => {
			const { orders = [] } = res;

			if (orders.length) {
				setOrders(orders);
			} else {
				setOrders([]);
			}
		});
	};
	// const fetchAllOrders = () => {
	// 	orderService.getAllOrders().then((res) => {
	// 		const { orders = [] } = res;

	// 		if (orders.length) {
	// 			setOrders(orders);
	// 		} else {
	// 			setOrders([]);
	// 		}
	// 	});
	// };

	useEffect(() => {
		fetchAllOrders();
	}, [selectedOrderStatus, deliverdStatus, searchKey]);

	console.log("orders", orders);

	return (
		<>
			{!orders.length ? (
				<Stack alignItems='center' mt='133px' direction='column'>
					<img src={canofpaint} height='220px' width='156.316px' />
					<Stack mt='20px'>
						<Typography variant='heading' sx={{ fontSize: "20px" }}>
							No Data Found
						</Typography>
					</Stack>
					<Stack mt='10px'>
						<Typography variant='paintText'>
							Add paint request by customer here. All paint request will be
							visible here.
						</Typography>
					</Stack>
					<Stack mt='20px'>
						<Button
							variant='contained'
							color='primary'
							className='delivery-btn'
							onClick={handleOpenModal}
						>
							Add Paint Request
						</Button>
					</Stack>
					<AddPaintOrder
						open={openModal}
						handleClose={handleCloseModal}
						/* other props as needed */
						fetchAllOrders={fetchAllOrders}
					/>
				</Stack>
			) : (
				""
			)}
			{orders.length ? (
				<Stack>
					<Stack className='um-maincontainer' mt='19px'>
						<Stack className='um-topconatiner' direction='row'>
							<Typography variant='paintOrderHeading'>Paint Orders</Typography>
							<Stack direction='row' columnGap='10px'>
								<SearchPaintOrder setSearch={setSearchKey} />
								<OrderStatusDropdown
									value={selectedOrderStatus}
									onChange={handleOrderStatusChange}
								/>
								<DeliveryStatusDropDown
									value={deliverdStatus}
									onChange={handleDeliverdStatus}
								/>
								<Button
									variant='contained'
									onClick={handleOpenModal}
									color='primary'
									startIcon={<AddIcon />}
									className='delivery-btn'
								>
									Paint Request
								</Button>
							</Stack>
						</Stack>

						<PaintOrderTable orders={orders} />
						<AddPaintOrder
							open={openModal}
							handleClose={handleCloseModal}
							/* other props as needed */
							fetchAllOrders={fetchAllOrders}
						/>

						<Stack className='um-tablecontainer'></Stack>
					</Stack>
				</Stack>
			) : (
				""
			)}
		</>
	);
}

export default PaintOrder;
