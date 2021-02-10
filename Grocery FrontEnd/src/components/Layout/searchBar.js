import SearchIcon from '@material-ui/icons/Search';
import themePr from "../../utils";

import { Grid, InputBase } from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                minWidth: "100%"
            }
        },
        MuiButton: {
            root: {
                minWidth: 114,
                minHeight: 40,
            }
        }
    }
})


export default ({themeColor}) => {
    const useStyle = makeStyles({
        search: {
            overflow: "hidden",
            width: 320,
            height: 51,
            background: themeColor==="primary"?"#F7F7F7":"#515151",
            border: "1px solid rgba(119, 121, 140, 0.11)",
            boxSizing: "border-box",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 6,
            height: 40.19,
            left: 15.87,
            top: 12.81,
            paddingLeft: 10,
            transition: "margin-top 0.1s, box-shadow 0.1s",
            [themePr.breakpoints.up("xl")]: {
                width: 582.13,
                
            },
            [themePr.breakpoints.down("xs")]: {
                width: 200,
                
            },
            "&:hover": {
                boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
                marginTop: -4,
            }
        },
        iconAdjust: {
            // marginTop: 4,
            width: 26.81,
            height: 26.31,
            left: 15.87,
            top: 12.81,
            color: "#77798C"
        },
        inputBase: {
            [themePr.breakpoints.up("xl")]: {
                minWidth: 546
                
            },
            fontFamily: "'Advent Pro', sans-serif",
            minWidth: "92%",
            paddingLeft: 3,
            color: themeColor==="primary"?"rgba(0, 0, 0, 0.87)": "rgba(255, 255, 255, 0.87)"
            
        }
    })
    const classes = useStyle()
    return <ThemeProvider theme={theme}>
                <Grid                        
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                wrap="nowrap" className={classes.search}>
                    <div className={classes.iconAdjust}>
                        <SearchIcon />
                    </div>
                    <InputBase
                    className={classes.inputBase}
                        placeholder="Search for a delivery service from here"
                    />
                </Grid>
            </ThemeProvider>
}