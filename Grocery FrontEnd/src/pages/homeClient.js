import { Container, Divider, Drawer, Grid, List, ListItem, ListItemIcon, Paper, Typography } from "@material-ui/core";
import theme from "../utils";
import Carousel from '../components/Carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Fragment, useState } from "react";
import { Category } from "../components/Category";
import { Order } from "../components/Order";
import { LoadingOrders } from "../components/LoadingOrders";


// Test related
import SearchIcon from '@material-ui/icons/Search';
import testCarousel from '../testing/testCarousel.jpg';
import testCarousel2 from '../testing/testCarousel2.jpg';
import defauleOrderImage from '../testing/defaultOrder.png'
import userImageTest from '../testing/order.gif'

const useStyle = makeStyles({
    container: {
        marginTop: 89,
        paddingTop: 59,
        [theme.breakpoints.down('sm')]: {
            marginTop: 30,
        }
    },
    categoryPaper: {
        width: 155,
        height: 190,
        paddingTop: 40,
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    orederPaper: {
        cursor: "pointer",
        height: 410,
        padding: theme.spacing(2),
        textAlign: 'start',
        margin: `${theme.spacing(1)}px auto`,
        transition: "margin-top 0.3s, box-shadow 0.3s",
        "&:hover": {
            boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)",
            marginTop: -4,
        }
        //color: theme.palette.text.secondary,
    },
    orederPaperContent: {
        marginRight: 20,
        marginLeft: 20,
    },
    oderImage: {
        width: "100%"
    },
    drawer: {
        display: "none",
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
            display: "block"
        }
    },
    drawerList: {
        width: 70,
        flexShrink: 0,
        marginTop: 48
    }
});

const Categories = [
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},
    {"title": "Test", "emoji": "", "link": "#"},

]
const carouselItems = [
    {
        image: testCarousel,
    },
    {
        image: testCarousel2,
    }
]

const orders = [
    {title: "Title", images: [userImageTest], description: "Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem Lorem Ipsem...", rating: 5, orders: 67},
    {title: "Title", images: [], description: "You got this", rating: 5, orders: 67},
    {title: "Title", images: [], description: "You got this", rating: 5, orders: 67},
    {title: "Title", images: [], description: "You got this", rating: 5, orders: 67},
    {title: "Title", images: [], description: "You got this", rating: 5, orders: 67},

]

const getMockOrders = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(orders), 2000);
    });
};

export const Home = ({themeColor}) => {
    const [resolvedOrders, setResolvedOrders] = useState([])
    const classes = useStyle();
    getMockOrders().then((data) => {
        setResolvedOrders(data);
    });
    return <Fragment>
        <div className={classes.container}>
            <Container maxWidth="xl">
                <Grid container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
                wrap="nowrap">
                    <Grid item xs={1} sm={3}>
                        <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        spacing={2}>
                            {Categories.map((v, i) => {
                                return <Grid key={i} sm={12} lg={6} item>
                                    <Category i={i} v={v} categoryPaper={classes.categoryPaper} />
                                </Grid>
                            })}
                            <Drawer
                            variant="permanent"
                            anchor="left"
                            className={classes.drawer}
                            >
                                <List 
                                className={classes.drawerList}>
                                    {Categories.map((v, i) => {
                                        return <Fragment><ListItem button key={i}>
                                                    <ListItemIcon><SearchIcon style={{ fontSize: 40 }} /></ListItemIcon>
                                                </ListItem>
                                            </Fragment>
                                    })}
                                </List>
                                
                            </Drawer>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                        spacing={3}
                        >
                            <Grid item>
                                <Carousel
                                className="Example"
                                autoPlay={true}
                                animation="slide"
                                indicators={false}
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
                            <Grid item zeroMinWidth>
                                <Grid container
                                spacing={4}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                    {resolvedOrders.length?
                                        resolvedOrders.map((v, i) => {
                                            v.images = v.images.length?v.images:[defauleOrderImage];
                                            return <Grid item zeroMinWidth key={i} xs={12} sm={6} md={4}>
                                                <Order v={v} orederPaper={classes.orederPaper} oderImage={classes.oderImage} />
                                            </Grid>
                                        }): <LoadingOrders themeColor={themeColor} />
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>
    </Fragment>

}