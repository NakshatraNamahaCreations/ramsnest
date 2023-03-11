import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Slider() {
  const [data, setdata] = useState([]);
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    getimage();
    getallpackages();
  }, []);

  const getimage = () => {
    axios
      .get("https://api.howdzat.com/api/getallbanner")
      .then(function (response) {
        //handle success
        setdata(response.data.banner);
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };
 

 

  const getallpackages = async () => {
    let res = await axios.get("https://api.howdzat.com/api/getallpackages");
    if ((res.status = 200)) {
      console.log(res);
      setpackages(res.data?.packages);
    }
  };
  return (
    <div className="margin marginbtm">
      <OwlCarousel className="owl-theme" loop margin={10} nav items={1.8} autoplay="true">
        {data?.map((data) => (
          <div class="item">
            <div className="rts">
              <p>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px" }}
                ></i>{" "}
                4.8
              </p>
            </div>
            <img
              src={"https://api.howdzat.com/banner/" + data.banner}
              width="100%"
              style={{ height: "300px",borderRadius:"25px" }}
            />
            <div className="hds bg-dark  bg-opacity-50 border-dark  p-2">
              <div>
                <h4>Ram's Nest</h4>
                <p>Kaggalipura Bangalore</p>
              </div>

              <div className="justbt">
                <p>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i
                  class="fa-regular fa-bookmark"
                  style={{ color: "white" }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>

      <div className="justbt">
        <h5>Available Rooms</h5>
        <a href="/mrb">
          <h6 style={{ color: "deepskyblue" }}>See All</h6>
        </a>
      </div>
      <a href="/hoteldetails">
        <div className="flex seal" style={{ marginTop: "0" }}>
          <div style={{ width: "50%" }} className="slimg">
            <img
              src="http://ramsnesthomestay.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-24-at-10.05.30-AM-3.jpeg"
              width="100px"
            />
          </div>

          <div style={{ width: "100%" }}>
            <div className="justbt">
              <h5>Container House</h5>
              <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                <i class="fa-solid fa-dollar-sign"></i>
                <b>35</b>
              </p>
            </div>
            <div className="justbt">
              <p style={{ fontSize: "13px" }}>Kaggalipura Bangalore</p>
              <p>night</p>
            </div>
            <div className="justbt">
              <p className="mb">
                {" "}
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>
                4.8 (4,378)
              </p>
              <i
                class="fa-regular fa-bookmark"
                style={{ fontSize: "21px", color: "deepskyblue" }}
                width="30px"
              ></i>
            </div>
          </div>
        </div>
      </a>
      <div>
        <a href="/hoteldetails">
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://img.freepik.com/free-photo/tent-glamping-night_1268-20428.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h5>Tent House</h5>
                <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>29</b>
                </p>
              </div>
              <div className="justbt">
                <p style={{ fontSize: "13px" }}>Kaggalipura Bangalore</p>
                <p>night</p>
              </div>
              <div className="justbt">
                <p className="mb">
                  {" "}
                  <i
                    class="fa-regular fa-star"
                    style={{ marginRight: "8px", color: "gold" }}
                  ></i>
                  4.8 (4,378)
                </p>
                <i
                  class="fa-regular fa-bookmark"
                  style={{ fontSize: "21px", color: "deepskyblue" }}
                  width="30px"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="/hoteldetails">
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacSRDevrJqBxgHW_J16Tqo1CfOmApVlGmmLCDsbHN_4KmNKVhMQ_UJh7Dsmkz2tYpS7M&usqp=CAU"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h5>Thotti Mane</h5>
                <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>37</b>
                </p>
              </div>
              <div className="justbt">
                <p style={{ fontSize: "13px" }}>Kaggalipura Bangalore</p>
                <p>night</p>
              </div>
              <div className="justbt">
                <p className="mb">
                  {" "}
                  <i
                    class="fa-regular fa-star"
                    style={{ marginRight: "8px", color: "gold" }}
                  ></i>
                  4.8 (4,378)
                </p>
                <i
                  class="fa-regular fa-bookmark"
                  style={{ fontSize: "21px", color: "deepskyblue" }}
                  width="30px"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="/hoteldetails">
          <div className="flex seal">
            <div style={{ width: "50%" }} className="slimg">
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2125.jpg?size=338&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100px"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="justbt">
                <h5>Delux House</h5>
                <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b>35</b>
                </p>
              </div>
              <div className="justbt">
                <p style={{ fontSize: "13px" }}>Kaggalipura Bangalore</p>
                <p>night</p>
              </div>
              <div className="justbt">
                <p className="mb">
                  {" "}
                  <i
                    class="fa-regular fa-star"
                    style={{ marginRight: "8px", color: "gold" }}
                  ></i>
                  4.8 (4,378)
                </p>
                <i
                  class="fa-regular fa-bookmark"
                  style={{ fontSize: "21px", color: "deepskyblue" }}
                  width="30px"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="">
        <h5 style={{ marginTop: "25px" }}>Packages</h5>
        <div>
          <div className="row ">
            {packages?.map((data) => (
              <div className=" fc " style={{ width: "50%" }}>
                <Link to="/packagedetails" state={{data:data}}>
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
        <div className="vas">
          <Link to="/vap">
            <p style={{ color: "white" }}>View All Packages</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;
