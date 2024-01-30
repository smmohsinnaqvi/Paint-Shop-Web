import { createTheme } from '@mui/material/styles';

const drawerTheme = createTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#7138EF', // Set your desired background color here
        color: 'white', // Set text color
      },
    },
  },
});

export default drawerTheme;
