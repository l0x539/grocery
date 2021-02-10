import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    footer: {
        height: 60,
    }
});

export default () => { 

    const classes = useStyle();

    return (<Container disableGutters={true}>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center" className={classes.footer}>
                <Grid item>
                    <Typography component="span" variant="subtitle2" align="center" color="textSecondary" gutterBottom>
                        l0x539 © 2021
                    </Typography>
                </Grid>
            </Grid>
        </Container>)
}