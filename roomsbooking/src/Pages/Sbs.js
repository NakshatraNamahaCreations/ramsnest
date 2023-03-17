import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";
import moment from "moment";
import axios from "axios";

function Selectbookingslot() {
  const location=useLocation();
  const {data}=location.state;
  console.log(data);
  const [qty, setqty] = useState(1);
  const [checkin, setcheckin] = useState(new Date());
  const [checkout, setcheckout] = useState(new Date());
  const [promocode, setpromocode] = useState("");
  const [colorchange, setcolorchange] = useState("");
  const [loading, setLoading] = useState(false);
  const user=JSON.parse(sessionStorage.getItem("user"));
  const inc = () => {
    setqty(qty + 1);
  };
  const dec = () => {
    setqty(qty - 1);
  };

  const confirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        url: "/addroomorder",
        method: "post",
        baseURL: "https://api.howdzat.com/api",
        headers: {
          "content-type": "application/json",
        },
        data: {
          customerId: user.id,
          customername: user.name,
          phonenumber: user.phonenumber,
          orderdatetime: moment().format("DD/MM/YYYY hh:mm A"),
          roomname:data.roomname,
          roomprice:data.roomprice,
          checkin:checkin,
          checkout:checkout,
          roomno:data.roomno,
          guest:qty,
          paymentmethod: "online",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Orders Placed Successfully");
        window.location.assign("/home");
        setLoading(false);
        return res;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div style={{marginTop:"100%",marginBottom:"50%",textAlign:"center"}}>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    )
  }
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
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
          <p style={{ marginTop: "-5px" }} > {qty} </p>
          <i class="fa-solid fa-circle-plus" onClick={inc}></i>
        </div>
      </div>
     
      
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
        
            <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              Continue -
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "15px", marginRight: "10px" }}
              ></i>
           {data.roomprice}
            </button>
         
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content imp">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.D-glNbmdqIOVsA5vEUmPFwHaE8&pid=Api&P=0"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Pay Online </h4>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://t3.ftcdn.net/jpg/05/64/33/62/240_F_564336244_Yx3bkxrGvwpgrgDAdWz6hGgApKXBTePD.jpg"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Cash</h4>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div>
                <div className="ftbook">
                  <div className="cont">
                    <button onClick={confirm}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selectbookingslot;
