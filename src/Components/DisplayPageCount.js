import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayPageCount = ({ page }) => {
  const navigate = useNavigate();

  const handleClick = (value) => {
    if (!value) {
      if (page > 1) {
        navigate(`/${page - 1}`);
      }
    } else {
      if (page <10) {
        navigate(`/${Number(page) + Number(1)}`);
      }
    }
  };

  return (
    <>
      <div style={{padding: "1%",width:"100%",textAlign:"right",backgroundColor:"#edf1f6"}}>
        <button onClick={()=>handleClick(false)} style={{borderRadius:"10px",marginRight:"1vh",backgroundColor:"#0d6efd",padding:"1vh",color:"white" ,fontWeight:"bold"}} >Prev</button>
        {page}
        <button style={{borderRadius:"10px",marginLeft:"1vh",backgroundColor:"#0d6efd",padding:"1vh",color:"white",fontWeight:"bold"}} onClick={()=>handleClick(true)}>Next</button>
      </div>
    </>
  );
};

export default DisplayPageCount;
