import { Grid, makeStyles, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";


const useStyle = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
}));

export default ({children, themeColor}) => {
    const classes = useStyle();

    return <AppBar posistion="static" className={classes.navbar} color={themeColor}>
                <Toolbar >
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    wrap="nowrap"
                    >
                        {children}
                    </Grid>
                        
                </Toolbar>
            </AppBar>
}