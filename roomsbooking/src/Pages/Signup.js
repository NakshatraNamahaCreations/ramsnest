import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  // const axiosInstance=axios.create({baseURL:ProcessingInstruction.env.REACT_APP_API_URI,})
  
  const signup = async (e) => {
    e.preventDefault();
    if (!email || !name || !phonenumber || !password || !cpassword) {
      alert("Please enter the email and password");
    } else if (password !== cpassword) {
      alert("password doesn't match");
    } else {
      setLoading(true);
      try {
        const config = {
          url: "https://api.howdzat.com/api/customersignup",
          method: "POST",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
            name: name,
            phonenumber: phonenumber,
            password: password,
            cpassword: cpassword,
          },
        };
        let res = await axios(config);
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data);
          setLoading(false);
          alert("Account Created");
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.assign("/signin");
          return res;
        } else {
          alert("Email or Mobile Already Exist");
          console.log(res.data.error);
        }
      } catch (error) {
        console.log(error.response);
        setLoading(false);
        if (error.response) {
          alert(error.response.data.error);

        }
      }
    }
  };
  if (loading) {
    return (
      <div
        style={{ marginTop: "100%", marginBottom: "50%", textAlign: "center" }}
      >
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
          
        </div>
        <p>Loading....</p>
        
      </div>
    );
  }
  return (
    <div className="margin">
      <div>
        <a href="/lyi">
          <img src="./images/back.png" width="25px" />
        </a>
      </div>
      <div>
        <div style={{ marginTop: "10px" }}>
          <h1 style={{ margin: "8px",fontSize:"40px" }}>Create your Account</h1>
        </div>
      </div>
      <div className="snif1" style={{ marginTop: "30px" }}>
        <div>
          <i class="fa-solid fa-user"></i>
          <input
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>

        <div>
          <i class="fa-solid fa-envelope"></i>
          <input
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
        <div>
          <i class="fa-solid fa-phone"></i>
          <input
            placeholder="phonenumber"
            onChange={(e) => setphonenumber(e.target.value)}
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
        <div>
          <i class="fa-solid fa-lock"></i>
          <input
            placeholder="Create Password"
            onChange={(e) => setpassword(e.target.value)}
            type="text"
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
        <div>
          <i class="fa-solid fa-lock"></i>
          <input
            placeholder="Confirm Password"
            onChange={(e) => setcpassword(e.target.value)}
            type="text"
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
      </div>
      <div className="rmb">
        {/* <div className="flex">
          <input type="checkbox"  id="cb" />
          <p style={{ marginLeft: "5px" }}>Remember me</p>
        </div> */}
      </div>
      <div className="ln">
        <button onClick={signup}>Sign up</button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <p>or continue with</p>
      </div>

      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          marginTop: "25px",
        }}
      >
        <div className="auth">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111393.png"
            width="37px"
            height="30px"
          />
        </div>
        <div className="auth">
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            width="30px"
            height="30px"
          />
        </div>
        <div className="auth">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1532/1532495.png"
            width="30px"
            height="30px"
          />
        </div>
      </div>

      <div
        className="flex"
        style={{ justifyContent: "center", marginTop: "40px" }}
      >
        <p>Already have an account ?</p>
        <a href="/signin" style={{ textDecoration: "none" }}>
          <p style={{ fontWeight: "600" }}> Sign in</p>
        </a>
      </div>
    </div>
  );
}

export default Signup;
