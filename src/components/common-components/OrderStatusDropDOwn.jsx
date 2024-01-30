import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import done from "../paintOrder/assets/done.svg";
import inprogress from "../paintOrder/assets/inprogress.svg";
import open from "../paintOrder/assets/open.svg";

function OrderStatusDropdown({ value, onChange }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				border: "1px solid #EBEBE4",
				width: "154px",
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
				<MenuItem value='all' className='menuItem' selected>
					<Typography>All Request</Typography>
				</MenuItem>

				<MenuItem
					value='done'
					className='menuItem'
					sx={{ backgroundColor: "#dffeec" }}
				>
					<img src={done} width='24px' height='24px' />
					<Typography>Done</Typography>
				</MenuItem>
				<MenuItem
					value='in progress'
					className='menuItem'
					sx={{ backgroundColor: "#fffacb" }}
				>
					<img src={inprogress} width='24px' height='24px' />
					<Typography>In Progress</Typography>
				</MenuItem>

				<MenuItem
					value='open'
					className='menuItem'
					sx={{ backgroundColor: "#d3f0fa" }}
				>
					<img src={open} width='24px' height='24px' />
					<Typography>Open</Typography>
				</MenuItem>
			</Select>
		</div>
	);
}

export default OrderStatusDropdown;
