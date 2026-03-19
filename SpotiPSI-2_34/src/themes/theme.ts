import { createTheme} from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#aeafae',
      dark: '#6c6d6c'
    },
    secondary: {
      main: '#c370fac9',
      light: '#F5EBFF',
      contrastText: '#47008F'
    }
  }
});
