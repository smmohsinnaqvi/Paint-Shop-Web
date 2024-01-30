// const BASE_URL = 'http://localhost:8000/auth';

// const authService = {
//   login: async (email, password) => {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     return data.token;
//   },
// };

// export default authService;
// const BASE_URL = 'http://localhost:8000/auth';

// const authService = {
//   login: async (email, password, role) => {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password, role }), // Include role in the request body
//     });
//     const data = await response.json();
//     return data; // Return the entire response data, including the token and role
//   },
// };

// export default authService;
import axios from "axios";

const BASE_URL = 'http://localhost:5000/auth';

const authService = {
	login: async (email, password, role) => {
		try {
			const response = await axios.post(`${BASE_URL}/login`, {
				email,
				password,
				role,
			});
			const { token, user } = response.data;

      return { token, role: user.role ,confirmedUser:user.confirmedUser,userId:user["_id"]} ;
    } catch (error) {
      throw error; // Propagate the error for the caller to handle
    }
  },

  loggedOut: async (token) => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`, null, {
        headers: {
          Authorization: `${token}`,
        },
      });

      const { success, user } = response.data;

      if (success) {
        console.log("User logged out successfully");
        return true;
      } else {
        console.log("Error occurred during logout");
        return null;
      }
    } catch (error) {
      throw error; // Propagate the error for the caller to handle
    }
  },

  updatePassword: async (userId, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/updatePassword`, {
        
        password,
      },{
        headers: {
          Authorization: `${userId}`,
        },
      });

      const { success, user } = response.data;

      if (success) {
        console.log("Password updated successfully");
        return user;
      } else {
        console.log("Error occurred during password update");
        return null;
      }
    } catch (error) {
      throw error; 
    }
  },
};

export default authService;
