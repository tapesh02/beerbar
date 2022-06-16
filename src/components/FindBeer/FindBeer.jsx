import React, { useState, useEffect } from "react";

import SearchComp from "../SearchComp/SearchComp";
import SingleBeerCard from "./SingleBeerCard";

import fakeData from "../../data/data.js";

import { Container, Grid } from "@material-ui/core";

const FindBeer = () => {
    const [findBeer, setFindBeer] = useState([]);

    useEffect(() => {
        const findbeer = async () => {
            const beerApi = "https://api.punkapi.com/v2/beers";
            try {
                const response = await fetch(beerApi);
                const jsonResponse = await response.json();
                const data = jsonResponse;
                setFindBeer(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        findbeer();
    }, []);

    return (
        <>
            <SearchComp />
            <Container style={{ marginTop: "2rem" }}>
                <Grid container spacing={1} alignItems="center">
                    {findBeer.map((beerData) => {
                        return <SingleBeerCard fakeD={beerData} />;
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default FindBeer;
