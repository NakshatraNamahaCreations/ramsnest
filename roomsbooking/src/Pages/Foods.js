import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Foods() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: "Chicken",
    },
    {
      id: 1,
      name: "Veg palav",
    },
    {
      id: 2,
      name: "Dosa",
    },
    {
      id: 3,
      name: "Full meals",
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

  const food = [
    {
      id: 1,
      name: "Veg palav",
      rating: "4.8",
      price: "35",
      image:
        "https://img.freepik.com/free-photo/veg-biryani-veg-pulav-served-round-brass-bowl-selective-focus_466689-75026.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=ais",
    },
    {
      id: 2,
      name: "Panner",
      rating: "4.8",
      price: "25",
      image:
        "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph",
    },
    {
      id: 3,
      name: "Dosa",
      rating: "4.8",
      price: "28",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCwKUFoJqKgkofeKAGPAShYbm7wHkm0E0Iw&usqp=CAU",
    },
    {
      id: 4,
      name: "Onion pakoda",
      rating: "4.8",
      price: "57",
      image:
        "https://img.freepik.com/free-photo/moong-dal-vada-also-mungode-pakoda-pakode-pakore-moong-wada-pakora-bhajiya-tea-time-snack_466689-90694.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais",
    },
  ];
  console.log(food);
  return (
    <div style={{ marginBottom: "130px" }}>
      <div className="margin">
        <div className="allign flex">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>

          <h4 style={{ marginLeft: "25px" }}>Foods</h4>
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
        </div>

        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://img.freepik.com/free-photo/veg-biryani-veg-pulav-served-round-brass-bowl-selective-focus_466689-75026.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=ais"
                width="100px"
              />{" "}
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Veg Biryani</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>52</b>
              </p>
            </div>
            <div className="justbt">
              <p>Veg Palav</p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>

        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                width="100px"
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Panner</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>25</b>
              </p>
            </div>
            <div className="justbt">
              <p>Non Veg</p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>

        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCwKUFoJqKgkofeKAGPAShYbm7wHkm0E0Iw&usqp=CAU          "
                width="100px"
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Dosa</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>12</b>
              </p>
            </div>
            <div className="justbt">
              <p>Veg </p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>

        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://img.freepik.com/free-photo/moong-dal-vada-also-mungode-pakoda-pakode-pakore-moong-wada-pakora-bhajiya-tea-time-snack_466689-90694.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
                width="100px"
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Onion pakoda</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>35</b>
              </p>
            </div>
            <div className="justbt">
              <p>Veg </p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>
        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCwKUFoJqKgkofeKAGPAShYbm7wHkm0E0Iw&usqp=CAU          "
                width="100px"
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Dosa</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>12</b>
              </p>
            </div>
            <div className="justbt">
              <p>Veg </p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>

        <div className="flex seal" style={{ marginTop: "20px" }}>
          <div style={{ width: "50%" }} className="slimg">
            <a href="/fooddetails">
              <img
                src="https://img.freepik.com/free-photo/moong-dal-vada-also-mungode-pakoda-pakode-pakore-moong-wada-pakora-bhajiya-tea-time-snack_466689-90694.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
                width="100px"
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Onion pakoda</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>35</b>
              </p>
            </div>
            <div className="justbt">
              <p>Veg </p>
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
              <button className="addcart">ADD</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <Link to="/cart">
          <span>1</span>
          <img
            src="https://img.freepik.com/free-icon/service_318-928949.jpg?size=338&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=sph"
            width="25px"
          />
        </Link>
      </div>
    </div>
  );
}

export default Foods;
