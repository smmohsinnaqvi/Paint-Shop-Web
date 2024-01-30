import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";

const CustomerDetail = ({ customer }) => {
	const generateRandomColor = () => {
		const newColor =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, "0");
		return newColor;
	};
	return (
		<>
			<Stack mt='24px' mb='81px' className='po-border'>
				<Stack direction='row' className='po-detailsHeading'>
					<Typography variant='orderStatusTitle' alignItems='start'>
						Customer Details
					</Typography>
				</Stack>
				<Stack direction='row' padding='15px'>
					<Stack direction='row' marginRight='55px'>
						<Stack marginRight='20px'>
							<Avatar
								sx={{
									borderRadius: "100000px",
									backgroundColor: generateRandomColor(),
									height: "100px",
									width: "100px",
								}}
							>
								<Typography variant='customerAvatar'>
									<span>
										{customer?.firstName.slice(0, 1) +
											customer?.lastName.slice(0, 1)}
									</span>
								</Typography>
							</Avatar>
						</Stack>
						<Stack direction='column' alignItems='start'>
							<Typography variant='paintDetails'>
								{customer.firstName} {customer.lastName}
							</Typography>
							<Stack direction='row' mt='8px'>
								<img src={phone} width='24px' height='24px' />
								<Typography variant='customerInfo' marginLeft='8px'>
									{customer.phone.slice(0, 5) + " " + customer.phone.slice(4)}
								</Typography>
							</Stack>
							<Stack direction='row' mt='8px'>
								<img src={mail} width='24px' height='24px' />
								<Typography variant='customerInfo' marginLeft='8px'>
									{customer.email}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Stack marginLeft='55px' width='310px'>
						<Stack direction='row'>
							<img src={location} width='24px' height='24px' />
							<Typography
								variant='customerInfo'
								marginLeft='8px'
								alignItems='start'
							>
								{customer.addressLine1 + " , " + customer.addressLine2}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
};

export default CustomerDetail;
