import React from "react";
import { Link, useLocation } from "react-router-dom";

function Viewticket() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link
            to="/allbooking"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-9">
          <h4 style={{ marginLeft: "10px" }}>
            <b>Packagedetails</b>
          </h4>
        </div>
      </div>
      <div>
        
        <div className="pp">
          <h5>{data.packagename}</h5>
          <div className="ppd">
            <h5>
             
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {data.total}
              
            </h5>
          
          </div>
        </div>
        <div>
          <h5>Start from :{data.starttime} AM</h5>
          <h5>End Timmings:{data.endtime} PM</h5>
          <h5>Buy Date:{data.purchasedatetime} PM</h5>
        </div>
        <div className="margintop">
          <h5>Indoor Games</h5>
        </div>
        <div className="ig">
          <img src="./images/chess.avif" />
          <img src="./images/archery.avif" />
          <img src="./images/carom.avif" />
        </div>
        <p>{data.indoorgames}</p>
        <div>
          <h5 className="margintop">Outdoor Games</h5>
        </div>
        <div className="ig">
          <img src="./images/cricket.avif" />
          <img src="./images/throughball.jpg" />
          <img src="./images/volleyball.jpg" />
        </div>

        <p> {data.outdoorgames}</p>
        <div className="margintop">
          <h5>Swimming pool</h5>
          <p>{data.swimmingpool}</p>
          <b>Swimming Costume Mandatory</b>
        </div>
        <div className="margintop">
          <h5>Package features</h5>
          <p>{data.packagefeature}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewticket;
