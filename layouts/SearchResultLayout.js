import React from "react";
import SearchResultSideNav from "../components/SearchResultSideNav/SearchResultSideNav";

const SearchResultLayout = ({ children }) => {
  return (
    <div className="flex px-[92px]">
      <div>
        <SearchResultSideNav></SearchResultSideNav>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SearchResultLayout;
