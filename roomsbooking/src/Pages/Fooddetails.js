import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Fooddetails() {
  const [index, setIndex] = useState(0);
  const [qty, setqty] = useState(1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const inc = () => {
    setqty(qty + 1);
  };
  const dec = () => {
    setqty(qty - 1);
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
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
              alt="First slide"
              style={{ height: "285px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
              alt="Second slide"
              style={{ height: "285px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
              alt="Third slide"
              style={{ height: "285px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="margin">
        <div className="hc">
          <h4>
            <b>Veg Palav</b>
          </h4>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <div>
          <h5 className="margintop">
            <b>Description</b>
          </h5>
          <p>
            To book HiCare Home Food Services follow these steps: Fill your pin
            code in the prompt on the website
          </p>
        </div>
        <h5 style={{ marginTop: "40px",textAlign:"center" }}>Quantity</h5>
      <div className="wh" style={{marginLeft:"25%"}}>
        <div className="whs"></div>

        <div className="whs1" style={{marginLeft:"20%"}}>
          <i
            class="fa-solid fa-circle-minus"
            onClick={dec}
            disabled={qty <= 1}
          ></i>
          <p style={{ marginTop: "-5px" }}> {qty} </p>
          <i class="fa-solid fa-circle-plus" onClick={inc}></i>
        </div>
      </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          <a href="/bookinginformation" style={{ color: "white !important" }}>
            <button>
              Order
             
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;
