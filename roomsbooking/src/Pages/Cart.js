import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBasketTotal } from "../../src/StoreReducer";
import axios from "axios";
import moment from "moment";

function Cart(props) {
  const basket = JSON.parse(sessionStorage.getItem("basket"));
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const confirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        url: "/customer/addorder",
        method: "post",
        baseURL: "https://api.howdzat.com/api",
        headers: {
          "content-type": "application/json",
        },
        data: {
          customerId: user.id,
          customername: user.name,
          phonenumber: user.phonenumber,
          orderdatetime: moment().format("DD/MM/YYYY hh:mm A"),
          total: getBasketTotal(props.basket),
          food: props.basket,
          paymentmethod: "COD",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
       
        props.dispatch({ type: "emptyBasket" });
        alert("Orders Placed Successfully");
        window.location.assign("/home");
        setLoading(false);
        return res;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div style={{marginTop:"100%",marginBottom:"50%",textAlign:"center"}}>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    )
  }
  return (
    <div>
      <div>
        <div className="margin">
          <div className="allign flex">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
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
                          "https://api.howdzat.com/food/" +
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
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                Continue- <i class="fa-solid fa-indian-rupee-sign"></i>
                {getBasketTotal(props.basket)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content imp">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.D-glNbmdqIOVsA5vEUmPFwHaE8&pid=Api&P=0"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Pay Online </h4>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://t3.ftcdn.net/jpg/05/64/33/62/240_F_564336244_Yx3bkxrGvwpgrgDAdWz6hGgApKXBTePD.jpg"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Cash</h4>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div>
                <div className="ftbook">
                  <div className="cont">
                    <button onClick={confirm}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
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
