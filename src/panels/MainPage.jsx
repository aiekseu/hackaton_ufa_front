import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Badge, Grid, Hidden, Menu, MenuItem} from "@material-ui/core";

import story_1 from '../images/story_1.png'
import story_2 from '../images/story_2.png'
import story_3 from '../images/story_3.png'

import RoomsTable from "../components/RoomsTable";
import Statistic from "../components/Statistic";
import StoryCard from "../components/StoryCard";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CommentIcon from "@material-ui/icons/Comment";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FiltersCard from "../components/FiltersCard";
import roomsData from "../data/roomsData";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: '#F1F6FF'
    },
    roomsTitle: {
        marginBottom: 16,
        marginLeft: 32
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        marginTop: 32
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    grow: {
        flexGrow: 1,
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
    listItems: {
        marginTop: 24,
        marginBottom: 24
    }
}));

export default function MainPage() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = useState(roomsData)

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


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
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
                                        Мария Ким
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
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        Меню
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List >
                    <ListItem button key='booking' className={classes.listItems}>
                        <ListItemIcon> <AssessmentIcon/> </ListItemIcon>
                        <ListItemText primary='Бронирование'/>
                    </ListItem>

                    <ListItem button key='reviews' className={classes.listItems}>
                        <ListItemIcon> <CommentIcon/> </ListItemIcon>
                        <ListItemText primary='Отзывы'/>
                    </ListItem>

                    <ListItem button key='admin' className={classes.listItems}>
                        <ListItemIcon> <PersonIcon/> </ListItemIcon>
                        <ListItemText primary='Администрация'/>
                    </ListItem>

                    <ListItem button key='support' className={classes.listItems}>
                        <ListItemIcon> <QuestionAnswerIcon/> </ListItemIcon>
                        <ListItemText primary='Техподдержка'/>
                    </ListItem>

                    <ListItem button key='news' className={classes.listItems}>
                        <ListItemIcon> <PostAddIcon/> </ListItemIcon>
                        <ListItemText primary='Новости'/>
                    </ListItem>


                </List>
            </Drawer>


            {/* TODO: ОТСЮДА НОРМАЛЬНО БЭЛИГ ПРОСТИ */}
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Grid container direction="column">

                    <Grid item container direction='row' justify="space-around">
                        <Grid item xs='auto' sm={8}>
                            <Statistic/>
                        </Grid>
                        <Grid item xs='auto' sm={3}>
                            <StoryCard picture={story_1} text='Как забронировать комнату'/>
                            <StoryCard picture={story_2} text='Как забронировать комнату'/>
                            <StoryCard picture={story_3} text='Как забронировать комнату'/>
                        </Grid>
                    </Grid>

                    <Grid item container direction='row' justify="space-around">
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                            <Typography variant='h4' className={classes.roomsTitle}>
                                Переговорные
                            </Typography>
                            <RoomsTable rows={rows}/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={3}>
                            <FiltersCard setRows={setRows} />
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}






