import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

function Editprofile() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [value, setValue] = useState();
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [dob, setdob] = useState(user.dob);
  const [gender, setgender] = useState(user.gender);
  const [phonenumber, setphonenumber] = useState(user.phonenumber);
  const [profileimage, setimage] = useState("");
  const [first, setfirst] = useState(user.name);
  const apiURL = "https://api.howdzat.com/api";

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function validatename(inputtxt) {
    var phoneno = /^[a-zA-Z ]{3,30}$/;

    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }
  function validatenumber(inputtxt) {
    var phoneno = /^[0-9 ]{10}$/;

    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid number!");
      return false;
    }
  }

  const Onsubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        validatename(name) &&
        validatenumber(phonenumber) &&
        ValidateEmail(email)
      ) {
        const config = {
          url: `https://api.howdzat.com/api/updateprofile/${user.id}`,
          method: "post",
          headers: { "content-type": "application/json" },
          data: {
            name: name,
            email: email,
            phonenumber: phonenumber,
            dob: dob,
            gender: gender,
          },
        };
        let res = await axios(config);
        console.log(res.status);
        if (res.status === 200) {
          alert("Account Updated");
          sessionStorage.setItem("user", JSON.stringify(res.data.user));

          window.location.assign("/profile");
        } else {
          alert("Email or Mobile Already Exist");
          console.log(res.data.error);
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

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
          <h4 style={{ textAlign: "center" }}>Edit Profile</h4>
        </div>
      </div>

      <div className="edpr">
        <input
          placeholder={user.name}
          type="text"
          onChange={(e) => setname(e.target.value)}
        />

        <input
          placeholder="10/10/1990"
          type="date"
          onChange={(e) => setdob(e.target.value)}
        />
        <input
          placeholder={user.email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
        />
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
          onChange={(e) => setgender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div className="next" style={{ marginTop: "40px" }}>
        <button onClick={Onsubmit}>Update</button>
      </div>
    </div>
  );
}

export default Editprofile;
