import {
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";

const OrderDetailTable = ({ items, totalQuantity, totalPrice }) => {
	console.log("Order Detail Table ", items, totalQuantity, totalPrice);

	const convertNumber = (number) => {
		const newNumber = number.toLocaleString("en-IN", {
			style: "currency",
			currency: "INR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
		return newNumber;
	};
	const styles = {
		table: {
			border: "none", // Remove border from the table
		},
		namecell: {
			border: "none", // Remove border from the cells
			textAlign: "left",
			width: "472px",
		},
		quancell: {
			border: "none", // Remove border from the cells
			textAlign: "center",
		},
		pricecell: {
			border: "none", // Remove border from the cells
			textAlign: "right",
			width: "286px",
		},
	};

	return (
		<>
			<Stack>
				<TableContainer>
					<Table style={styles.table}>
						<TableHead>
							<TableRow>
								<TableCell style={styles.namecell}>
									<Typography variant='itemHeading'>Item Names</Typography>
								</TableCell>
								<TableCell style={styles.quancell}>
									<Typography variant='itemHeading'>Quantity</Typography>
								</TableCell>
								<TableCell style={styles.pricecell}>
									<Typography variant='itemHeading'>Price</Typography>
								</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{items.map((item, i) => {
								return (
									<TableRow key={i}>
										<TableCell style={styles.namecell}>
											<Typography variant='appInfo1'>
												{item.itemName}
											</Typography>
										</TableCell>
										<TableCell style={styles.quancell}>
											<Typography variant='appInfo1'>
												{item.quantity + " Gallons"}
											</Typography>
										</TableCell>
										<TableCell style={styles.pricecell}>
											<Typography variant='appInfo1'>
												{convertNumber(item.price)}
											</Typography>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>

						<TableHead>
							<TableRow>
								<TableCell style={styles.namecell}>
									<Typography variant='itemHeading'>Total Items</Typography>
								</TableCell>
								<TableCell style={styles.quancell}>
									<Typography variant='itemHeading'>
										{totalQuantity + " Gallons"}
									</Typography>
								</TableCell>
								<TableCell style={styles.pricecell}>
									<Typography variant='itemHeading'>
										{convertNumber(totalPrice)}
									</Typography>
								</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
			</Stack>
		</>
	);
};

export default OrderDetailTable;
