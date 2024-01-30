import { Stack, Typography } from "@mui/material";
import * as React from "react";
import open from "./open.svg";
const Openbar = (props) => (
	<div
		style={{ position: "relative", flex: 1, flexWrap: "nowrap" }}
		className='StatusBarResponsive'
	>
		{/* {419} */}
		<svg
			width='105%'
			height={"100%"}
			viewBox='0 0 420 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M0 0H391.345L419 30L391.345 60H0V0Z' fill={props.color} />
		</svg>

		<Typography
			variant='orderStatusBar'
			sx={{
				position: "absolute",
				textAlign: "center",
				top: "35%",
				fontSize: "1vw",
				color: "#036028",
			}}
		>
			<Stack direction='row' alignItems='center'>
				<img
					src={open}
					width=''
					height=''
					style={{ marginInline: "4px" }}
					color='#036028'
				/>
				Open
			</Stack>
		</Typography>
	</div>
);
export default Openbar;
