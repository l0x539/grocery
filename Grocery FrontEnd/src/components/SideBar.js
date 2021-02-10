import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Switch, IconButton } from "@material-ui/core"

import SearchBar from "./Layout/searchBar";
import FaceIcon from '@material-ui/icons/Face';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles({
    list: {
      width: 170,
    },
    fullList: {
      width: 'auto',
    },
  });

export const SideBar = ({ openClientSideBar, toggleSideBar, themeColor, changeThemeColor }) => {

    const classes = useStyles();

    return <Drawer anchor="left" open={openClientSideBar} onClose={toggleSideBar}>
        <List className={classes.list}>
            <ListItem ><SearchBar themeColor={themeColor} /></ListItem >
            <Divider />
            <ListItem button>
                <ListItemIcon> <FaceIcon /> </ListItemIcon>
                <ListItemText primary='Client'></ListItemText>

            </ListItem>
            <ListItem button>
                <ListItemIcon> <ShoppingCartOutlinedIcon /> </ListItemIcon>
                <ListItemText primary='Service'></ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
            <IconButton onClick={changeThemeColor}>{themeColor=="primary"?<Brightness2Icon/>:<WbSunnyIcon/>}</IconButton>
                <Switch
                    checked={themeColor==="primary"?false:true}
                    onChange={changeThemeColor}
                    name="checkedA"
                    inputProps={{ 'aria-label': themeColor+'  checkbox' }}
                />
            </ListItem>
        </List>
    </Drawer>
}