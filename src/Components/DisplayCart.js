import React from "react";
import "../Components/CSS/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faDharmachakra,
  faGasPump,
  faHeart,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const DisplayCart = ({
  name,
  modelYear,
  totalSeater,
  mode,
  economy,
  gear,
  price,
  img,
}) => {
  return (
    <div className="container " style={{ width: "21rem" ,height:"25rem",margin: "1em"  }}>
      <div className="container carCart ">
        <div class="card" >
          <img
            src={img}
            class="card-img-top"
            alt={name}
            className="media-image"
          />
          <div className="card-body">
            <div className="headingCart">
              <h5 className="card-title ">{name}</h5>
              <h6 className="modelYear">{modelYear}</h6>
            </div>

            <div className="cartIconDisplay">
              <div>
                <FontAwesomeIcon icon={faPerson} style={{ padding: "1px" }} />{" "}
                {totalSeater}{" "}
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faGasPump}
                  style={{ padding: "1px" }}
                />{" "}
                {mode}
              </div>
              <div>
                <FontAwesomeIcon icon={faCar} style={{ padding: "1px" }} />
                {economy}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faDharmachakra}
                  style={{ padding: "1px" }}
                />
                {gear}
              </div>
            </div>
            <hr className="hr"></hr>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5 className="priceHead"  >{price}</h5>
              <div>
                <FontAwesomeIcon icon={faHeart} style={{marginRight:"15px"}} />
                <button className="btn btn-primary" >Rent now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCart;
