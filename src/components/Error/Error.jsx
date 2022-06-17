import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";

const Error = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    };
    return (
        <>
            <div className="main-error">
                <Typography variant="h4" className="errorTitle">
                    Lost somewhere ..? <br></br> Don't worry you can go back to home
                    <br></br>
                    <Button variant="contained" onClick={goToHome} className="homebtn">
                        Go back home
                    </Button>
                </Typography>
            </div>
        </>
    );
};
export default Error;
