import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";

function Fooddetails(props) {
  const location = useLocation();
  const { data } = location.state;
  //add to cart
  const addtocart = (e) => {
    props.dispatch({
      type: "addBasketItem",
      item: { product: e, quantity: 1 },
    });
    alert("Food is added to cart");
  };
  return (
    <div>
      <div>
        <a href="/home">
          <i
            class="fa-solid fa-arrow-left"
            style={{
              fontSize: "20px",
              position: "absolute",
              zIndex: "99",
              marginTop: "65px",
              marginLeft: "15px",
            }}
          ></i>
        </a>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://api.howdzat.com/food/" + data.foodimage[0]}
              alt="First slide"
              style={{ height: "285px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="margin">
        <div className="hc">
          <h4>
            <b>{data.foodname}</b>
          </h4>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <div>
          <h5 className="margintop">
            <b>Description</b>
          </h5>
          <p>{data.fooddesc}</p>
        </div>
        <h5 style={{ marginTop: "40px", textAlign: "center" }}>Quantity</h5>
        <div className="wh" style={{ marginLeft: "25%" }}>
          <div className="whs"></div>

          <div className="whs1" style={{ marginLeft: "20%" }}>
            <i
              class="fa-solid fa-circle-minus"
              onClick={() =>
                props.dispatch({
                  type: "subquantity",
                  item: data,
                })
              }
            ></i>
            <p style={{ marginTop: "-5px" }}> {data.quantity} </p>
            <i
              class="fa-solid fa-circle-plus"
              onClick={() =>
                props.dispatch({
                  type: "addquantity",
                  item: data,
                })
              }
            ></i>
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          <button onClick={() => addtocart(data)}>Add to cart</button>
        </div>
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

export default connect(mapStateToProps)(Fooddetails);
