import React, {Component, Fragment} from 'react';
import logo from '../../logoBlackAndGreen.png';
import darkLogo from '../../ftitaLogoGreen.png';
import PropTypes from 'prop-types';
import { Button, Grid, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NavBar from "./NavBar";
import { Navbar as ReactNavbar } from 'react-bootstrap';
import SearchBar from "./searchBar";
import ServiceClientButton from "./ServiceClientButton";
import LanguagesButton from "./LanguagesButton";

import { SideBar } from "../SideBar";

const styles = theme => ({
    toggleTablet: {
        [theme.breakpoints.up('md')]: {
            display: "block"
        },
        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    },
    toggleMobile: {
        [theme.breakpoints.up('md')]: {
            display: "block"
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    toggleSmall: {
        [theme.breakpoints.up('xs')]: {
            display: "block"
        },
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.down('md')]: {
            display: "block"
        }
    },
    joinButton: {
        backgroundColor: "#019779",
        border: "1px solid rgba(18, 213, 174, 0.83)",
        boxSizing: "border-box",
        boxShadow: "0px 2px 7px 1px rgba(0, 0, 0, 0.71)",
        borderRadius: 6,
        color: "#FFF",
        width: 90,
        height: 51,
        fontFamily: "'Saira Condensed', sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 25,
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#019779",
            opacity: 0.95
        },
        [theme.breakpoints.down('xs')]: {
            height: 38
        }
    }
  });


class Header extends Component {
    constructor (props) {

        super(props);
        this.state = {
            windowMode: props.windowMode,
            openClientSideBar: false
        }

    }

    toggleFullscreen() {
        if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    toggleSideBar = (event) => {
        if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) return;
        this.setState({openClientSideBar:this.state.openClientSideBar?false:true})
    }
    

    render () {
        const { classes } = this.props;
        return (<NavBar themeColor={this.props.themeColor}>
                <SideBar changeThemeColor={this.props.changeThemeColor} openClientSideBar={this.state.openClientSideBar} toggleSideBar={this.toggleSideBar} themeColor={this.props.themeColor} />
                <Grid item className={classes.menuButton}>
                    <IconButton onClick={this.toggleSideBar} edge="start"  color="black" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item className={classes.toggleMobile}>
                    <ReactNavbar.Brand href="#" alt="ftita logo image">
                        <img 
                        src={this.props.themeColor=="primary"?logo:darkLogo} 
                        width={203}
                        height={55}
                        />
                    </ReactNavbar.Brand>
                </Grid>
                <Grid item>
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    wrap="nowrap"
                    spacing={2}>
                        <Grid item><div className={classes.toggleSmall} ><ServiceClientButton themeColor={this.props.themeColor} /></div></Grid>
                        <Grid className={classes.toggleSmall} item><SearchBar themeColor={this.props.themeColor} /></Grid>
                        <Grid item><div className={classes.toggleMobile} ><LanguagesButton themeColor={this.props.themeColor} /></div></Grid>          
                    </Grid>
                </Grid>
                
                <Grid item>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    wrap="nowrap"
                    spacing={2}>
                        <Grid item><IconButton className={classes.toggleTablet} onClick={this.toggleFullscreen}><FullscreenIcon/></IconButton></Grid>
                        <Grid item><IconButton className={classes.toggleTablet} onClick={this.props.changeThemeColor}>{this.props.themeColor=="primary"?<Brightness2Icon/>:<WbSunnyIcon/>}</IconButton></Grid>
                        <Grid item>
                            <Button
                            aria-controls="services-menu"
                            aria-haspopup="true"
                            color="secondary"
                            className={classes.joinButton}
                            >Join</Button>
                        </Grid>
                    </Grid>
                </Grid>
                
            </NavBar>);
        
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Header);