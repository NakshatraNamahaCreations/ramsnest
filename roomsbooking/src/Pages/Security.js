import React from "react";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };
function Security() {
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-10">
          <h4 style={{ textAlign: "center" }}>Security</h4>
        </div>
      </div>
      <div className="line" style={{ marginTop: "40px" }}>
        <div className="line">
          <p>Face id</p>
        </div>
        <div>
          <Switch {...label} defaultChecked />
        </div>
      </div>
      <div className="line">
        <div className="line">
          <p>Remember me</p>
        </div>
        <div>
          <Switch {...label} defaultChecked />
        </div>
      </div>
      <div className="line">
        <div className="line">
          <p>Touch id</p>
        </div>
        <div>
          <Switch {...label} defaultChecked />
        </div>
      </div>
    </div>
  );
}

export default Security;
