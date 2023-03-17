import React, { useEffect } from "react";

function Welcomepage() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      window.location.assign("/home");
    }
  }, []);
  return (
    <div>
      <div>
        <img
          src="./images/Hotel2.png"
          width="100%"
          style={{ height: "100vh" }}
        />
      </div>
      <div className="wl">
        <h2>Welcome to </h2>
        <h1>Ramsnest</h1>
        <p style={{ color: "white" }}>
          The best hotel booking in this century to accompany your vacation
        </p>
        <div className="next" style={{ marginTop: "40px" }}>
          <a href="/obone">
            <button>Next</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;
