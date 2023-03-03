import React from "react";

function Letyouin() {
  return (
    <div className="margin">
      <div>
        <a href="/">
        <img src="./images/back.png" width="25px" /></a>
      </div>
      <div style={{ marginTop: "30%" }}>
        <div className="center">
          <h1>Let's you in</h1>
        </div>
        <div style={{ marginTop: "20%" }}>
          <div className="ly">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              width="25px"
              height="25px"
            />
            <p>Continue with Facebook</p>
          </div>
          <div className="ly">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
              width="25px"
              height="25px"
            />
            <p>Continue with Google</p>
          </div>
          <div className="ly">
            <img
              src="https://cdn-icons-png.flaticon.com/128/731/731985.png"
              width="25px"
              height="25px"
            />
            <p>Continue with Apple</p>
          </div>
        </div>
        <div className="flex" style={{ marginTop: "25px" }}>
          <div className="col-5">
            <hr style={{ marginTop: "12px" }} />
          </div>
          <div className="col-2">
            <div>
              <p style={{ textAlign: "center" }}>or</p>
            </div>
          </div>
          <div className="col-5">
            <hr style={{ marginTop: "12px" }}></hr>
          </div>
        </div>
        <div className="next" style={{ marginTop: "30px" }}>
          <a href="/signin">
            <button>Sign in with password</button>
          </a>
        </div>
      </div>
      <div className="dh">
        <p>
          Don't have an account ? <a href="/signup"><b>Sign up</b></a>
        </p>
      </div>
    </div>
  );
}

export default Letyouin;
