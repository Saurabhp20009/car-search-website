import React, { useContext, useEffect, useState } from "react";
import dataCar from "../Components/db.json";
import exportsModule from "../CarContext";

const SearchList = () => {
  const [carData, setCarData] = useState();
  const exp = exportsModule;
  const search = useContext(exp.contextCar);

     

   


  return (
    <div>
      <div>{
       
        }</div>
    </div>
  );
};

export default SearchList;
