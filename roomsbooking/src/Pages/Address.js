import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div>
      <div className="" style={{position:"fixed",background:"white",width:"100%",padding:"15px"}}>
        <div className="row">
          <div className="col-1">
            <Link to="/sbs" style={{ textDecoration: "none", color: "black" }}>
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "20px", marginTop: "5px" }}
              ></i>{" "}
            </Link>
          </div>
          <div className="col-9">
            <h4 style={{ marginLeft: "10px" }}>
              <b>Hotel Address/Location</b>
            </h4>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.iuTwpS-RUcIU6oMEUtk9SwHaHY&pid=Api&P=0"
          width="100%"
          height="700px !important"
        />
      </div>
      <div className="adss">
        <h4>
          <b>Address Details</b>
        </h4>
        <div className="adsp">
          <p>
            <b>Address Details</b>
          </p>
          <div className="flex1">
            <p style={{ fontSize: "13px" }}>
              1250 Summer Drive Taylor karnataka-560060
            </p>
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>
        {/* <div className="cont">
          <a href="/bookinginformation" style={{ color: "white !important" }}>
            <button>Continue</button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Address;
