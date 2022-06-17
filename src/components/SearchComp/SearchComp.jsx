import React, { useContext } from "react";

import { GlobalContext } from "../../context/Context";

import { Search } from "@material-ui/icons";

const SearchComp = () => {
    const { handleSearch, searchText } = useContext(GlobalContext);
    console.log(searchText);
    return (
        <>
            <div className="main-searchbar">
                <input className="searchbarinput" type="text" placeholder="Search" id="searchText" name="searchText" onChange={handleSearch} value={searchText} />
                <Search className="searchicon" />
            </div>
        </>
    );
};

export default SearchComp;
