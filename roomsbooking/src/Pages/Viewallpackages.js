import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Viewallpackages() {
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    getallpackages();
  }, []);

  const getallpackages = async () => {
    let res = await axios.get("https://api.howdzat.com/api/getallpackages");
    if ((res.status = 200)) {
      console.log(res);
      setpackages(res.data?.packages);
    }
  };

  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-9">
          <h4>
            <b>All Packages</b>
          </h4>
        </div>
        {/* <div className="col-2">
          <a href="/searchpage">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ fontSize: "20px" }}
            ></i>
          </a>
        </div> */}
      </div>

      <div className="">
      <div>
          <div className="row ">
            {packages?.map((data) => (
              <div className=" fc " style={{ width: "50%" }}>
                <Link to="/packagedetails" state={{ data: data }}>
                <div>
                  <img
                    src={"https://api.howdzat.com/package/" + data.packageimage}
                    width="100%"
                  />
                  <h5>{data.packagename}</h5>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewallpackages;
