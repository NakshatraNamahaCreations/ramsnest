import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Editprofile() {
  const [value, setValue] = useState();
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
          <h4 style={{textAlign:"center"}}>Edit Profile</h4>
        </div>
      </div>
      {/* <div className="center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70BCbCMem6iqUraALv89e27HfAriNKHce4w&usqp=CAU"
          style={{
            width: "90px",
            borderRadius: "50%",
            height: "90px",
            marginTop:"30px"
          }}
        />

        <div style={{ marginTop: "-24px", marginLeft: "50px" }}>
          <i
            class=" fa-solid fa-pen"
            style={{
              color: "white",
              background: "#0484b9",
              padding: "4px",
              fontSize: "10px",
            }}
          ></i>
        </div>
      </div> */}
      <div className="edpr">
        <input placeholder="Andrew Ainsley" type="text" />
        <input placeholder="Andrew" type="text" />
        <input placeholder="10/10/1990" type="date" />
        <input placeholder="andrew_ainsley@gmail.com" type="email" />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />

        <select
          name="Male"
          style={{
            marginTop: "40px",
            border: "none",
            outline: "none",
          }}
        >
          <option value="Male">Male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div className="next" style={{marginTop:"40px"}}>
        <a href="/profile">
          <button>Update</button>
        </a>
      </div>
    </div>
  );
}

export default Editprofile;
