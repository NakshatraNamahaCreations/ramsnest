import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Foodsubcategory() {
  const location = useLocation();
  const { data } = location.state;
  const [subcategorydata, setsubcategorydata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postallsubcategory();
  }, [data]);
  const postallsubcategory = async () => {
    let res = await axios.post("http://localhost:8080/api/postsubcategory", {
      categoryname: data.categoryname,
    });
    if ((res.status = 200)) {
      console.log(res);
      setLoading(false);
      setsubcategorydata(res.data?.subcategory);
    } else {
      alert("somthing went wrong");
    }
  };
const allfoods=()=>{
  window.location.assign("/allfoods")
}
  if(loading){
    return(
      <div style={{marginTop:"100%",marginBottom:"50%",textAlign:"center"}}>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    )
  }else{
    <p>No data found...!</p>
  }
  return (
    <div>
      <div className="margin">
        <div className="allign flex">
          <Link
            to="/foodcategory"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
          <h4 style={{ marginLeft: "25px" }}>Foods </h4>
        </div>
        {subcategorydata == 0 ? (
          <div className="nodata">
            <img src="./images/smartphone.png" width="40px"/>
            <p><b>No data found ...!</b></p>
          
          <p  onClick={allfoods} className="vaff">View all foods</p>
          </div>
        ) : (
          <div>
            <div className="row ">
              {subcategorydata?.map((data) => (
                <div className=" fc " style={{ width: "50%" }}>
                  <Link to="/foods" state={{ data: data }}>
                    <div>
                      <img
                        src={
                          "http://localhost:8080/subcategory/" +
                          data.subcategoryimage
                        }
                        width="100%"
                      />
                      <h5>{data.categoryname}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Foodsubcategory;
