import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";

import { Box, Paper, CardMedia, Typography, Button, Chip } from "@material-ui/core";

const SingleBeerDetailCard = ({ singleBeerDetails, addToFavourite, setIfitemExist, ifItemExist }) => {
    const { favourite } = useContext(GlobalContext);

    const {
        id,
        image_url,
        name,
        description,
        abv,
        first_brewed,
        ibu,
        target_fg,
        target_og,
        ebc,
        srm,
        ph,
        volume,
        boil_volume,
        method,
        food_pairing,
        brewers_tips,
    } = singleBeerDetails;

    const checkIfItemExsist = () => {
        setIfitemExist(false);
        const finditem = favourite.findIndex((favourite) => favourite.id === singleBeerDetails.id);
        if (finditem !== -1) {
            setIfitemExist(true);
        }
    };
    checkIfItemExsist(id);

    return (
        <>
            <Box className="main-beerdetails">
                <Paper className="main-beerdetails-1">
                    <Box className="main-beerdetails-card">
                        <CardMedia
                            component="img"
                            className="beerdetailsCardImage"
                            image={image_url}
                            alt="detailsThumb"
                            title={name}
                        />
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
                    {ifItemExist ? (
                        <Button variant="outlined" className="addedBtn" disabled="true">
                            Already added
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => addToFavourite(singleBeerDetails)}
                            className="favBtn">
                            Favourite
                        </Button>
                    )}
                </Paper>
            </Box>
            <Box className="main-beerdetails">
                <Paper className="main-beerdetails-2">
                    <Typography variant="h6"> Key Information </Typography>
                    <Box className="main-other-details">
                        <ul className="otherDetailsList">
                            <li>
                                <span>First Brewd : </span>
                                {first_brewed}
                            </li>
                            <li>
                                <span>IBU : </span>
                                {ibu}
                            </li>
                            <li>
                                <span>Target FG : </span>
                                {target_fg}
                            </li>
                            <li>
                                {" "}
                                <span>Target OG: </span>
                                {target_og}
                            </li>
                            <li>
                                <span>EBC : </span>
                                {ebc}
                            </li>
                            <li>
                                <span>SRM: </span>
                                {srm}
                            </li>
                            <li>
                                <span>PH : </span>
                                {ph}
                            </li>
                            <li>
                                <span>Volumn : </span>
                                {volume.value} {volume.unit}
                            </li>
                            <li>
                                <span>Boil Volumn : </span>
                                {boil_volume.value} {boil_volume.unit}
                            </li>
                        </ul>
                    </Box>
                </Paper>
            </Box>
            <Box className="main-beerdetails">
                <Paper className="main-beerdetails-2">
                    <Typography variant="h6"> Other Information </Typography>
                    <Box className="food">
                        <Typography variant="subtitle1" className="subTitle">
                            Best with food{" "}
                        </Typography>
                        {food_pairing.map((food_pairing, i) => (
                            <Chip label={food_pairing} variant="outlined" color="secondary" key={i} className="chips" />
                        ))}
                    </Box>
                    <Box className="method">
                        <Typography variant="subtitle1" className="subTitle">
                            Mash temperature{" "}
                        </Typography>
                        {method.mash_temp.map((method, i) => (
                            <Chip
                                label={`${method.temp.value}  ${method.temp.unit}`}
                                variant="outlined"
                                color="secondary"
                                key={i}
                                className="chips"
                            />
                        ))}
                        <Typography variant="subtitle1" className="subTitle">
                            Fermentation{" "}
                        </Typography>
                        <Chip
                            label={`${method.fermentation.temp.value}  ${method.fermentation.temp.unit}`}
                            variant="outlined"
                            color="secondary"
                            className="chips"
                        />
                        <Typography variant="subtitle1" className="subTitle">
                            Twist{" "}
                        </Typography>
                        <Typography variant="body1">{method.twist} </Typography>
                        <Typography variant="subtitle1" className="subTitle">
                            Brewers Tips{" "}
                        </Typography>
                        <Typography variant="body1">{brewers_tips} </Typography>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default SingleBeerDetailCard;
