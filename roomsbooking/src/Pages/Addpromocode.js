import React from "react";
import { Link } from "react-router-dom";

function Promocode() {
  return (
    <div>
      <div className="margin">
        <div className="row">
          <div className="col-1">
            <Link to="/sbs" style={{ textDecoration: "none", color: "black" }}>
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "20px", marginTop: "5px" }}
              ></i>{" "}
            </Link>
          </div>
          <div className="col-9">
            <h4 style={{ marginLeft: "10px" }}>
              <b>Apply Coupon</b>
            </h4>
          </div>
        </div>
        <div className="ac">
          <div className="col-1 cl1"></div>
          <div className="col-11 cl11">
            <div className="aplycoup">
              <div>
                <p>
                  <b>AXBYXJ50</b>
                </p>
                <p style={{ color: "#0d6efdb8" }}>
                  <b>Save 50%</b>
                </p>
              </div>
              <div style={{ color: "#0d6efdb8" }}>
                {" "}
                <b>Apply</b>
              </div>
            </div>
            <hr></hr>
            <p>
              Lorem hhjsdc sdhsudvsdv sdvbshdvbsdv jbdcvsdbv dcbsadhcv xchxzbv
              nbxcb= xcbxhc gcbzxhcbzhvczn cxVC SHCVKCB
            </p>
          </div>
        </div>
        <div className="ac">
          <div className="col-1 cl1"></div>
          <div className="col-11 cl11">
            <div className="aplycoup">
              <div>
                <p>
                  <b>AXBYXJ50</b>
                </p>
                <p style={{ color: "#0d6efdb8" }}>
                  <b>Save 50%</b>
                </p>
              </div>
              <div style={{ color: "#0d6efdb8" }}>
                {" "}
                <b>Apply</b>
              </div>
            </div>
            <hr></hr>
            <p>
              Lorem hhjsdc sdhsudvsdv sdvbshdvbsdv jbdcvsdbv dcbsadhcv xchxzbv
              nbxcb= xcbxhc gcbzxhcbzhvczn cxVC SHCVKCB 
            </p>
          </div>
        </div>
        <div className="ac">
          <div className="col-1 cl2"></div>
          <div className="col-11 cl11">
            <div className="aplycoup">
              <div>
                <p>
                  <b>AXBYXJ50</b>
                </p>
                <p style={{ color: "#0d6efdb8" }}>
                  <b>Save 50%</b>
                </p>
              </div>
              <div style={{ color: "#0d6efdb8" }}>
                {" "}
                <b>Apply</b>
              </div>
            </div>
            <hr></hr>
            <p>
              Lorem hhjsdc sdhsudvsdv sdvbshdvbsdv jbdcvsdbv dcbsadhcv xchxzbv
              nbxcb= xcbxhc gcbzxhcbzhvczn cxVC SHCVKCB
            </p>
          </div>
        </div>
      </div>
      <div className="ftbook">
        <div className="cont">
          <a href="/sbs" style={{ color: "white !important" }}>
            <button>Continue</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Promocode;
