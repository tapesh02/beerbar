import { React, createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const [favourite, setFavourite] = useState([]);

    const handleSearch = (event) => {
        if (searchText !== "") {
            setSearchText(event.target.value);
        } else if (searchText !== null) {
            setSearchText(event.target.value);
        }
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
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;
