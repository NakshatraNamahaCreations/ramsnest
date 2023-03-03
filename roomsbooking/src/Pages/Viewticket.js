import React from "react";
import { Link } from "react-router-dom";

function Viewticket() {
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
            <b>Ticket</b>
          </h4>
        </div>
      </div>
      <div>
        <div className="tick">
          <h5>Ram's nest</h5>
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/96/52/89/1000_F_296528939_sQRRBO2JMjykFBKsQLfLxvAveofcmCWV.jpg"
            width="100%"
          />
        </div>
        <div>
          <div className="justbt mt">
            <h6>Name</h6>
            <h6>Phone Number</h6>
          </div>
          <div className="justbt ">
            <p>Daniel Austin</p>
            <p>+ 1 98032382</p>
          </div>
          <div className="justbt mt">
            <h6>Check in</h6>
            <h6>Check out</h6>
          </div>
          <div className="justbt ">
            <p>Dec 10 2022</p>
            <p>Dec 15 2022</p>
          </div>
          <div className="justbt mt">
            <h6>Hotel</h6>
            <h6>Guest</h6>
          </div>
          <div className="justbt ">
            <p>Royale President</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div>
        <div className="ftbook">
          <div className="cont">
            <a href="/confirmpayment" style={{ color: "white !important" }}>
              <button>Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewticket;
