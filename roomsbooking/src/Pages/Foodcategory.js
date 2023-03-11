import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Foodcategory() {
  const [categorydata, setcategorydata] = useState([]);

  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    let res = await axios.get("https://api.howdzat.com/api/getcategory");
    if ((res.status = 200)) {
      setcategorydata(res.data?.category);
    } else {
      alert("something went wrong");
    }
  };
  return (
    <div>
      <div className="margin">
        <div className="allign flex">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
          <h4 style={{ marginLeft: "25px" }}>Foods category</h4>
        </div>
        <div>
          <div className="row ">
            {categorydata?.map((data) => (
              <div className=" fc " style={{ width: "50%" }}>
                <Link to="/foodsubcategory" state={{data:data}}>
                <div>
                  <img
                    src={"https://api.howdzat.com/category/" + data.categoryimage}
                    width="100%"
                  />
                  <h5>{data.categoryname}</h5>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Foodcategory;
