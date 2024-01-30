import React from "react";
import SideNavBar from "./SideNavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Stack } from "@mui/material";
import UserManagement from "./UserManagement";
import TopBar from "./TopBar";
import PaintRequest from "./paintOrder/PaintOrder";
import OrderInfo from "./paintOrder/order-info/OrderInfo";

export default function MainDashboard() {
	return (
		<Stack direction={"row"} width={"100%"} height={"100%"}>
			<SideNavBar />
			<Stack id='main-container'>
				<TopBar />

				<Routes>
					<Route path='/user-management' element={<UserManagement />} />
					<Route path='/' element={<PaintRequest />} />
					<Route path='/order-info' element={<OrderInfo />} />
				</Routes>
				<ToastContainer />
			</Stack>
		</Stack>
	);
}
