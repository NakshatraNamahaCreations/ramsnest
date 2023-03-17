import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function Bookinginformation() {
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
      <div className="row">
        <div className="col-1">
          <Link to="/confirmpayment" style={{ textDecoration: "none", color: "black" }}>
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
        
      </div>
      <div className="justbt">
        <p>Payment Methods </p>
        <a href="/addcard">
        <p style={{color:"deepskyblue"}}>Add New Card </p></a>
      </div>
      <div className="bibrd">
        <div className="bi">
          <div className="flex1" style={{ marginTop: "0" }}>
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174861.png"
                width="25px"
              />
            </div>
            <div className="">
              <h4>Paypal</h4>
            </div>
            <div className="rad">
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
      <div className="bibrd">
        <div className="bi">
          <div className="flex1" style={{ marginTop: "0" }}>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                width="25px"
              />
            </div>
            <div>
              {" "}
              <h4>Google Pay</h4>
            </div>
            <div className="rad">
              {" "}
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
      <div className="bibrd">
        <div className="bi">
          <div className="flex1" style={{ marginTop: "0" }}>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/15/15476.png"
                width="25px"
              />
            </div>
            <div>
              <h4>Apple Pay</h4>
            </div>
            <div className="rad">
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 style={{ marginTop: "25px" }}>Pay with Debit/Credit Card</h6>
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
              <h4>.... .... ..25 4650 </h4>
            </div>
            <div className="rad">
              <input type="radio" />
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
              <h4>Pay later </h4>
            </div>
            <div className="rad">
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
    
      <div className="ftbook">
        <div className="cont">
         
            <button onClick={handleClickOpen}>
              Confirm Payment 
             
            </button>
        
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ borderRadius: "35px !important" }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="mdl">
              <div style={{display:"flex",justifyContent:"center"}}>
              <img
                src="./images/checked.png"
                width="150px"
                height="150px"
              />
              </div>
              <h4>Payment Successful!</h4>
              <p>
                <b>Successfully made payment and hotel booking</b>
              </p>
              <a href="/allbooking">
                <button>View Ticket</button>
              </a>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Bookinginformation;
