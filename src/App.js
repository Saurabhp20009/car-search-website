import { Route, Routes } from "react-router-dom";
import CarDisplay from "./Components/CarDisplay";
import { useState } from "react";
import SearchBar from "./Components/temp";



function App() {
  const[pageNum,setPageNum]=useState(1)
  return (
    <div style={{backgroundColor:"#edf1f6"}}>
      <Routes>  
      <Route  index element={<CarDisplay pageNum={pageNum}/>}/>      
        <Route path="/:page" element={<CarDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;
