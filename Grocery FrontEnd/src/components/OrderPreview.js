import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import clsx from 'clsx';

import { red } from '@material-ui/core/colors';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';

// test related
import userImageTest from '../testing/order.gif'
import Carousel from './Carousel';


const useStyles = makeStyles((theme) => ({
    root: {
      width: 600,
      marginTop: 110,
      marginBottom: 20,
      [theme.breakpoints.down('xs')]: {
        marginTop: 60,
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export const OrderPreview = ({ order }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <Card className={classes.root}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            {order?.user?.username[0].toUpperCase()}
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="Enlarge order">
                            <SettingsOverscanIcon />
                        </IconButton>
                        }
                        title={order?.title}
                        subheader={() => {
                            const date = Date(order?.time);
                            return date.split(" ", 5).join(" " )
                        }}
                    />
                    <Carousel
                    className="Example"
                    autoPlay={true}
                    animation="slide"
                    indicators={false}
                    timeout={500}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}
                    >
                        {order.images.length? order.images.map((v, i)=><CardMedia
                            className={classes.media}
                            key={i}
                            image={v}
                            title="imageTitle"
                            />
                        ):<CardMedia
                        className={classes.media}
                        image={userImageTest}
                        title="imageTitle"
                        />}<CardMedia
                        className={classes.media}
                        image={userImageTest}
                        title="imageTitle"
                        />
                    </Carousel>
                    <CardContent disableSpacing>
                        <Rating name="read-only" value={order?.rating} readOnly />
                        <Typography variant="caption" color="textSecondary" component="p">
                            {order?.orders} orders
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {order?.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <BookmarkBorderIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                        {order?.detailsDesc}
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
}