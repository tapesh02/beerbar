import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Context";

import { Box, Paper, CardMedia, Typography, Button } from "@material-ui/core";

const SingleBeerDetailCard = ({ singleBeerDetails, addToFavourite, setIfExist, ifExist }) => {
    const { favourite } = useContext(GlobalContext);
    const { id, image_url, name, description, abv } = singleBeerDetails;

    const checkIfExsist = () => {
        setIfExist(false);
        const finditem = favourite.findIndex((favourite) => favourite.id === singleBeerDetails.id);
        if (finditem !== -1) {
            setIfExist(true);
        }
    };
    checkIfExsist(id);

    return (
        <>
            <Box className="main-beerdetails">
                <Paper className="main-beerdetails-1">
                    <Box className="main-beerdetails-card">
                        <CardMedia component="img" className="beerdetailsCardImage" image={image_url} alt="detailsThumb" title={name} />
                    </Box>
                    <Box className="main-beerdetails-info">
                        <Box className="main-beerdetailsHeaders">
                            <Box className="beerdetailsHeaders">
                                <Typography variant="h6">
                                    Name : <span>{name}</span>
                                </Typography>
                            </Box>
                            <Box className="beerdetailsHeaders">
                                <Typography variant="h6">
                                    ABV : <span></span>
                                    {abv}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="main-beerdetailsDesc">
                            <Typography variant="h6">Description</Typography>
                            <Typography variant="body1">{description}</Typography>
                        </Box>
                    </Box>
                    {ifExist ? (
                        <Button variant="outlined" className="addedBtn" disabled="true">
                            Already added
                        </Button>
                    ) : (
                        <Button variant="contained" onClick={() => addToFavourite(singleBeerDetails)} className="favBtn">
                            Favourite
                        </Button>
                    )}
                </Paper>
            </Box>
        </>
    );
};

export default SingleBeerDetailCard;
