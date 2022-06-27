import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";

import { GlobalContext } from "../../context/Context";
import SingleFavCard from "../Favourite/SingleFavCard";

const Favourite = () => {
    const { favourite, setFavourite, totalFavItems } = useContext(GlobalContext);

    const removeFavourite = (singleBeerDetails) => {
        const removeItem = favourite.filter((favourite) => favourite.id !== singleBeerDetails.id);
        setFavourite(removeItem);
    };

    return (
        <>
            {totalFavItems > 0 ? (
                <>
                    <Container style={{ marginTop: "2rem" }}>
                        <Grid container spacing={1} alignItems="center">
                            {favourite?.map((singleBeerDetails) => {
                                return (
                                    <SingleFavCard
                                        singleBeerDetails={singleBeerDetails}
                                        key={singleBeerDetails.id}
                                        removeFavourite={removeFavourite}
                                    />
                                );
                            })}
                        </Grid>
                    </Container>
                </>
            ) : (
                <Typography variant="h5" className="noItemText">
                    Opps..! You do not have any favourite beer yet. <br></br>Please add one.
                </Typography>
            )}
        </>
    );
};

export default Favourite;
