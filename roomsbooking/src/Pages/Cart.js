import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  
  const [qty, setqty] = useState(1);
  const inc = () => {
    setqty(qty + 1);
  };
  const dec = () => {
    setqty(qty - 1);
  };

  return (
    <div>
      <div className="margin">
        <div className="allign flex">
          <Link to="/foods" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>

          <h4 style={{ marginLeft: "25px" }}>Cart</h4>
        </div>
        <div>
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h5>Tent House</h5>
                <i class="fa-solid fa-trash-can"></i>
              </div>
              <div className="justbt">
                <p style={{ fontSize: "15px" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>29</b>
                </p>
              </div>
              <div className="justbt">
                <p className="mb">
                  <div className="whs"></div>

                  <div className="whs1">
                    <i
                      class="fa-solid fa-circle-minus"
                      onClick={dec}
                      disabled={qty <= 1}
                    ></i>
                    <p style={{ marginTop: "-5px" }}> {qty} </p>
                    <i class="fa-solid fa-circle-plus" onClick={inc}></i>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ftbook">
          <div className="cont">
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
