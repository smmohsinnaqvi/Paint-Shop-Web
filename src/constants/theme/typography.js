import { createTheme } from "@mui/material/styles";

export const themePalette = {
	// Define your existing theme palette here
};

export const themeTypography = createTheme(themePalette, {
	typography: {
		// Heading
		heading: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "32px",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
		},

		// Subheading
		subheading: {
			color: "#4C4C4C",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		colorText: {
			fontFamily: "Lato",
			fontSize: "28px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		manageOrders: {
			color: "#4C4C4C",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},
		tableheading: {
			color: "#212121",
			cursor: "pointer",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Normal text
		normalText: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Normal text
		normalText: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Placeholder
		placeholder: {
			color: "#AAA",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		validationError: {
			fontFamily: "Lato",
			fontSize: "13px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
			color: "red",
		},

		// App Info
		appInfo: {
			color: "var(--Primary, #8B11EC)",
			fontFamily: "Lato",
			fontSize: "28px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		// App Info 1
		appInfo1: {
			color: "#4C4C4C",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Drawer
		drawer: {
			color: "#FFF",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Paint Heading
		paintHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		// Paint Text
		paintText: {
			color: "#4C4C4C",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Paint Order Heading
		paintOrderHeading: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "26px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		// Paint Column
		paintColumn: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 500,
			lineHeight: "normal",
		},

		// Paint Data
		paintData: {
			color: "#4C4C4C",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Paint Details
		paintDetails: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "24px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		// Item Heading
		itemHeading: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 500,
			lineHeight: "normal",
		},

		// Add Paint Heading
		addPaintHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 800,
			lineHeight: "normal",
		},

		// Paint Details Heading
		paintDetailsHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		// Paint Item Heading
		paintItemHeading: {
			color: "#212121",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Count Card Count
		countCardCount: {
			color: "#154000",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "28px",
			fontStyle: "normal",
			fontWeight: 800,
			lineHeight: "normal",
		},

		// Count Card Text
		countCardText: {
			color: "#4C4C4C",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "13px",
			fontStyle: "normal",
			fontWeight: 500,
			lineHeight: "normal",
		},

		// User Table Heading
		userTableHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 500,
			lineHeight: "normal",
		},

		// User Table Data
		userTableData: {
			color: "#4C4C4C",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		// Add User Heading
		addUserHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
		},

		// Form Details Heading
		formDetailsHeading: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},

		profilename: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "normal",
		},
		profileEmail: {
			color: "#4C4C4C",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "16px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},
		searchfield: {},

		// Added by Mohsin
		orderStatusTitle: {
			color: "#212121",
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "24px",
			fontStyle: "normal",
			fontWeight: "600",
			linHeight: "normal",
		},
		customerAvatar: {
			color: "#FFF",
			fontFamily: "Lato",
			fontSize: "40px",
			fontStyle: "normal",
			fontWeight: "600",
			lineHeight: "normal",
		},

		customerInfo: {
			color: "#6A6A6A",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: "500",
			lineHeight: "normal",
		},

		orderStatusBar: {
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: "500",
			lineHeight: "normal",
		},

		orderStatus: {
			textAlign: "center",
			fontFamily: "Lato",
			fontSize: "15px",
			fontStyle: "normal",
			fontWeight: "600",
			lineHeight: "normal",
		},

		//
	},
});
