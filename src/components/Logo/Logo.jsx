import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Logo = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/");
    };
    return (
        <>
            <Typography variant="h4" className="logo" onClick={gotoHome}>
                Beer<span className="bar-span">Bar</span>
            </Typography>
        </>
    );
};

export default Logo;
