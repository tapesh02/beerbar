import React from "react";

import { Search } from "@material-ui/icons";

const SearchComp = ({ handleSearch, searchText }) => {
    return (
        <>
            <div className="main-searchbar">
                <input className="searchbarinput" type="text" placeholder="Search" id="searchText" name="searchText" onChange={""} value={""} />
                <Search className="searchicon" />
            </div>
        </>
    );
};

export default SearchComp;
