import { Box, Drawer, Stack, Typography } from "@mui/material";
import {
	Button,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { themePalette } from "../constants/theme/typography";
import drawerTheme from "../constants/theme/drawer";
import theme from "../constants/theme"; // Import the main theme file
import logo2 from "../assets/2.svg";
import brush from "../assets/Group.svg";
import user from "../assets/user.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import userService from "../services/userService";
import authService from "../services/authService";

function SideNavBar() {
	const [active, setActive] = useState("paintorder");
	const navigate = useNavigate();
	const menuItems = [
		{
			text: "Paint Orders",
			path: "/",
			style: { color: "#FFF" },
			icon: brush,
			id: "paintorder",
		},
		{
			text: "User Management",
			path: "/user-management",
			style: { color: "#FFF" },
			icon: user,
			id: "usermanagement",
		},
	];
	const LogOut = () => {
		// authService.loggedOut().then(res=>{
		//   console.log(res)
		localStorage.clear();
		navigate("/sign-in");
		// })
	};
	return (
		<>
			<Stack className='side-nav' rowGap='25px' position="fixed">
				<img src={logo2} alt='logo-image' />
				<Stack rowGap='20px' className='nav-list' width='100%'>
					{menuItems?.map((item) => (
						<NavLink to={item?.path}>
							<Stack
								className={
									active === item?.id ? "nav-item active-nav" : "nav-item"
								}
								onClick={() => {
									setActive(item.id);
								}}
								direction='row'
								columnGap='8px'
							>
								<img
									src={item?.icon}
									alt='nav-icon'
									className='nav-icon'
									width='20px'
									height='20px'
								/>
								<Typography variant='drawer'>{item?.text}</Typography>{" "}
							</Stack>{" "}
						</NavLink>
					))}
				</Stack>
				<Stack
					direction='row'
					columnGap='8px'
					onClick={LogOut}
					className='log-out'
				>
					<LogoutIcon />
					<Typography variant='drawer'>Log out</Typography>
				</Stack>
			</Stack>
		</>
	);
}

export default SideNavBar;
