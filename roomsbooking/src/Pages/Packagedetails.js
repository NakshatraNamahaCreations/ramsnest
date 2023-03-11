import React from "react";
import { Link, useLocation } from "react-router-dom";

function Packagedetails() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  return (
    <div>

 
    <div className="margin">
      <div>
        <div className="row">
          <div className="col-1">
            <Link to="/vap" style={{ textDecoration: "none", color: "black" }}>
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "20px", marginTop: "5px" }}
              ></i>{" "}
            </Link>
          </div>
          <div className="col-9">
            <h4 style={{ marginLeft: "10px" }}>
              <b>Package Details</b>
            </h4>
          </div>
        </div>
        <div>
          <img
            className="d-block w-100"
            src={"http://localhost:8080/package/" + data.packageimage}
            alt="First slide"
            style={{ height: "250px", marginTop: "20px" }}
          />
        </div>
        <div>
          <h5>{data.packagename}</h5>
          <div></div>
          {/* <p className="line"><i class="fa-solid fa-indian-rupee-sign"></i>{data.packageprice}/</p> */}
          <p>
            <i class="fa-solid fa-indian-rupee-sign"></i>
            {data.packageprice}
          </p>
        </div>

        <div>
          <h5>Indoor Games</h5>
          {data.indoorgames}
        </div>
        <div>
          <h5>Indoor Games</h5>
          {data.outdoorgames}
        </div>
        <div>
          <h5>Indoor Games</h5>
          {data.packagefeature}
        </div>
      </div>
    </div>
    <div>
        <div className="ftbook">
          <div className="cont">
            <a href="/bookinginformation">
            <button>Continue- {data.discount}</button></a>
          </div>
        </div>
      </div>
       </div>
  );
}

export default Packagedetails;
