import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Confirmpayment() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
  return (
    <div className="margin">
      <div>
        <div className="row">
          <div className="col-1">
            <Link
              to="/sbs"
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
              <b>Payment</b>
            </h4>
          </div>
          {/* <div className="col-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4940/4940162.png"
              width="25px"
            />
          </div> */}
        </div>
      </div>
      <div className="flex seal">
        <div style={{ width: "50%" }} className="slimg">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph"
            width="100px"
          />
        </div>

        <div style={{ width: "100%" }}>
          <div className="justbt">
            <h4>Container House</h4>
            <p style={{ fontSize: "15px", color: "deepskyblue" }}>
              <i class="fa-solid fa-dollar-sign"></i>
              <b>29</b>
            </p>
          </div>
          <div className="justbt">
            <p>Bangalore</p>
            <p>night</p>
          </div>
          <div className="justbt">
            <p className="mb">
              {" "}
              <i
                class="fa-regular fa-star"
                style={{ marginRight: "8px", color: "gold" }}
              ></i>
              4.8 (4,378)
            </p>
            <i
              class="fa-regular fa-bookmark"
              style={{ fontSize: "21px", color: "deepskyblue" }}
              width="30px"
            ></i>
          </div>
        </div>
      </div>
      <div className="bibrd">
        <div className="bi">
          <p>Check in</p>
          <p>
            <b>Jan 16,2023</b>
          </p>
        </div>
        <div className="bi">
          <p>Check out</p>
          <p>
            <b>Jan 20,2023</b>
          </p>
        </div>
        <div className="bi">
          <p>Guest</p>
          <p>
            <b>3</b>
          </p>
        </div>
      </div>
      <div className="bibrd">
        <div className="bi">
          <p>5 Nights</p>
          <p>
            <b>
              <i class="fa-solid fa-indian-rupee-sign"></i>290.00
            </b>
          </p>
        </div>
        <div className="bi">
          <p>Taxes & Fees(10%)</p>
          <p>
            <b>
              <i class="fa-solid fa-indian-rupee-sign"></i>20.50
            </b>
          </p>
        </div>
        <div className="bi">
          <p>Total</p>
          <p>
            <b>
              <i class="fa-solid fa-indian-rupee-sign"></i>310.50
            </b>
          </p>
        </div>
      </div>
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
              <h4>.... .... ..00 4650 </h4>
            </div>
            <div className="rad">
              <a href="/addcard">
              <p style={{ color: "deepskyblue" }}>Change</p>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          <a href="/bookinginformation">
            <button  >Continue </button></a>
        
        </div>
      </div>
     
     
    </div>
  );
}

export default Confirmpayment;
