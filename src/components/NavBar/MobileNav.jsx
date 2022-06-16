import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Backdrop, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from "@material-ui/core";

import { Home, MenuOpen, ListAlt, AccountCircle, ChevronRight, ChevronLeft, Twitter, Facebook, LinkedIn, Copyright, ExitToApp, PersonAdd } from "@material-ui/icons";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
    hideMobile: {
        background: "black",
        color: "white",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    root: {
        display: "flex",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: "85vw",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "85vw",
        padding: "10px",
        backgroundColor: "black",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },

    menuicons: {
        width: "2.2rem",
        height: "2.2rem",
        color: "white",
    },
    socialicons: {
        display: "inline-flex",
        marginTop: "auto",
        marginInlineStart: "5%",

        "& a": {
            color: "white",
            margin: "0px 1%",
            padding: "0%",
            width: "2.5rem",
            height: "2.5rem",
            "& .MuiListItemIcon-root": {
                width: "inherit",
                height: "inherit",
                alignItems: "center",
            },
        },
    },
    mobileLogo: {
        gap: "5%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "5%",
        marginBottom: "10%",
    },
}));

const MobileNav = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);

        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
            document.body.style.background = "blur(2px)";
        }
    };

    const handleDrawerClose = () => {
        setOpen(false);
        document.body.style.overflow = "unset";
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <>
            <div className={(classes.root, classes.hideMobile)}>
                <CssBaseline />
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar style={{ alignItems: "center" }}>
                        <Typography style={{ flexGrow: "1", marginTop: "2%", textDecoration: "none" }}>
                            <Link to="/home" style={{ textDecoration: "none" }}>
                                <Logo />
                            </Link>
                        </Typography>
                        <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
                            <MenuOpen fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Backdrop className={classes.backdrop} open={open} onClick={handleDrawerClose}>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="right"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight fontSize="large" style={{ color: "white" }} />}</IconButton>
                        </div>
                        <Box className={classes.mobileLogo}>
                            <Logo />
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <Home fontSize="large" style={{ color: "white" }} />
                                </ListItemIcon>
                                <NavLink to="/home" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                                    <ListItemText primary="Home" />
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ListAlt fontSize="large" style={{ color: "white" }} />
                                </ListItemIcon>
                                <NavLink to="/findbeer" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                                    <ListItemText primary="Find Beer" />
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="large" style={{ color: "white" }} />
                                </ListItemIcon>
                                <NavLink to="/favourite" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                                    <ListItemText primary="Favourite" />
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccountCircle fontSize="large" style={{ color: "white" }} />
                                </ListItemIcon>
                                <NavLink to="/about" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                                    <ListItemText primary="About" />
                                </NavLink>
                            </ListItem>
                        </List>
                        <Box className={classes.socialicons}>
                            <ListItemLink href="https://twitter.com/tapesh2" target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <Twitter className={classes.menuicons} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink href="https://www.linkedin.com/in/tapesh-patel-276a65a4/" target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <LinkedIn className={classes.menuicons} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink href="https://dribbble.com/Tapesh_Patel">
                                <ListItemIcon>
                                    <Facebook className={classes.menuicons} />
                                </ListItemIcon>
                            </ListItemLink>
                        </Box>
                        <div style={{ display: "inline-flex", gap: "10px", alignItems: "center", justifyContent: "center", padding: "inherit" }}>
                            <Copyright className={classes.menuicons} />
                            <p style={{ color: "white", letterSpacing: "1.2px", padding: "0%", margin: "0%" }}> Copyright reserved by Tapesh Patel</p>
                        </div>
                    </Drawer>
                </Backdrop>
            </div>
        </>
    );
};

export default MobileNav;
