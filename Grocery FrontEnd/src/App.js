import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router,
  Switch,      
} from 'react-router-dom'

import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import { paths } from "./routes";
import AppRoute from "./routes/route";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {
  
  const [themeColor, setThemeColor] = useState("primary");
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


  useEffect(() => {
    const existingPreference = localStorage.getItem("darkState");
    if (existingPreference) {
     ( existingPreference === "primary")
        ? setThemeColor("primary")
        : setThemeColor("secondary");
    } else {
    }
  }, [localStorage.getItem("darkState")]);

  useEffect(() => {
      if (prefersDarkMode && !localStorage.getItem("darkState")) {
        setThemeColor(prefersDarkMode?"secondary":"primary");
        localStorage.setItem("darkState", "secondary");
      }
    }
    ,[prefersDarkMode]
  );


  
  const changeThemeColor = () => {
    localStorage.setItem("darkState", themeColor==="primary"?"secondary":"primary")
    setThemeColor(themeColor==="primary"?"secondary":"primary")
  }
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });
  
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    }
  })
  
  let theme = createMuiTheme(themeColor==="primary"?lightTheme:darkTheme, {
    palette: {
      primary: {
        main: "#F7F7F7",
      },
      secondary: {
        main: "#424242",
      },
      background: {
        light: "#F7F7F7",
      },
    },
    breakpoints: {
      values: {
        xs: 0, // phones
        sm: 600, // tablets
        md: 1095, // small laptops
        lg: 1323, // desktops
        xl: 1500, // large screens
      },
    },
  });
  
  theme = createMuiTheme(theme, {
    palette: {
    },
    typography: {
      fontFamily: "'Lato', sans-serif;", // Lato
      h6: {
        fontFamily: "'Advent Pro', sans-serif"
      },
      subtitle2: {
        fontFamily: "'Advent Pro', sans-serif",
      },
      caption: {
        fontFamily: "'Advent Pro', sans-serif",
        fontSize: 11
      },
      button: {
        textTransform: "none"      
      }
    },
    overrides: {
      MuiContainer: {
        root:{
        
      },
    },
      MuiToolbar: {
        regular: {
          [theme.breakpoints.up('sm')]: {
            minHeight: 89,
          },
          
        },
        gutters: {
          [theme.breakpoints.up('md')]: {
            paddingLeft: 46,
            paddingRight: 46
          }
          
        }
      }
    }
    
  })

  return (<Router>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header themeColor={themeColor} changeThemeColor={changeThemeColor} />
          <Switch>
            {paths.map((c, i) => 
                <AppRoute 
                  path={c.path}
                  component={c.component}
                  themeColor={themeColor}
                  key={i}
                />
            )}
          </Switch>
          <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
