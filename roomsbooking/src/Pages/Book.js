import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div>
      <div className="margin">
        <div className="row">
          <div className="col-1">
            <Link
              to="/hoteldetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "20px", marginTop: "5px" }}
              ></i>{" "}
            </Link>
          </div>
          <div className="col-9">
            <h4 style={{ marginLeft: "10px" }}>Add Facilities</h4>
          </div>
        </div>
        <p>
          <b>Pick a facilities you wish to add</b>
        </p>
        <div>
          <div className="tt">
            <div className="tts">
              <p>
                <b>Welcome drink</b>
              </p>
              <input id="cb" type="checkbox" />
            </div>
          </div>
          <div className="tt">
            <div className="tts">
              <p>
                <b>Food</b>
              </p>
              <input  id="cb" type="checkbox" />
            </div>
          </div>
          <div className="tt">
            <div className="tts">
              <p>
                <b>Evening snacks</b>
              </p>
              <input  id="cb" type="checkbox" />
            </div>
          </div>
          {/* <div className="tt">
            <div className="tts">
              <p>
                <b>Meeting room</b>
              </p>
              <input  id="cb" type="checkbox" />
            </div>
          </div> */}
          <div className="tt">
            <div className="tts">
              <p>
                <b>Guide</b>
              </p>
              <input  id="cb" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
            <a href="/sbs"style={{color:"white !important"}}>
          <button>
            Continue -{" "}
            <i
              class="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "15px", marginRight: "10px" }}
            ></i>
           290/night
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default Booking;
