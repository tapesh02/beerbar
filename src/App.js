import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FindBeer from "./components/FindBeer/FindBeer";
import Favourite from "./components/Favourite/Favourite";
import Error from "./components/Error/Error";

import "./Styles/styles.scss";
const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/findbeer" element={<FindBeer />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
