"use client";
import { createContext, useState } from "react";

const SearchContext = createContext<any>(null);

function SearchProvider({ children }:any) {
  const [search, setSearch] = useState("");

  let values = {
    search,
    setSearch,
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
