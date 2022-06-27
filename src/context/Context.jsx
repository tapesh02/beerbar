import { React, createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const [favourite, setFavourite] = useState([]);
    const [showBeerDetails, setShowBeerDetails] = useState(false);

    const handleSearch = (event) => {
        if (searchText !== "") {
            setSearchText(event.target.value);
        } else if (searchText !== null) {
            setSearchText(event.target.value);
        }
    };

    const handleShowBeerDetails = () => {
        setShowBeerDetails((current) => !current);
    };

    const totalFavItems = favourite.length;

    return (
        <GlobalContext.Provider
            value={{
                handleSearch,
                searchText,
                favourite,
                setFavourite,
                totalFavItems,
                showBeerDetails,
                setShowBeerDetails,
                handleShowBeerDetails,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;
