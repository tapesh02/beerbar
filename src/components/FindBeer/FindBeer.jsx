import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import { GlobalContext } from "../../context/Context";

import SearchComp from "../SearchComp/SearchComp";
import SingleBeerCard from "./SingleBeerCard";

import { Container, Grid, Typography } from "@material-ui/core";

const FindBeer = () => {
    const { searchText } = useContext(GlobalContext);

    const [findBeer, setFindBeer] = useState([]);
    const [showBeerDetails, setShowBeerDetails] = useState(false);

    const handleShowBeerDetails = () => {
        setShowBeerDetails((current) => !current);
    };

    const filterData = (value) => {
        if (searchText === "" || value.name?.toLowerCase().includes(searchText?.toLowerCase())) {
            return value;
        }
    };

    useEffect(() => {
        const findbeer = async () => {
            const beerApi = "https://api.punkapi.com/v2/beers";
            try {
                const response = await fetch(beerApi);
                const jsonResponse = await response.json();
                const data = jsonResponse;
                setFindBeer(data);
            } catch (error) {
                console.log(error);
            }
        };
        findbeer();
    }, []);

    return (
        <>
            {showBeerDetails ? (
                <Outlet context={[setShowBeerDetails]} />
            ) : (
                <>
                    {findBeer?.filter(filterData).length > 0 ? (
                        <>
                            <SearchComp />

                            {searchText && (
                                <Typography color="inherit" className="notFoundtext" variant="h6">
                                    Found {findBeer?.filter(filterData).length} results for {searchText}
                                </Typography>
                            )}

                            <Container style={{ marginTop: "2rem" }}>
                                <Grid container spacing={1} alignItems="center">
                                    {findBeer?.filter(filterData).map((beerData) => {
                                        return <SingleBeerCard beerData={beerData} handleShowBeerDetails={handleShowBeerDetails} key={beerData.id} />;
                                    })}
                                </Grid>
                            </Container>
                        </>
                    ) : (
                        <>
                            <SearchComp />
                            <Typography color="inherit" className="notFoundtext" variant="h6">
                                Found {findBeer?.filter(filterData).length} results for {searchText}
                            </Typography>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default FindBeer;
