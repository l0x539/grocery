import { Avatar, Card, CardActions, CardHeader, Divider, Grid, Typography, Box, LinearProgress, makeStyles, CardContent, Button, CircularProgress } from "@material-ui/core"

import StarIcon from '@material-ui/icons/Star';
import theme from "../utils";
import Carousel from '../components/Carousel'

// Test related
import SearchIcon from '@material-ui/icons/Search';
import testCarousel from '../testing/banner.jpg';
import testCarousel2 from '../testing/banner2.jpg';
import defauleOrderImage from '../testing/defaultOrder.png';
import ReactApexChart from "react-apexcharts";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import OrderList from "../components/ordersList";
import { useState } from "react";

const carouselItems = [
    {
        image: testCarousel,
    },
    {
        image: testCarousel2,
    }
]

const chartTest = {
    options: {
        colors: ['#ccc', '#7A6FBE', '#28BBE3'],
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        legend: {
            show: false
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        grid: {
            borderColor: '#f8f8fa',
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['2021', '2022', '2023', '2024', '2025'],
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: false
            }
        }
    },

    series: [
        {
            name: 'Activated',
            data: [50, 130, 80, 70, 180]
        },
        {
            name: 'Pending',
            data: [80, 100, 60, 200, 140]
        },
        {
            name: 'Deactivated',
            data: [20, 80, 70, 140, 150]
        }
    ],
}

const data = {
    columns: [
        ["Desktops",78],["Smart Phones",55],["Mobiles",40],["Tablets",25]
    ],
    type:"pie",
  };
const color = {pattern:["#f0f1f4","#7a6fbe","#28bbe3","#2f8ee0"]}
const pie = {
    label:{show:!1}
}
function createData(name, phone, email, request, social) {
    return { name, phone, email, request, social };
}

const rows = [
    createData('User 1', "+1555555", "test@gmail.com", "request", "@social"),
    createData('User 2', "+1555555", "test@gmail.com", "request", "@social"),
    createData('User 3', "+1555555", "test@gmail.com", "request", "@social"),
    createData('User 4', "+1555555", "test@gmail.com", "request", "@social"),
];
const getMockOrders = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(rows), 2000);
    });
};
// end test

const useStyle = makeStyles({
    card: {
        width: 340
    },
    progress: {
        marginLeft: 'auto',
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        fontSize: 18
    },
    action: {
        marginTop: 0,
        alignSelf: "center"
    },
    progressColor: {
        background: '#1dbf73',
        borderRadius: 3
    },
    paperInbox:{
        width: 340,
        minHeight: 60,
        borderRadius: 6
    },
});

function LinearProgressWithLabel(props) {
    const classes = useStyle();
    return (
      <Box display="flex" alignItems="center" className={classes.progress}>
        <Box width="100px" mr={1}>
          <LinearProgress variant="determinate" {...props} classes={{barColorPrimary:classes.progressColor}} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export const Dashboard = () => {

    const [resolvedOrders, setResolvedOrders] = useState([])
    getMockOrders().then((data) => {
        setResolvedOrders(data);
    });

    const classes = useStyle();

    return <Grid 
    container
    direction="row"
    justify="space-between"
    alignItems="flex-start"
    nowrap>
        <Grid item xs={1} sm={3}>
            <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={4}>
                <Grid item>
                    <Card className={classes.card} elevation={0}>
                        <CardHeader classes={{ title: classes.title, action: classes.action }}
                        avatar={
                            <Avatar className={classes.largeAvatar}>
                                U
                            </Avatar>
                        }
                        action={<div><StarIcon fontSize="small" style={{color: "gold"}} /> N/A</div>}
                        title="Username"
                        />
                        <Divider variant="middle" />
                        <CardContent>
                            <CardActions disableSpacing>
                                <Typography variant="body2">
                                    Response Rate
                                </Typography>
                                <LinearProgressWithLabel value={100} />
                            </CardActions>
                            <CardActions disableSpacing>
                                <Typography variant="body2">
                                    Order Completion
                                </Typography>
                                <LinearProgressWithLabel value={100} />
                            </CardActions>
                            <CardActions disableSpacing>
                                <Typography variant="body2">
                                    Delivered on time
                                </Typography>
                                <LinearProgressWithLabel value={100} />
                            </CardActions>
                        </CardContent>
                        <Divider variant="middle" />
                        <CardContent>
                            <CardActions disableSpacing>
                                <Typography variant="body2">
                                    Response Rate
                                </Typography>
                                <Typography variant="body2" className={classes.progress}>
                                    $0
                                </Typography>
                            </CardActions>
                            <CardActions disableSpacing>
                                <Typography variant="body2">
                                    Response Time
                                </Typography>
                                <Typography variant="body2" className={classes.progress}>
                                    N/A
                                </Typography>
                            </CardActions>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item>
                    <Card elevation={0} className={classes.paperInbox}>
                        <CardHeader 
                        title="Inbox"
                        action={<Button>View All</Button>}/>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={8}>
            <Grid
            container
            direction="column"
            spacing={3}
            spacing={4}>
                <Grid item xs={6} sm={12}>
                    <Card elevation={0}>
                        <CardHeader 
                        title="Active orders"
                        action={<Button>Active orders (0)</Button>}/>
                        <CardContent>
                            {resolvedOrders?.length?<OrderList rows={rows} />:<Grid container justify="center" alignItems="center"><Grid item><CircularProgress style={{ color: "#bbdefb"}} /></Grid></Grid>}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"
                    >
                        <Grid item md={5}>
                            <Card elevation={0}>
                                <CardHeader 
                                title="Circle"/>
                                <C3Chart data={data} pie={pie} color={color}/>
                            </Card>
                        </Grid>
                        <Grid item md={5}>
                            <Card elevation={0}>
                                <CardHeader 
                                title="Stats"/>
                                <CardContent>
                                    <ReactApexChart options={chartTest.options} series={chartTest.series} type="line" height="290" />
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item>
                    <Carousel
                    className="Example"
                    autoPlay={true}
                    animation="slide"
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    >
                        {
                            carouselItems.map((item, index) => {
                                return <Grid item xs={12 /* (carouselItems.length ? carouselItems.length : 3)*/} key="content">
                                        <div  style={{backgroundImage: "url("+item.image+")", backgroundRepeat: "no-repeat", backgroundPosition: "center", height:278}} ></div>
                                    </Grid>
                            })
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}