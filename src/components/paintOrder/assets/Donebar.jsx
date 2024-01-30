import { Stack, Typography } from "@mui/material";
import * as React from "react";
import done from "./done.svg";
const Donebar = (props) => (
	<div
		style={{ position: "relative", flex: 1, flexWrap: "nowrap" }}
		className='StatusBarResponsive'
	>
		{/* {386} */}
		<svg
			width='100%'
			height={"100%"}
			viewBox='0 0 386 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M0 0H386V60H0L21.7903 30L0 0Z' fill={props.color} />
		</svg>
		<Typography
			variant='orderStatusBar'
			sx={{
				position: "absolute",
				textAlign: "center",
				top: "35%",
				left: "40%",
				fontSize: "1vw",
				color: "#036028",
			}}
		>
			<Stack direction='row' alignItems='center'>
				<img
					src={done}
					width=''
					height=''
					style={{ marginInline: "4px" }}
					color='#036028'
				/>{" "}
				Done
			</Stack>
		</Typography>
	</div>
);
export default Donebar;
