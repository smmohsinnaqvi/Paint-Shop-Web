import axios from "axios";

const BASE_URL = "http://localhost:5000/order";

export const orderService = {
	getAllOrders: async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.get(`${BASE_URL}/list`, {
					headers: {
						Authorization: `${token}`,
					},
				});
				if (response.status === 200) {
					console.log("response ", response);
					return response.data;
				} else return [];
			} catch (error) {
				throw error;
			}
		}
	},
	getAllOrdersWithFilters: async (params) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.get(`${BASE_URL}/filteredList`, {
					params,
					headers: {
						Authorization: `${token}`,
					},
				});
				if (response?.status === 200) {
					return response?.data;
				} else {
					return {};
				}
			} catch (error) {
				throw error;
			}
		}
	},
	getPaint: async () => {
		const response = await axios.get(`${BASE_URL}/paint/list`);
		if (response.data.paints) {
			return response.data.paints;
		} else return [];
	},
	createOrder: async (newOrder) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.post(`${BASE_URL}/create`, newOrder, {
					headers: {
						Authorization: `${token}`,
					},
				});
				console.log("Create Order", response);
				if (response?.status === 201) {
					console.log(response.data);
					return response?.data;
				} else {
					return {};
				}
			} catch (error) {
				throw error;
			}
		}
	},
	editOrder: async (id, newOrder) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.put(
					`${BASE_URL}/updateOrder/${id}`,
					newOrder,
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				);
				console.log("Update Order", response);
				if (response?.status === 201) {
					console.log(response.data);
					return response?.data;
				} else {
					return [];
				}
			} catch (error) {
				throw error;
			}
		}
	},
	deleteOrder: async (id) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.post(`${BASE_URL}/delete/${id}`, {
					headers: {
						Authorization: `${token}`,
					},
				});
				console.log("Delete Order", response);
				if (response?.status === 200) {
					console.log(response.data);
					return response?.data;
				} else {
					return [];
				}
			} catch (error) {
				throw error;
			}
		}
	},
};
