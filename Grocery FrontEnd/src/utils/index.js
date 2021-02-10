
import { createMuiTheme } from '@material-ui/core/styles';
export default createMuiTheme({
    palette: {
      primary: {
        main: "#F7F7F7"
      }, 
      secondary: {
        main: "#009E7F"
      },
      background: {
        default: "#F7F7F7"
      }
    },
    breakpoints: {
      values: {
        xs: 0, // phones
        sm: 600, // tablets
        md: 900, // small laptops
        lg: 1200, // desktops
        xl: 1500, // large screens
      },
    },
  });