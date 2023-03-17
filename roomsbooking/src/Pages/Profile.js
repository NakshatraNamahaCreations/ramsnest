import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const label = { inputProps: { "aria-label": "Switch demo" } };
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      style={{ width: "100%", border: "none", background: "white" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Profile() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [image, setimage] = useState();

  const formdata = new FormData();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const logout = () => {
    alert("Logout");
    window.location.assign("/");
    sessionStorage.removeItem("user");
  };

  const addimage = async (e) => {
    e.preventDefault();
    formdata.append("profileimage", image);

    axios({
      method: "post",
      url: `https://api.howdzat.com/api/addimage/${user.id}`,
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        window.location.reload();
        alert("Updated successfully");
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
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
            {user.profileimage == "" ? (
              <div>
                {" "}
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
                    onClick={handleShow2}
                  ></i>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src={"https://api.howdzat.com/userimages/" +user.profileimage}
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
                    onClick={handleShow2}
                  ></i>
                </div>
              </div>
            )}

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Select profile photo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setimage(e.target.files[0])}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                  Close
                </Button>
                <Button variant="primary" onClick={addimage}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
            <h3>
              <b>{user.name}</b>
            </h3>

            <p>
              <b>{user.email}</b>
            </p>
          </div>
          <div></div>

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

            <div>
              <Link to="/allbooking" className="link">
                <div className="line">
                  <div className="line">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2311/2311992.png"
                      width="20px"
                      style={{ marginBottom: "15px" }}
                    />
                    <p>Bookings</p>
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
