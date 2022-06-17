import React from "react";

import { Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Chip } from "@material-ui/core";

import noImage from "../../assets/noImage.jpg";

const SingleFavCard = ({ singleBeerDetails, removeFavourite }) => {
    const { image_url, name, tagline, abv } = singleBeerDetails;

    return (
        <>
            <Grid item xs={6} sm={3} md={2} lg={2} xl={2}>
                <Card className="main-beer-card">
                    <CardActionArea>
                        <CardMedia component="img" height={150} image={image_url ? image_url : noImage} alt="beerCardImg" title={name} className="beerCardImg" />
                        <CardContent className="cardContent">
                            <Typography variant="h6" className="cardTitle">
                                {name}
                            </Typography>
                            <Typography variant="body2">{tagline} </Typography>
                            <Chip color="secondary" size="small" label={` Abv ${abv}`} variant="outlined" style={{ float: "right" }} />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="cardBtn" onClick={() => removeFavourite(singleBeerDetails)}>
                            Remove
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default SingleFavCard;
