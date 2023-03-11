import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter the Email and Password");
    } else {
      setLoading(true);
      try {
        const config = {
          url: "https://api.howdzat.com/api/customersignin",
          method: "POST",
          headers: { "content-type": "application/json" },
          data: { email: email, password: password },
        };
        await axios(config)
          .then(function (response) {
            if (response.status === 200) {
              console.log(response.data);
              alert("login succcessfull");
              setLoading(false);
              sessionStorage.setItem("user", JSON.stringify(response.data.user));
              window.location.assign("/home");
            } else {
              alert("email or password wrong");
            }
          })
          .catch(function (error) {
            console.error(error);
            setLoading(false);
            alert("Invalid email and password ");
          });
      } catch (err) {
        console.log(err);
        setLoading(false);
        alert("Email or password wrong");
      }
    }
  };
 
  if(loading){
    return(
      <div style={{marginTop:"50%",marginBottom:"50%",textAlign:"center"}}>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    )
  }
  return (
    <div className="margin">
      <div>
        <a href="/lyi">
          <img src="./images/back.png" width="25px" />
        </a>
      </div>
      <div>
        <div style={{ marginTop: "20%" }}>
          <h1 style={{ fontSize: "40px" }}>Login to your Account</h1>
        </div>
      </div>
      <div className="snif1" style={{ marginTop: "30px" }}>
        <div>
          <i class="fa-solid fa-envelope"></i>
          <input
            placeholder="Email/Phone"
            onChange={(e) => setemail(e.target.value)}
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
        <div>
          <i class="fa-solid fa-lock"></i>
          <input
            placeholder="Password"
            type="text"
            onChange={(e) => setpassword(e.target.value)}
            style={{ background: "rgb(222 226 230 / 57%)" }}
          ></input>
        </div>
      </div>
      <div className="rmb">
        <div className="flex">
          <input type="checkbox" id="cb" />
          <p style={{ marginLeft: "5px" }}>Remember me</p>
        </div>
        <div>
          <p style={{ fontWeight: "600" }}>Forgot Password?</p>
        </div>
      </div>
      <div className="ln">
        {/* <Link to="/home"> </Link> */}
        <button onClick={signin}>LOGIN</button>
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
        style={{ justifyContent: "center", marginTop: "60px" }}
      >
        <p>Don't have account ?</p>
        <a href="/signup" style={{ textDecoration: "none" }}>
          <p style={{ fontWeight: "600" }}> Sign up</p>
        </a>
      </div>
    </div>
  );
}

export default Signup;
