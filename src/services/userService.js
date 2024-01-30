import axios from "axios";

const BASE_URL = "http://localhost:5000/admin";

const userService = {
	getAllUsers: async (params) => {
		const token = localStorage.getItem("token");
	
		if (token) {
			try {
				const response = await axios.get(`${BASE_URL}/list`, {
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
	getUser: async (userId) => {
		const token = localStorage.getItem("token");

		if (token) {
			try {
				const response = await axios.get(`${BASE_URL}/${userId}`, {
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
	createUser: async (newUser) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.post(`${BASE_URL}/create`, newUser, {
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

	updateUser: async (userId, updatedUser) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await axios.put(
					`${BASE_URL}/updateUser/${userId}`,
					updatedUser,
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				);

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

	deleteUser: async (userId) => {
		const token = localStorage.getItem("token");
    console.log("IN DELETE : ", token)
		if (token) {
			try {
				const response = await axios.post(`${BASE_URL}/delete/${userId}`, {
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
};

export default userService;
