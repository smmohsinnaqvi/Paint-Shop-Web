import { createTheme } from '@mui/material/styles';

const textFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#EBEBE4', 
            },
            '&:hover fieldset': {
              borderColor: '#AAAAAA',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#AAAAAA', // Change the border color when focused
            },
          },
        },
      },
    },
  },
});

export default textFieldTheme;
