import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBasketTotal } from "../../src/StoreReducer";

function Cart(props) {
  const basket = JSON.parse(sessionStorage.getItem("basket"));
  const [qty, setqty] = useState(1);

  return (
    <div>
      <div className="margin">
        <div className="allign flex">
          <Link
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>

          <h4 style={{ marginLeft: "25px" }}>Cart</h4>
          {console.log(props.basket)}
        </div>
        <div>
          {basket == null ? (
            <div className="emptyorder">
              <i class="fa-solid fa-bag-shopping"></i>
              <p> Cart is empty.</p>
              <a href="/home">order now</a>
            </div>
          ) : (
            <div>
              {" "}
              {props.basket?.map((foods) => (
                <div className="flex seal">
                  <div style={{ width: "50%" }} className="slimg">
                    <img
                      src={
                        "http://localhost:8080/food/" +
                        foods.product.foodimage[0]
                      }
                      width="100px"
                    />
                  </div>

                  <div style={{ width: "100%" }}>
                    <div className="justbt">
                      <h5>{foods.product.foodname}</h5>
                      <i
                        class="fa-solid fa-trash-can"
                        onClick={() =>
                          props.dispatch({
                            type: "deleteBasketItem",
                            item: foods,
                          })
                        }
                      ></i>
                    </div>
                    <div className="justbt">
                      <p style={{ fontSize: "15px" }}>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        <b>{foods.product.foodprice * foods.quantity}</b>
                      </p>
                    </div>
                    <div className="justbt">
                      <p className="mb">
                        <div className="whs"></div>

                        <div className="whs1">
                          <i
                            class="fa-solid fa-circle-minus"
                            onClick={() =>
                              props.dispatch({
                                type: "subquantity",
                                item: foods,
                              })
                            }
                          ></i>
                          <p style={{ marginTop: "-5px" }}>
                            {" "}
                            {foods.quantity}{" "}
                          </p>
                          <i
                            class="fa-solid fa-circle-plus"
                            onClick={() =>
                              props.dispatch({
                                type: "addquantity",
                                item: foods,
                              })
                            }
                          ></i>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    
      <div>
        <div className="ftbook">
          <div className="cont">
            <a href="/bookinginformation">
            <button>Continue-  <i class="fa-solid fa-indian-rupee-sign"></i>{getBasketTotal(props.basket)}</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Cart);
