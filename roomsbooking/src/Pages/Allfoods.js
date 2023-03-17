import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";

function Foods(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [foods, setfoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getallfoods();
  }, []);

  const getallfoods = async () => {
    let res = await axios.get("https://api.howdzat.com/api/getallfood");
    if ((res.status = 200)) {
      setLoading(false);
      setfoods(res.data?.foods);
    }
  };

  if (loading) {
    return (
      <div
        style={{ marginTop: "100%", marginBottom: "50%", textAlign: "center" }}
      >
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    );
  } else {
    <p>No data found...!</p>;
  }
  //add to cart
  const addtocart = (e) => {
    props.dispatch({
      type: "addBasketItem",
      item: { product: e, quantity: 1 },
    });
    alert("Food is added to cart");
  };
  const allfoods = () => {
    window.location.assign("/allfoods");
  };
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

  return (
    <div style={{ marginBottom: "130px" }}>
      <div className="margin">
        <div className="allign flex">
          <Link
            to="/foodcategory"
            style={{ textDecoration: "none", color: "black" }}
          >
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

        {foods === 0 ? (
          <div className="nodata">
            <img src="./images/smartphone.png" width="40px" />
            <p>
              <b>No data found ...!</b>
            </p>

            <p onClick={allfoods} className="vaff">
              View all foods
            </p>
          </div>
        ) : (
          <div>
            {" "}
            {foods?.map((data) => (
              <div className="flex seal" style={{ marginTop: "20px" }}>
                <div style={{ width: "50%" }} className="slimg">
                  <Link to="/allfooddetails" state={{ data: data }}>
                    <img
                      src={"https://api.howdzat.com/food/" + data.foodimage[0]}
                      width="100px"
                    />{" "}
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="justbt">
                    <h5>{data.foodname}</h5>
                    <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                      <i class="fa-solid fa-dollar-sign"></i>
                      <b>{data.foodprice}</b>
                    </p>
                  </div>
                  <div className="justbt">
                    <p>{data.category}</p>
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
                    <button className="addcart" onClick={() => addtocart(data)}>
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart">
        <Link to="/cart">
          <span>{props.basket.length}</span>
          <img
            src="https://img.freepik.com/free-icon/service_318-928949.jpg?size=338&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=sph"
            width="25px"
          />
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    subscribe: state.Subscribe,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Foods);
