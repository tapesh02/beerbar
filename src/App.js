import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FindBeer from "./components/FindBeer/FindBeer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import Favourite from "./components/Favourite/Favourite";
import Error from "./components/Error/Error";

import Context from "./context/Context";

import "./Styles/styles.scss";
const App = () => {
    return (
        <>
            <Context>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/findbeer" element={<FindBeer />}>
                            <Route path="beerdetails/:id" element={<BeerDetails />} />
                        </Route>
                        <Route path="/favourite" element={<Favourite />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </Context>
        </>
    );
};

export default App;
