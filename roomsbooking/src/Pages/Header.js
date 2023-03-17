import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Modal from "react-bootstrap/Modal";

function Header() {
  const [colorchange, setcolorchange] = useState("");
  const [show, setShow] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: " Presindent Hotel",
    },
    {
      id: 1,
      name: "Palms Casino",
    },
    {
      id: 2,
      name: "Palazzo Versace",
    },
    {
      id: 3,
      name: "Resort",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    // window.location.assign("/search");
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <Link to="/search">
          <span style={{ display: "block", textAlign: "left", zIndex: "99" }}>
            {" "}
            {item.name}
          </span>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="margin">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <div className="flex">
            <Link to="/profile">
              <img
                src="./images/logo.png"
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  height: "43px",
                }}
              />
            </Link>
            <div style={{ marginLeft: "5px" }}>{/* <h2>Ramsnest</h2> */}</div>
          </div>
          <div>
            <a href="/notification">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png"
                width="25px"
                style={{ marginRight: "20px", height: "25px" }}
              />
            </a>
            <a href="/mybookmark">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
                width="25px"
                style={{ marginRight: "20px", height: "23px" }}
              />
            </a>
          </div>
        </div>
        <div className="flex" style={{ marginTop: "20px" }}>
          <h2>Hello, {user.name}</h2>{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/9437/9437514.png"
            style={{
              width: "25px",
              height: "25px",
              marginLeft: "15px",
              marginTop: "5px",
            }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
          />
          {/* <img
            onClick={handleShow}
            src="https://cdn-icons-png.flaticon.com/128/8017/8017777.png"
            width="20px"
            height="20px"
            style={{
              position: "absolute",
              right: "41px",
              top: "142px",
              zIndex: "12",
            }}
          /> */}
        </div>
      </div>
      
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h5>
              {" "}
              <b>Sort & Filter</b>
            </h5>
          </div>
          <p>
            <b>Sort by</b>
          </p>
          <div className="cst">
            <div
              onClick={() => {
                sessionStorage.setItem("timeslot", "slot1");
                setcolorchange("slot1");
              }}
              style={{
                background: ` ${colorchange === "slot1" ? "black" : "white"}`,
                borderRadius: "15px",
                height: "32px",
                color: ` ${colorchange === "slot1" ? "white" : "black"}`,
              }}
            >
              <h6>Popular</h6>
            </div>
            <div
              onClick={() => {
                sessionStorage.setItem("timeslot", "slot2");
                setcolorchange("slot2");
              }}
              style={{
                background: ` ${colorchange === "slot2" ? "black" : "white"}`,
                borderRadius: "15px",
                height: "32px",
                color: ` ${colorchange === "slot2" ? "white" : "black"}`,
              }}
            >
              <h6>Recent</h6>
            </div>
            <div
              onClick={() => {
                sessionStorage.setItem("timeslot", "slot3");
                setcolorchange("slot3");
              }}
              style={{
                background: ` ${colorchange === "slot3" ? "black" : "white"}`,
                borderRadius: "15px",
                height: "32px",
                color: ` ${colorchange === "slot3" ? "white" : "black"}`,
              }}
            >
              <h6>Price High</h6>
            </div>
            <div
              onClick={() => {
                sessionStorage.setItem("timeslot", "slot4");
                setcolorchange("slot4");
              }}
              style={{
                background: ` ${colorchange === "slot4" ? "black" : "white"}`,
                borderRadius: "15px",
                height: "32px",
                color: ` ${colorchange === "slot4" ? "white" : "black"}`,
              }}
            >
              <h6>Price High</h6>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              <b>Rating</b>
            </p>
            <div className="rating">
              <div className="flex" style={{ gap: "15px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  width="20px"
                  height="20px"
                />
                <p>All</p>
              </div>
              <div className="flex" style={{ gap: "15px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  width="20px"
                  height="20px"
                />
                <p>5</p>
              </div>
              <div className="flex" style={{ gap: "15px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  width="20px"
                  height="20px"
                />
                <p>4</p>
              </div>
              <div className="flex" style={{ gap: "15px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  width="20px"
                  height="20px"
                />
                <p>3</p>
              </div>
              <div className="flex" style={{ gap: "15px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  width="20px"
                  height="20px"
                />
                <p>2</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>
              <b>Facilities</b>
            </p>
            <div className="flex" style={{ gap: "15px" }}>
              <div className="flex">
                <input type="checkbox" id="cb" />
                <p style={{ marginLeft: "5px" }}>Wi Fi</p>
              </div>
              <div className="flex">
                <input type="checkbox" id="cb" />
                <p style={{ marginLeft: "5px" }}>Swimming pool</p>
              </div>
              <div className="flex">
                <input type="checkbox" id="cb" />
                <p style={{ marginLeft: "5px" }}>Parking</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            {/* <p>
              <b>Price Range Per Night</b>
            </p> */}
          </div>
          <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
            <div className="rst">
              <button>Reset</button>
            </div>
            <div className="apy">
              <button>Apply Filter</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
