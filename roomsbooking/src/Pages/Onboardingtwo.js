import React from "react";

function Onboardingtwo() {
  return (
    <div>
      <div>
        <img src="./images/img_rectangle1_420x428.png" width="100%" height="330px" />
      </div>
      <div style={{ textAlign: "center" }}>
        <span className="dot"  ></span>
        <span className="dot" style={{
            backgroundColor: "#3479e3",
            borderRadius: "10px",
            width: "25px",
          }}></span>
        <span
          className="dot"
         
        ></span>
      </div>
      <div className="margin">
        <div className="center">
          <h1> Find the best hotels for your vacation </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <div className="next">
            <a href="/obthree">
            <button>Next</button></a>
          </div>

          <div className="skip">
          <a href="/lyi">
            <button>Skip</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboardingtwo;
