import React, { Fragment } from "react"
import { useHistory } from "react-router-dom";
import { Button, ListItemText, Menu, MenuItem, makeStyles  } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export default ({windowMode, themeColor}) => {
    const history = useHistory();
    const borderColor = themeColor==="primary"?"#F1F1F1":"#424242";
    const backgroundColor = themeColor==="primary"?"#F7F7F7":"#424242";
    const textColor = themeColor==="primary"?"#009E7F":"#AFAFAF";
    const useStyle = makeStyles({
        navbar: {
            justifyContent: "space-evenly"
        },
        serviceClientButton: {
            color: textColor,
            minWidth: 114,
            background: backgroundColor,
            border: "1px solid "+borderColor,
            boxSizing: "border-box",
            borderRadius: 6,
            filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))",
            justifyContent: "space-evenly",
        }
    });
    
    const [anchorEl, setAnchorEl] = React.useState(null)

    const classes = useStyle();

    const handleServiceClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleServiceClose = (event) => {
        setAnchorEl(null);
    };

    const goClient = () => {
        history.push("/");
    };
    const goService = () => {
        history.push("/service");
    };

    return (
        <Fragment>
            <Button
                aria-controls="services-menu"
                aria-haspopup="true"
                varient="contained"
                color={themeColor}
                onClick={handleServiceClick}
                className={classes.serviceClientButton}
            >
                {windowMode? <Fragment><FaceIcon /> Service</Fragment>:<Fragment><ShoppingCartOutlinedIcon /> Client</Fragment> }
            </Button>
            <Menu
                anchorEl={anchorEl}
                id="services-menu"
                open={Boolean(anchorEl)}
                onClose={handleServiceClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}

            >
                <MenuItem onClick={goClient}>
                    <ShoppingCartOutlinedIcon/>
                    <ListItemText primary="Client"></ListItemText>
                </MenuItem>
                <MenuItem onClick={goService}>
                    <FaceIcon />
                    <ListItemText primary="Service"></ListItemText>
                </MenuItem>
            </Menu> 
        </Fragment>
    )
}