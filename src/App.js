import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
import AdminDashboard from "./components/UserManagement";
import MainDashboard from "./components/MainDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import OrderInfo from "./components/paintOrder/order-info/OrderInfo";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/set-password' element={<SignIn isSetPassword />} />
					<Route path='/sign-in' element={<SignIn />} />

					<Route
						path='*'
						element={<ProtectedRoute children={<MainDashboard />} />}
					/>
				</Routes>
			</Router>
			<ToastContainer />
		</div>
	);
}

export default App;
