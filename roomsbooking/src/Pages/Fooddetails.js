import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";

function Fooddetails(props) {
  const [qty, setqty] = useState(1);

  const inc = () => {
    setqty(qty + 1);
  };
  const dec = () => {
    setqty(qty - 1);
  };
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
          {props.subscribe.foods.foodimage.map((i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"http://localhost:8080/food/" + i}
                alt="First slide"
                style={{ height: "285px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="margin">
        <div className="hc">
          <h4>
            <b>{props.subscribe.foods.foodname}</b>
          </h4>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <div>
          <h5 className="margintop">
            <b>Description</b>
          </h5>
          <p>{props.subscribe.foods.fooddesc}</p>
          <h5 className="margintop"></h5>
        </div>
        <h5 style={{ marginTop: "40px", textAlign: "center" }}>Price</h5>
        <div className="wh" style={{ marginLeft: "25%" }}>
          <div className="whs1" style={{ marginLeft: "35%" }}>
            <b>
              {" "}
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ marginTop: "3px",marginRight:"5px" }}
              ></i>
              {props.subscribe.foods.foodprice}
            </b>
            {/* <i
            class="fa-solid fa-circle-minus"
            onClick={dec}
            disabled={qty <= 1}
          ></i>
          <p style={{ marginTop: "-5px" }}> {qty} </p>
          <i class="fa-solid fa-circle-plus" onClick={inc}></i> */}
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          
            <button onClick={() => addtocart(props.subscribe.foods)}>Add to cart</button>
        
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
