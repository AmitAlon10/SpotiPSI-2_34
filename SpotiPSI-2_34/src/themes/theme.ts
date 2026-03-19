import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#aeafae',
      dark: '#6c6d6c',
      light: '#fff'
    },
    secondary: {
      main: '#c370fac9',
      light: '#cfa3fd',
      contrastText: '#47008F'
    }
  }
});
