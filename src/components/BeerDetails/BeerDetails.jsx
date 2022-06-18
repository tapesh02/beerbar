import React, { useState, useEffect, useContext } from "react";
import { useOutletContext, useNavigate, useParams } from "react-router-dom";

import { GlobalContext } from "../../context/Context";

import { Button, Container } from "@material-ui/core";
import SingleBeerDetailCard from "./SingleBeerDetailCard";

const BeerDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [setShowBeerDetails] = useOutletContext();

    const { favourite, setFavourite } = useContext(GlobalContext);

    const [beerDetails, setBeerDetails] = useState([]);
    const [ifItemExist, setIfitemExist] = useState(false);

    const goToFindBeer = () => {
        setShowBeerDetails(!setShowBeerDetails);
        navigate("/findbeer", { replace: true });
    };

    const addToFavourite = (singleBeerDetails) => {
        const addItem = [...favourite, singleBeerDetails];
        setFavourite(addItem);
    };

    useEffect(() => {
        const getBeerDetails = async () => {
            const beerDetailsApi = `https://api.punkapi.com/v2/beers/${id}`;
            try {
                const response = await fetch(beerDetailsApi);
                const jsonResponse = await response.json();
                const data = jsonResponse;
                setBeerDetails(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBeerDetails();
    }, [id]);

    return (
        <>
            <Container style={{ width: "84%", marginTop: "1rem", marginBottom: "1rem" }}>
                <div className="main-gobackBtn">
                    <Button onClick={goToFindBeer} className="gobackBtn">
                        Go back
                    </Button>
                </div>
            </Container>

            {beerDetails?.map((singleBeerDetails) => {
                return (
                    <>
                        <SingleBeerDetailCard
                            singleBeerDetails={singleBeerDetails}
                            key={singleBeerDetails.id}
                            addToFavourite={addToFavourite}
                            setIfitemExist={setIfitemExist}
                            ifItemExist={ifItemExist}
                        />
                    </>
                );
            })}
        </>
    );
};

export default BeerDetails;
