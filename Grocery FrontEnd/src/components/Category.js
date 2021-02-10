import { Grid, Paper, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export const Category = ({v, i,categoryPaper}) => {
    return <Paper elevation={0} id={"paperCategMain-"+i} className={categoryPaper}>
        <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Grid item>
                <SearchIcon style={{ fontSize: 87 }} />
            </Grid>
            <Grid item>
                <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    {v.title}
                </Typography>
            </Grid>
        </Grid>
    </Paper>
}