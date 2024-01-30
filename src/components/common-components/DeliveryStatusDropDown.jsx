import React from "react";
import accepted from "../paintOrder/assets/accepted.svg";
import declined from "../paintOrder/assets/declined.svg";
import notassigned from "../paintOrder/assets/notassigned.svg";
import Deliverd from "../paintOrder/assets/Deliverd.svg";
import pickedup from "../paintOrder/assets/pickedup.svg";
import { MenuItem, Select, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function DeliveryStatusDropDown({ value, onChange }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				border: "1px solid #EBEBE4",
				width: "171px",
				height: "38px",
				borderRadius: "5px",
			}}
		>
			<Select
				value={value}
				onChange={onChange}
				IconComponent={ArrowDropDownIcon}
				sx={{
					boxShadow: "none",
					".MuiOutlinedInput-notchedOutline": { border: "none" },
					"  .MuiSelect-select": {
						display: "flex",
						flexDirection: "row",
						columnGap: "5px",
					},
				}}
				style={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "row",
					outline: "none",
					border: "none",
					backgroundColor: "transparent",
				}}
			>
				<MenuItem value='all' className='menuItem'>
					<Typography>All Request</Typography>
				</MenuItem>

				<MenuItem value='accepted' className='menuItem'>
					<img src={accepted} width='24px' height='24px' />
					<Typography>Accepted</Typography>
				</MenuItem>
				<MenuItem value='declined' className='menuItem'>
					<img src={declined} width='24px' height='24px' />
					<Typography>Decline</Typography>
				</MenuItem>

				<MenuItem value='not assigned' className='menuItem'>
					<img src={notassigned} width='24px' height='24px' />
					<Typography>Not Assigned</Typography>
				</MenuItem>
				<MenuItem value='delivered' className='menuItem'>
					<img src={Deliverd} width='24px' height='24px' />
					<Typography>Deliverd</Typography>
				</MenuItem>
				<MenuItem value='picked up' className='menuItem'>
					<img src={pickedup} width='24px' height='24px' />
					<Typography>Picked Up</Typography>
				</MenuItem>
			</Select>
		</div>
	);
}

export default DeliveryStatusDropDown;
