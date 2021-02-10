import { Backdrop, Modal, Fade, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Fragment, useState } from "react";
import { OrderPreview } from "./OrderPreview";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowY:'scroll'       

    }
})
);

export const Order = ({ orederPaper, oderImage, v }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }


    const handleClose = () => {
        setOpen(false);
    }

    return <Fragment>
            <Modal
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                disableAutoFocus
                disableEnforceFocus
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <OrderPreview order={v} />
                </Fade>
            </Modal>
        <Paper elevation={0} 
    className={orederPaper}
    onClick={handleOpen}
    >
            <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={1}>
                <Grid item className={oderImage}><div  style={{backgroundImage: "url("+v.images[0]+")", backgroundRepeat: "no-repeat", backgroundPosition: "center", height:200, width: "100%"}} ></div></Grid>
                <Grid item>
                    <Rating name="read-only" value={v.rating} readOnly />
                </Grid>
                <Grid item zeroMinWidth>
                    <Typography  component="span" variant="caption" color="textSecondary" gutterBottom>{v.orders} orders</Typography>
                    <Typography  component="h6" variant="h6" color="textPrimary" gutterBottom>{v.title}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth><Typography component="p" variant="subtitle2" color="textPrimary" paragraph gutterBottom >{v.description}</Typography></Grid>
            </Grid>
        </Paper>
    </Fragment>
}