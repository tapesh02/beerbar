import React from "react";

import { Box, Container, Typography, Button } from "@material-ui/core";
const Home = () => {
    return (
        <>
            <Box>
                <div className="main-home">
                    <div className="homeBgcolor"></div>
                    <Container className="homeHeader">
                        <Typography variant="h1" className="header">
                            Find whats best for you
                        </Typography>
                        <Typography color="inherit" className="subheader" variant="h6">
                            A better beer deserves a better can. It's all about the beer. Lager Beer at its Best. How refreshing!
                        </Typography>
                        <Button variant="contained" className="findBtn">
                            find here
                        </Button>
                    </Container>
                </div>
            </Box>
        </>
    );
};

export default Home;
