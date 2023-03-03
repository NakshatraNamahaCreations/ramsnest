import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const label = { inputProps: { "aria-label": "Switch demo" } };
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      style={{ width:"100%",border:"none" ,background:"white"}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Profile() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const logout = () => {
    alert("Logout");
    window.location.assign("/");
  };

  return (
    <div className="marginbtm">
      <div>
        <div className="margin">
          <div className="profile">
            <h3>
              <b>Profile</b>
            </h3>
          </div>
          <div className="center">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70BCbCMem6iqUraALv89e27HfAriNKHce4w&usqp=CAU"
                style={{
                  width: "90px",
                  borderRadius: "50%",
                  height: "90px",
                }}
              />

              <div style={{ marginTop: "-24px", marginLeft: "50px" }}>
                <i
                  class=" fa-solid fa-pen"
                  style={{
                    color: "white",
                    background: "#0484b9",
                    padding: "4px",
                    fontSize: "10px",
                  }}
                ></i>
              </div>
            </div>

            <h3>
              <b>Andrew Ainsley</b>
            </h3>

            <p>
              <b>andrew_ainsley@gmail.com</b>
            </p>
          </div>
          <div>
          
          </div>
         
        

          <div>
            <div className="" style={{ marginTop: "30px", color: "black" }}>
              <Link to="/editprofile" className="link">
                <div className="line">
                  <div className="line">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/456/456283.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Edit Profile</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/allbooking" className="link">
                <div className="line">
                  <div className="line">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/482/482541.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Payment</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="line">
              <div className="line">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png"
                  width="20px"
                  style={{ marginBottom: "15px" }}
                />
                <p>Notification</p>
              </div>
              <div>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            {/* <div>
              <Link to="/language" className="link">
                <div className="line">
                  <div className="line">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6133/6133973.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Language</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div> */}
            <div>
              <Link to="/security" className="link">
                <div className="line">
                  <div className="line">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2311/2311992.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Security</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/helpcenter" className="link">
                <div className="line">
                  <div className="line">
                    {/* <i className="bi bi-archive"></i> */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9393/9393667.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Help Center</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <div className="line">
                <div className="line">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9458/9458323.png"
                    width="20px"
                    style={{ marginBottom: "15px" }}
                  />
                  <p onClick={() => setShow1(true)}>Invite Friends</p>
                </div>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="flex">
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                style={{
                  fontSize: "20px",
                  color: "red",
                  marginTop: "5px",
                  marginLeft: "6px",
                }}
              ></i>
              <p
                style={{
                  padding: "1px",
                  fontSize: "18px",
                  marginLeft: "18px",
                  color: "red",
                }}
                onClick={handleShow}
              >
                Logout
              </p>

              <Modal
                show={show1}
                onHide={() => setShow1(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Body>
                  <div className="margin">
                    <div>
                      <h4 style={{ textAlign: "center", marginBottom: "60px" }}>
                        <b>Invite to Services</b>
                      </h4>
                    </div>
                    <div className="spaceend">
                      <div className="ivt">
                        {" "}
                        <i class="fa-regular fa-paste"></i>
                        <p>Copy Link</p>{" "}
                      </div>
                      <div className="ivt">
                        {" "}
                        <i class="fa-solid fa-envelope"></i>{" "}
                        <p>Invite by mail</p>
                      </div>
                      <div className="ivt">
                        <i class="fa-solid fa-user"></i>
                        <p>Invite Contacts</p>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header style={{ justifyContent: "center" }}>
                  <Modal.Title style={{ color: "red", textAlign: "center" }}>
                    Logout
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>
                  Are you sure want to log out ?
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancle
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      background: "black",
                      color: "white",
                      border: "none",
                    }}
                    onClick={logout}
                  >
                    Yes Logout
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
