import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal";

function Search() {
  const [colorchange, setcolorchange] = useState("");

  const [show, setShow] = useState(false);

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
        <div>
          <a href="/home">
            <img src="./images/back.png" width="25px" />
          </a>
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
          <img
            onClick={handleShow}
            src="https://cdn-icons-png.flaticon.com/128/8017/8017777.png"
            width="20px"
            height="20px"
            style={{
              position: "absolute",
              right: "41px",
              top: "70px",
              zIndex: "12",
            }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <OwlCarousel className="owl-theme">
            <div class="item" className="items" style={{ width: "125px" }}>
              <h6 style={{ textAlign: "center" }}>All Hotel</h6>
            </div>
            <div
              class="item"
              className="items  "
              style={{ marginLeft: "15px", width: "125px" }}
            >
              <h6 style={{ textAlign: "center" }}>Recommended</h6>
            </div>
            <div
              class="item"
              className="items  "
              style={{ marginLeft: "30px" }}
            >
              <h6 style={{ textAlign: "center" }}>Popular</h6>
            </div>
            <div
              class="item"
              className="items  "
              style={{ marginLeft: "15px" }}
            >
              <h6 style={{ textAlign: "center" }}>Trending</h6>
            </div>
          </OwlCarousel>
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
            {/* <div className="sortby">
            <p>Popular</p>
            <p>Most Recent</p>
            <p>Price High</p>
            <p>Price Low</p>
            <p>Popular</p>
            <p>Most Recent</p>
            <p>Price High</p>
            <p>Price Low</p>
          </div> */}
            <div style={{ marginTop: "20px" }}>
              <p>
                <b>Rating</b>
              </p>
              <div className="rating">
                <div className="flex" style={{ gap: "15px" }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    width="30px"
                    height="30px"
                  />
                  <p>All</p>
                </div>
                <div className="flex" style={{ gap: "15px" }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    width="30px"
                    height="30px"
                  />
                  <p>5</p>
                </div>
                <div className="flex" style={{ gap: "15px" }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    width="30px"
                    height="30px"
                  />
                  <p>4</p>
                </div>
                <div className="flex" style={{ gap: "15px" }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    width="30px"
                    height="30px"
                  />
                  <p>3</p>
                </div>
                <div className="flex" style={{ gap: "15px" }}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    width="30px"
                    height="30px"
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
        <div>
          <div className="justbt">
            <div>
              <h5>Recommended(12,326)</h5>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2258/2258853.png"
                width="25px"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5665/5665189.png"
                width="25px"
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <a href="/hoteldetails">
            <div className="flex seal">
              <div style={{ width: "50%" }} className="slimg">
                <img
                  src="https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                  width="100px"
                />
              </div>

              <div style={{ width: "100%" }}>
                <div className="justbt">
                  <h4>President Hotel</h4>
                  <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <b>35</b>
                  </p>
                </div>
                <div className="justbt">
                  <p>Paris,France</p>
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
          </a>
        </div>
        <div>
          <a href="/hoteldetails">
            <div className="flex seal">
              <div style={{ width: "50%" }} className="slimg">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph"
                  width="100px"
                />
              </div>

              <div style={{ width: "100%" }}>
                <div className="justbt">
                  <h4>Palms Casino</h4>
                  <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <b>29</b>
                  </p>
                </div>
                <div className="justbt">
                  <p>Paris,France</p>
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
          </a>
        </div>
        <div>
          <a href="/hoteldetails">
            <div className="flex seal">
              <div style={{ width: "50%" }} className="slimg">
                <img
                  src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph"
                  width="100px"
                />
              </div>

              <div style={{ width: "100%" }}>
                <div className="justbt">
                  <h4>Palazzo Versace</h4>
                  <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <b>37</b>
                  </p>
                </div>
                <div className="justbt">
                  <p>Paris,France</p>
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
          </a>
        </div>
        <div>
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h4>Bulgari Resort</h4>
                <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>25</b>
                </p>
              </div>
              <div className="justbt">
                <p>Paris,France</p>
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
        </div>
        <div>
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h4>Martinez Cannes</h4>
                <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>35</b>
                </p>
              </div>
              <div className="justbt">
                <p>Paris,France</p>
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
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
