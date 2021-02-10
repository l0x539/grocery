import DZFlag from "../../flags/emojione_flag-for-algeria.svg";

import { Button, Icon, makeStyles } from '@material-ui/core';


export default ({themeColor}) => {
    const borderColor = themeColor==="primary"?"#F1F1F1":"#424242";
    const backgroundColor = themeColor==="primary"?"#F7F7F7":"#424242";
    const textColor = themeColor==="primary"?"#009E7F":"#AFAFAF";
    const useStyle = makeStyles({
        imageIcon: {
            height: "100%",
            display: "block",
            margin: "0 auto"
        },
        rootIcon: {
            textAlign: "center",
            paddingRight: 3
        },
        languagesButton: {
            color: textColor,
            minWidth: 114,
            background: backgroundColor,
            border: "1px solid "+borderColor,
            boxSizing: "border-box",
            borderRadius: 6,
            filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))",
            justifyContent: "space-evenly",
        }
    })
    const classes = useStyle();
    return <Button
                aria-controls="services-menu"
                aria-haspopup="true"
                color="secondary"
                className={classes.languagesButton}
            >
                <Icon fontSize="small" className={classes.rootIcon}><img className={classes.imageIcon} src={DZFlag} /></Icon> English
            </Button>
}