import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem, Divider, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
    },
    sectionDesktop: {
        display: 'flex',
    },
    notifications: {
        paddingRight: 20
    },
    divider: {
        background: '#fafafa',
    },
    avatar: {
        padding: 12,
        paddingRight: 8
    },
    space: {
        [theme.breakpoints.only('sm')]: {
            marginRight: 24,
            marginLeft: 24
        },
        [theme.breakpoints.up('md')]: {
            marginRight: 36,
            marginLeft: 36
        },
    },
    moreButton: {
      padding: 4
    },
}));

const Header = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );


    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography className={classes.title} variant="h5" noWrap>
                        IQpark
                    </Typography>

                    <div className={classes.grow}/>

                    <div className={classes.sectionDesktop}>
                        <Divider orientation="vertical" flexItem light className={classes.divider}/>

                        <IconButton aria-label="show 17 new notifications" color="inherit"
                                    className={classes.notifications}>
                            <Badge badgeContent={7} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>

                        <Divider orientation="vertical" flexItem light className={classes.divider}/>

                        <Grid container direction='row' justify="center" alignItems="center">

                            <Grid item className={classes.avatar}>
                                <AccountCircleIcon/>
                            </Grid>

                            <Hidden xsDown>
                                <Grid item>
                                    <Typography variant='body1'>
                                        Мария
                                    </Typography>
                                    <Typography variant='body2'>
                                        Admin
                                    </Typography>
                                </Grid>
                            </Hidden>

                            <Hidden xsDown>
                                <div className={classes.space}/>
                            </Hidden>

                            <Grid item>
                                <ArrowDropDownIcon
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    className={classes.moreButton}
                                >
                                    <AccountCircleIcon/>
                                </ArrowDropDownIcon>
                            </Grid>
                        </Grid>

                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
};

export default Header;