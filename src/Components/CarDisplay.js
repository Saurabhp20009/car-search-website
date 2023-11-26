import React, { useContext, useEffect, useState } from "react";
import carData from "../Components/db.json";
import Header from "./Header";
import exportsModule from "../CarContext";
import { useParams } from "react-router-dom";
import dataCar from "../Components/db.json";
import DisplayPageCount from "./DisplayPageCount";
import DisplayCart from "./DisplayCart";
import "../Components/CSS/CarDisplay.css";

const CarDisplay = ({ pageNum }) => {
  const exp = exportsModule;
  const search = useContext(exp.contextCar);

  const [carDisplayArr, setCarDisplayArr] = useState([]);
  let numberPage;
  const { page } = useParams();

  if (page === undefined) {
    numberPage = pageNum;
  } else {
    numberPage = page;
  }

  let firstIndex = numberPage * 6 - 6;
  let lastIndex = firstIndex + 6;
  let copyData = [...dataCar.data];

  useEffect(() => {
   
     
    if(search.searchValue)
    {  
        let searchQueryLowerCase= search.searchValue.toLocaleLowerCase()
        const filteredData= copyData.filter((item)=>item.name.toLocaleLowerCase().includes(searchQueryLowerCase) )
   
        setCarDisplayArr(filteredData)
        
    }

  else{
    const results = copyData.slice(firstIndex, lastIndex);
    setCarDisplayArr(results);}
  }, [page,search.searchValue]);

  return (
    <>
      <Header />

      <div className="carDisplayBody">
        {" "}
        {carDisplayArr.length>0 ? carDisplayArr.map((item, index) => {
          return (
            <DisplayCart
              key={index}
              name={item.name}
              modelYear={item.modelYear}
              totalSeater={item.totalSeater}
              mode={item.mode}
              economy={item.economy}
              gear={item.gear}
              price={item.price}
              img={item.img}
            />
          );
        }) :  <h1 className="noResult">No Result found</h1>  }
      </div>

      {carDisplayArr.length>0 && <DisplayPageCount page={numberPage} />}
    </>
  );
};

export default CarDisplay;
