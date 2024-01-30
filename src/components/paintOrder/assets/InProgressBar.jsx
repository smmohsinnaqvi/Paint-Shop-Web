import { Stack, Typography } from "@mui/material";
import * as React from "react";
import "../paintorder.styles.css";
import inprogress from "./inprogress.svg";
const InProgressBar = (props) => (
	<div
		style={{ position: "relative", flex: 1 }}
		className='StatusBarResponsive'
	>
		{/* {397} */}
		<svg
			width='110%'
			height={"100%"}
			viewBox='0 0 420 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 0H373.109L397 30L373.109 60H0L27.4494 30L0 0Z'
				fill={props.color}
			/>
		</svg>

		<Typography
			variant='orderStatusBar'
			sx={{
				position: "absolute",
				textAlign: "center",
				top: "35%",
				fontSize: "1vw",
				color: "#A43F12",
			}}
		>
			<Stack direction='row' alignItems='center'>
				<img
					src={inprogress}
					width=''
					height=''
					style={{ marginInline: "4px" }}
					color='#A43F12'
				/>{" "}
				In Progress
			</Stack>
		</Typography>
	</div>
);
export default InProgressBar;
