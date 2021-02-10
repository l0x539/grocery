import { useState } from "react";
import { AppBar, Container, Tab, Tabs, Box, Typography, Grid } from "@material-ui/core"
import theme from "../utils";
import { makeStyles } from '@material-ui/core/styles';
import { Dashboard } from "./dashboard";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    const useStyles = makeStyles({
        tabp: {
            marginTop: 30
        }
    })

    const classes = useStyles();
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
        className={classes.tabp}
      >
        {value === index && (
            <div>{children}</div>
        )}
      </div>
    );
}


function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

export const HomeService = ({themeColor}) => {
    const [value, setValue] = useState('dashboard');

    const useStyle = makeStyles({
        container: {
            marginTop: 89,
            [theme.breakpoints.down('xs')]: {
                marginTop: 50,
            }
        },
        appBar: {
            //boxShadow: "none"
        },
        tabs: {
            color: themeColor==="primary"?"#7A7D85":"#f7f7f7",
            backgroundColor: themeColor==="primary"?"#FFFFFF":"#424242",
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            borderBottom: "1px solid #e4e5e7",
        },
        indicator: {
            display: "none"
        }
    })

    const classes = useStyle();
    
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return <Container className={classes.container} disableGutters>
            <Tabs value="dashboard" onChange={handleChangeTab} aria-label="Service tabs" className={classes.tabs} TabScrollButtonProps classes={{ indicator: classes.indicator }}>
                <Tab value="dashboard" 
                {...a11yProps('dashboard')}
                label="Dashboard" />
                <Tab value="messages" label="Messages" {...a11yProps('messages')} />
                <Tab value="orders" label="Orders" {...a11yProps('orders')} />
                <Tab value="stats" label="Stats" {...a11yProps('stats')} />
            </Tabs>
        <TabPanel value={value} index="dashboard">
        <Dashboard themeColor={themeColor} />
        </TabPanel>
        <TabPanel value={value} index="messages">
            <Grid container>
                <Grid item>
                    messages
                </Grid>
            </Grid>
        
        </TabPanel>
        <TabPanel value={value} index="orders">
            <Grid container>
                <Grid item>
                    orders
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index="stats">
            <Grid container>
                <Grid item xs={12}>
                    stats
                </Grid>
            </Grid>
        </TabPanel>
    </Container>
}