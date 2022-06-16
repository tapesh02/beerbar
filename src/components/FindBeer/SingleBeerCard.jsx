import React from "react";

import { Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import noImage from "../../assets/noImage.jpg";

const SingleBeerCard = ({ beerData }) => {
    const { id, image_url, name, brewers_tips, tagline, abv } = beerData;
    return (
        <>
            <Grid item xs={6} sm={3} md={2} lg={2} xl={2} key={id}>
                <Card className="main-beer-card">
                    <CardActionArea>
                        <CardMedia height="150" component="img" className="beerCardImg" image={image_url} alt="beerCardImg" title={name} />
                        <CardContent className="cardContent">
                            <Typography variant="h6" className="cardTitle">
                                Card Title
                            </Typography>
                            <Typography variant="body2">Body </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ justifyContent: "center" }}>
                        <Button className="cardBtn" variant="contained" c>
                            View
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default SingleBeerCard;
