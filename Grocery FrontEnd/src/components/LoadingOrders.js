import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import theme from "../utils";

var _ = require('lodash');


export const LoadingOrders = ({themeColor}) => {
    const bgColor = themeColor=="primary"?"#f1f1f1":"#424242";
    const shadingColor = themeColor=="primary"?"#FFF":"#313131";
    const useStyle = makeStyles({
    
        loadingPaper: {
            height: 390,
            padding: theme.spacing(2),
            textAlign: 'start',
            margin: `${theme.spacing(1)}px auto`,
            transition: "margin-top 0.3s, box-shadow 0.3s",
            //color: theme.palette.text.secondary,
        },
        loadingBox: {
            backgroundColor: bgColor, 
            animation: "$animateLoading 1.5s linear infinite",
            backgroundImage: "linear-gradient(130deg,"+shadingColor+", "+(bgColor+", ").repeat(6) +shadingColor+")",
            backgroundSize: "900% 100%",
            borderRadius: 3,
        },
        "@keyframes animateLoading": {
            "0%": { backgroundPosition: "100% 0%" },
            "100%": { backgroundPosition: "0% 0%" }
        }
    
    });
    const classes = useStyle();
    let cards = [];
    let i = 0;
    _.times(5, () => {
        cards.push(
            <Grid item zeroMinWidth key={i} xs={12} sm={6} md={4}>
                <Paper elevation={0} className={classes.loadingPaper}>
                <Box
                component="span" m={1}   
                bgcolor="primary.main"        
                > 
                    <div className={classes.loadingBox} style={{height: "40%", width: "100%"}}></div>
                    </Box>
                <Box
                component="span" m={1}   
                bgcolor="primary.main"        
                > 
                    <div className={classes.loadingBox} style={{height: "10%", width: "50%"}}></div>
                    </Box>
                <Box
                component="span" m={1}   
                bgcolor="primary.main"        
                > 
                    <div className={classes.loadingBox} style={{height: "10%", width: "70%"}}></div>
                    </Box>
                    <Box
                component="span" m={1}   
                bgcolor="primary.main"        
                > 
                    <div className={classes.loadingBox} style={{height: "10%", width: "70%"}}></div>
                    </Box>
                </Paper>
            </Grid>
        );
        i++;
    })
    return cards
}