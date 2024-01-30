import { createTheme } from "@mui/material/styles";

export const themeButtons = createTheme({
  components: {
    // ... (Existing components and styles)

    // Add a new component for your custom button style
    MuiButton: {
      variants: [
        {
          // Variant for your custom button
          props: { variant: "customButton" },
          style: {
            // Your custom button styles here
            display: "flex",
            padding: "14px 24px 14px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
            borderRadius: "5px",
            background: "#EBEBE4",
          },
        },
        {
          // Variant for another custom button style
          props: { variant: "login" },
          style: {
            // Your custom button styles here
            display: "flex",
            padding: "14px 24px 14px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
            borderRadius: "5px",
            borderTop: "1px solid var(--Primary, #7F56D9)",
            borderRight: "1px solid var(--Primary, #7F56D9)",
            borderLeft: "1px solid var(--Primary, #7F56D9)",
            background: "var(--Primary, #7F56D9)",
          },
        },
        // ... (Other button variants)
      ],
    },

    // ... (Other components)
  },
});
