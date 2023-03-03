import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";

function Selectbookingslot() {
  const [qty, setqty] = useState(1);
  const [checkin, setcheckin] = useState(new Date());
  const [checkout, setcheckout] = useState(new Date());
  const [promocode, setpromocode] = useState("");
  const [colorchange, setcolorchange] = useState("");
  const inc = () => {
    setqty(qty + 1);
  };
  const dec = () => {
    setqty(qty - 1);
  };
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link to="/book" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-9">
          <h4 style={{ marginLeft: "10px" }}>
            <b>Select Booking Slot</b>
          </h4>
        </div>
      </div>
      <div style={{ marginTop: "25px" }}>{/* <h4>Select Date</h4> */}</div>
      {/* <div
        style={{
          display: "block",
          width: "fit-content",
        }}
      >
        <DatePicker
          className="red"
          style={{ width: "325px", height: "38px" }}
          format="DD/MM/YYYY"
          type="input-icon"
          placeholder="--/--/---"
          value={value}
          onChange={setValue}
        />
      </div> */}
      <div className="justbt margintop">
        <div
          style={{
            display: "block",
            width: "fit-content",
          }}
        >
          <h5>Check in</h5>
          <DatePicker
            value={checkin}
            className="black"
            style={{ width: "150px", height: "38px" }}
            format="DD/MM/YYYY"
            type="input-icon"
            placeholder="--/--/---"
          />
        </div>
        <div
          style={{
            display: "block",
            width: "fit-content",
          }}
        >
          <h5>Check out</h5>
          <DatePicker
            value={checkout}
            className="black"
            style={{ width: "150px", height: "38px" }}
            format="DD/MM/YYYY"
            type="input-icon"
            placeholder="--/--/---"
          />
        </div>
      </div>
      <h5 style={{ marginTop: "40px" }}>Guest</h5>
      <div className="wh">
        <div className="whs"></div>

        <div className="whs1">
          <i
            class="fa-solid fa-circle-minus"
            onClick={dec}
            disabled={qty <= 1}
          ></i>
          <p style={{ marginTop: "-5px" }}> {qty} </p>
          <i class="fa-solid fa-circle-plus" onClick={inc}></i>
        </div>
      </div>
      {/* <h4 style={{ marginTop: "60px" }}>Choose Start Time</h4> */}
      {/* <div className="cst">
        <div
          onClick={() => {
            sessionStorage.setItem("timeslot", "slot1");
            setcolorchange("slot1");
          }}
          style={{
            background: ` ${colorchange === "slot1" ? "black" : "white"}`,
            borderRadius: "15px",height:"32px",
            color: ` ${colorchange === "slot1" ? "white" : "black"}`,
          }}
        >
          <h6>09:00 AM</h6>
        </div>
        <div
          onClick={() => {
            sessionStorage.setItem("timeslot", "slot2");
            setcolorchange("slot2");
          }}
          style={{
            background: ` ${colorchange === "slot2" ? "black" : "white"}`,
            borderRadius: "15px",height:"32px",
            color: ` ${colorchange === "slot2" ? "white" : "black"}`,
          }}
        >
          <h6>10:00 AM</h6>
        </div>
        <div
          onClick={() => {
            sessionStorage.setItem("timeslot", "slot3");
            setcolorchange("slot3");
          }}
          style={{
            background: ` ${colorchange === "slot3" ? "black" : "white"}`,
            borderRadius: "15px",height:"32px",
            color: ` ${colorchange === "slot3" ? "white" : "black"}`,
          }}
        >
          <h6>11:00 AM</h6>
        </div>
        <div
          onClick={() => {
            sessionStorage.setItem("timeslot", "slot4");
            setcolorchange("slot4");
          }}
          style={{
            background: ` ${colorchange === "slot4" ? "black" : "white"}`,
            borderRadius: "15px",height:"32px",
            color: ` ${colorchange === "slot4" ? "white" : "black"}`,
          }}
        >
          <h6>12:00 PM</h6>
        </div>
      </div> */}
      <div style={{ marginTop: "60px" }}>
        <h5>Promo Code</h5>
        <div className="flex">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter Promocode"
              onChange={(e) => setpromocode(e.target.value)}
              style={{
                width: "100%",
                padding: "7px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-2">
            <a href="/addpromocode">
              <i
                class="fa-solid fa-circle-plus"
                style={{
                  marginLeft: "15px",
                  marginTop: "5px",
                  fontSize: "25px",
                }}
              ></i>
            </a>
          </div>
        </div>
        {promocode === "" ? (
          <></>
        ) : (
          <>
            <button
              style={{
                marginTop: "10px",
                background: "black",
                border: "none",
                color: "white",
              }}
            >
              Apply
            </button>
          </>
        )}
      </div>

      <div className="ftbook">
        <div className="cont">
          <a href="/confirmpayment" style={{ color: "white !important" }}>
            <button>
              Continue -
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "15px", marginRight: "10px" }}
              ></i>
              290
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Selectbookingslot;
