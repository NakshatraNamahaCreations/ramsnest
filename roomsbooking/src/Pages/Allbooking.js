import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import Footer from "./Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [data, setdata] = React.useState([]);
  const [data1, setdata1] = React.useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose12 = () => setShow(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const cancle=()=>{
    alert("your booking canceled succesfully");
    window.location.assign("/allbooking");
  }
  return (
    <div>
      <div className="margin">
        <div className="allign flex">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
          <img
            src="https://static.thenounproject.com/png/88705-200.png"
            style={{ width: "25px", height: "25px", marginLeft: "20px" }}
          />
          <h4 style={{ marginLeft: "5px" }}>My Bookings</h4>
        </div>

        <div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="ongoing" {...a11yProps(0)} />
                <Tab label="Completed" {...a11yProps(1)} />
                <Tab label="Canceled" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Container House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "green",
                            background: "#19875417",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Paid
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className="mru">
                      <div className="cb">
                        <button onClick={() => setShow(true)}>Cancel Booking</button>
                      </div>
                      <div className="vt">
                        <a href="/viewticket">
                          <button>View Ticket</button>
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Tent House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "green",
                            background: "#19875417",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Paid
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className="mru">
                      <div className="cb">
                        <button onClick={() => setShow(true)}>Cancel Booking</button>
                      </div>
                      <div className="vt">
                        <a href="/viewticket">
                          <button>View Ticket</button>
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Tent House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "#0d6efd",
                            background: "#19875417",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Completed
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className=" cm">
                    <i class="fa-solid fa-square-check"></i> <p>Yeay, you have Completed</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Container House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "#0d6efd",
                            background: "#19875417",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Completed
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className=" cm">
                    <i  class="fa-solid fa-square-check"></i> <p>Yeay, you have Completed</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Tent House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "red",
                            background: "#dc354526",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Paid
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className=" cm" style={{background:"#dc35451a"}}>
                    <i class="fa-solid fa-circle-exclamation" style={{color:"red"}}></i> <p style={{color:"red"}}>Yeay, canceled this hotel booking </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    borderRadius: "30px",
                    marginTop: "20px",
                    border: "1px solid #e9ecefc2",
                  }}
                >
                  <Card.Body>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="col-3">
                        <img
                          src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                          width="80px"
                          height="80px"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div className="col-9">
                        <h6>Container House</h6>
                        <div className="">
                          <p>Kaggalipura Bangalore</p>
                        </div>
                        <h6
                          style={{
                            marginTop: "5px",
                            color: "red",
                            background: "#dc354526",
                            padding: "3px",
                            textAlign: "center",
                            borderRadius: "10px",
                            height: "20px",
                            width: "80px",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          Paid
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className=" cm" style={{background:"#dc35451a"}}>
                    <i class="fa-solid fa-circle-exclamation" style={{color:"red"}}></i> <p  style={{color:"red"}}>Yeay, canceled this hotel booking </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </TabPanel>
          </Box>
        </div>
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h5 style={{ color: "red" }}>
              {" "}
              <b>Cancel Booking</b>
            </h5>
          </div>
          <h6 style={{ textAlign: "center" }}>
            <b>Are you sure want to cancel your service booking ?</b>
          </h6>
          <p style={{ textAlign: "center" }}>
            Only 80% of the money you can refund from your payment according to
            our policy
          </p>

          <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
            <div className="rst">
              <button  onClick={handleClose12}>Cancel</button>
            </div>
            <div className="apy">
              <button onClick={handleClickOpen1}>Yes, Cancel Booking</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ borderRadius: "35px !important" }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="mdl">
            <div style={{display:"flex",justifyContent:"center"}}>
              <img
                src="./images/x-button.png"
                width="150px"
                height="150px"
              />
              </div>
              <h4 style={{ color: "deepskyblue" }}>Canceled</h4>
              <p>
                <b>You have Successfully canceled your order.80%funds will be returned to your account</b>
              </p>
              <button onClick={cancle}>OK</button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </div>
      <Footer />
    </div>
  );
}
