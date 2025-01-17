import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearchInput, setIsSearchInput] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    setIsSearchInput,
    isSearchInput,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
