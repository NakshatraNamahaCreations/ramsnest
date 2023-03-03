import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Addcard() {
  const [name, setname] = useState("Daniel");
  const [number, setnumber] = useState("1200-2020-4556-4521");
  const [exp, setexp] = useState("10/5");
  const [cvv, setcvv] = useState("123");
  return (
    <div>
      <div className="margin">
        <div className="row">
          <div className="col-1">
            <Link
              to="/bookinginformation"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "20px", marginTop: "5px" }}
              ></i>{" "}
            </Link>
          </div>
          <div className="col-9">
            <h4 style={{ marginLeft: "10px" }}>
              <b>Add New Card</b>
            </h4>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://img.freepik.com/free-photo/blue-curve-abstract-background-with-design-space_53876-104767.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=ais" +
              ")",
            width: "100%",
            height: "170px",
            borderRadius: "25px",
          }}
        >
          <div>
            <div
              style={{
                marginRight: "30px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <p>
                <b>Card</b>
              </p>
            </div>
            <img src="" width="25px" />
          </div>
          <div style={{ padding: "30px" }}>
            <div className="justbt">
              <div>
                <p>{name}</p>
                <p>{number}</p>
              </div>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.D-glNbmdqIOVsA5vEUmPFwHaE8&pid=Api&P=0"
                width="35px"
                height="25px"
              />
            </div>

            <div className="justbt">
              <p>{exp}</p>
              <p>{cvv}</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginTop: "30px" }}>
            <div className="crd">
              <input
                placeholder="Daniel Austun"
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <div className="crd">
              <input
                placeholder="6362 2511 5262 6633"
                type="text"
                onChange={(e) => setnumber(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="cd">
            <input
              placeholder="30/7"
              type="text"
              onChange={(e) => setexp(e.target.value)}
            />
            <input
              placeholder="250"
              type="text"
              onChange={(e) => setcvv(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          <a href="/confirmpayment" style={{ color: "white !important" }}>
            <button>Add</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Addcard;
