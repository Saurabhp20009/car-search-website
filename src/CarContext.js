import React, { createContext, useEffect, useState } from "react";
import carData from "../src/Components/db.json";
const contextCar = createContext("");

const CarContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchButton, setSearchButton] = useState(false);
  const [searchCarData, setSearchCarData] = useState([]);

  useEffect(() => {
    if (searchButton) {
      setSearchCarData([])
      console.log(searchQuery)
      carData.data.forEach((item) => {
        const query = searchQuery.toLocaleLowerCase();
        const tempString = item.name.toLocaleLowerCase();

        let index = tempString.search(query);
        
        if (index !== -1) {
          searchCarData.push(item);
        }
        //console.log(index)
      });
      console.log(searchCarData)
      setSearchButton(false);
    }
  },[searchButton]);

  return (
    <div>
      <contextCar.Provider
        value={{
          searchValue: searchQuery,
          setSearch: (e) => setSearchQuery(e),
          button: searchButton,
          setButton: () => setSearchButton(true),
          searchResult: searchCarData
        }}
      >
        {children}  
      </contextCar.Provider>
    </div>
  );
};

const exportsModule = { CarContext, contextCar };

export default exportsModule;
