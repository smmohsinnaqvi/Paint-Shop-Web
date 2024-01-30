import React from "react";
import {
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import PaintTableResults from "./PaintTableResults";
import { Navigate, useNavigate } from "react-router-dom";
import OrderInfo from "./order-info/OrderInfo";

const PaintOrderTable = ({ orders }) => {
	// const navigate = useNavigate();s
	// console.log("In Paint Order Table", orders);
	const navigate = useNavigate();

	return (
		<>
			<Stack class='op-table'>
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow sx={{ backgroundColor: "#F8F3FB" }}>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Customer Name</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Total Items</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Total Quantity</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Order Status</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Delivery Status</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>
										Delivery Partner
									</Typography>
								</TableCell>
								<TableCell align='left'>
									<Typography variant='paintColumn'>Total Amount</Typography>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((order, i) => {
								return (
									<TableRow
										key={i}
										style={{ cursor: "pointer" }}
										onClick={() => {
											console.log("call table row");
											navigate("/order-info", { state: { order } });
										}}
									>
										<PaintTableResults order={order} />
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Stack>
		</>
	);
};

export default PaintOrderTable;
