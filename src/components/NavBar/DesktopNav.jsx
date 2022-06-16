import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Box, makeStyles } from "@material-ui/core";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
    showDesktop: {
        background: "black",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

const DesktopNav = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} className={classes.showDesktop}>
                <Toolbar>
                    <Box flexGrow={1} padding={1} margin={1}>
                        <Logo />
                    </Box>
                    <Box spacing={2} direction="row">
                        <NavLink to="/home" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Home
                        </NavLink>
                        <NavLink to="/findbeer" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Find Beer
                        </NavLink>
                        <NavLink to="/favourite" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            Favourite
                        </NavLink>
                        <NavLink to="/about" className={(navlink) => (navlink.isActive ? "active" : "inactive")}>
                            About
                        </NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default DesktopNav;
