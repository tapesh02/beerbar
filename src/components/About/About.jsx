import React from "react";

import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";

import { Box, Button, CardMedia, Typography } from "@material-ui/core";

const About = () => {
    const navigate = useNavigate();
    const gotoFindbeers = () => {
        navigate("/findbeer");
    };
    return (
        <>
            <Box className="main-about">
                <Box className="main-aboutImage">
                    <CardMedia
                        component="img"
                        className="aboutImage"
                        image="https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="aboutImage"
                        title="aboutImage"
                    />
                </Box>
                <Box className="main-aboutDesc">
                    <Logo />
                    <Typography variant="h2"> About Us</Typography>
                    <Typography variant="subtitle1">
                        BeerBar is a provider of best beer guide. We bring best taste from around the world, so that you dont have to compromise on party. Use BeerBar to find whats best suitable for
                        your taste and need. Best part is the service is free forever.
                    </Typography>
                    <Button variant="contained" color="inherit" onClick={gotoFindbeers} className="moreBtn">
                        Learn More
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default About;
