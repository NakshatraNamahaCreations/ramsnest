import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLocation,Link } from "react-router-dom";
import { App as CapacitorApp } from '@capacitor/app';

function Hoteldetails() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const location = useLocation();
  const { data } = location.state;
  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  return (
    <div className="marginbtm">
      <div>
        <a href="/home">
          <i
            class="fa-solid fa-arrow-left"
            style={{
              fontSize: "20px",
              position: "absolute",
              zIndex: "99",
              marginTop: "65px",
              marginLeft: "15px",
            }}
          ></i>
        </a>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.roomimage.map((i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"https://api.howdzat.com/rooms/" + i}
                alt="First slide"
                style={{ height: "285px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="margin">
        <div className="hc">
          <h4>
            <b>{data.roomname}</b>
          </h4>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <div className="hcc">
          <p>
            {" "}
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "black", marginRight: "5px" }}
            ></i>
            Survey No 46, Gaushala Road, behind Art of Living, Kaggalipura
            Bangalore, Karnataka 560082 India
          </p>
        </div>

        <div>
          <h5 className="margintop">
            <b>Description</b>
          </h5>
          <p>
            {data.roomdesc}
          </p>
        </div>
        <h5 className="margintop">
          <b>Facilities</b>
        </h5>
        <div className="justbt" style={{ marginTop: "25px" }}>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/637/637209.png"
              width="30px"
            />
            <p>Elevator</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/159/159599.png"
              width="30px"
            />
            <p>WiFi</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1046/1046857.png"
              width="30px"
            />
            <p>Restaurant</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/708/708949.png"
              width="30px"
            />
            <p>Parking</p>
          </div>
        </div>

        <div className="justbt" style={{ marginTop: "25px" }}>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1427/1427809.png"
              width="30px"
            />
            <p>Meeting Room</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3144/3144982.png"
              width="30px"
            />
            <p>Swimming Pool</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7118/7118127.png"
              width="30px"
            />
            <p>Fitness Center</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3871/3871050.png"
              width="30px"
            />
            <p>24hr open</p>
          </div>
        </div>
        <div>
          <h5>
            <b>Details</b>
          </h5>
        </div>
        <div className="justbt" style={{ marginTop: "25px" }}>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3009/3009487.png"
              width="30px"
            />
            <p>Hotels</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/566/566487.png"
              width="30px"
            />
            <p>4 Bedrooms</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3130/3130313.png"
              width="30px"
            />
            <p>2 Bathrooms</p>
          </div>
          <div className="center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/217/217225.png"
              width="30px"
            />
            <p>4000 sqft</p>
          </div>
        </div>
        <div>
          <h5 className="margintop">
            <b>Location</b>
          </h5>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHErz9mec_ljx3niZt7rHO2w7z53CMtNKZ8A&usqp=CAU"
            width="100%"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="justbt">
            <h5>
              <b>Photos</b>
            </h5>
            <a href="/gallery">
              <h6 style={{ color: "deepskyblue" }}>See All</h6>
            </a>
          </div>
          <div className="flex gap">
            <div className="pts">
              <img
                src="https://img.freepik.com/free-photo/banquet-table-with-snacks_144627-18362.jpg?size=338&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
                height="240px"
              />
            </div>
            <div className="halfpts">
              <img
                src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
              />
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
              />
            </div>
          </div>
          <div className="flex gap">
            <div className="halfpts">
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-smile-happy-relax-around-swimming-pool-hotel-resort_74190-9164.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
              />
              <img
                src="https://img.freepik.com/free-photo/tidy-hotel-room-with-brown-curtains_1203-1493.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
              />
            </div>
            <div className="pts">
              <img
                src="https://img.freepik.com/free-photo/hotel-room-with-comfortable-couch_1203-1488.jpg?size=338&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=sph"
                width="100%"
                height="240px"
              />
            </div>
          </div>
        </div>
        <h5>Customer reviews</h5>
        <div className="rws">
          {/* <h5>Customer reviews</h5> */}
          <i
            class="fa-solid fa-star-half-stroke"
            style={{ color: "black", marginTop: "5px" }}
          ></i>
          <p>
            <b>4.9(4,749 reviews)</b>
          </p>
        </div>
        <div>
          <div className="flex">
            <div className="col-2">
              <p>
                <i className="fa-solid fa-star"></i> 5
              </p>
            </div>
            <div className="col-8 statusbar">
              <div className="wred"></div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              2,571{" "}
            </div>
          </div>

          <div className="flex">
            <div className="col-2">
              <p>
                <i className="fa-solid fa-star"></i> 4
              </p>
            </div>
            <div className="col-8 statusbar">
              <div className="wred1"></div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              1,852{" "}
            </div>
          </div>

          <div className="flex">
            <div className="col-2">
              <p>
                <i className="fa-solid fa-star"></i> 3
              </p>
            </div>
            <div className="col-8 statusbar">
              <div className="wred2"></div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              852{" "}
            </div>
          </div>

          <div className="flex">
            <div className="col-2">
              <p>
                <i className="fa-solid fa-star"></i> 2
              </p>
            </div>
            <div className="col-8 statusbar">
              <div className="wred3"></div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              24
            </div>
          </div>

          <div className="flex">
            <div className="col-2">
              <p>
                <i className="fa-solid fa-star"></i> 1
              </p>
            </div>
            <div className="col-8 statusbar">
              <div className="wred4"></div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              5{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="flx">
            <div style={{ width: "50%" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                width="50px"
                height="50px"
              />
            </div>

            <div style={{ width: "150%" }}>
              <p>
                <b>Darlene Robertson</b>
              </p>
              <p>Jan 2023</p>
            </div>

            <div style={{ width: "100%", textAlign: "end" }}>
              <p>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "black", marginTop: "10px" }}
                ></i>{" "}
                5
              </p>
            </div>
          </div>

          <p style={{ marginTop: "10px" }}>
            The plant is very good ,my son likes it very much and watching it
            every day
          </p>
          <hr />
        </div>
        <div>
          <div className="flx">
            <div style={{ width: "50%" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                width="50px"
                height="50px"
              />
            </div>

            <div style={{ width: "150%" }}>
              <p>
                <b>Harry</b>
              </p>
              <p>Feb 2023</p>
            </div>

            <div style={{ width: "100%", textAlign: "end" }}>
              <p>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "black", marginTop: "10px" }}
                ></i>{" "}
                5
              </p>
            </div>
          </div>
          <p style={{ marginTop: "10px" }}>
            The plant is very good ,my son likes it very much and watching it
            every day
          </p>
          <hr />
        </div>
        <div>
          <div className="flx">
            <div style={{ width: "50%" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                width="50px"
                height="50px"
              />
            </div>

            <div style={{ width: "150%" }}>
              <p>
                <b>Jack Denuy</b>
              </p>
              <p>Jan 2023</p>
            </div>

            <div style={{ width: "100%", textAlign: "end" }}>
              <p>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "black", marginTop: "10px" }}
                ></i>{" "}
                5
              </p>
            </div>
          </div>
          <p style={{ marginTop: "10px" }}>
            The plant is very good ,my son likes it very much and watching it
            every day
          </p>
          <hr />
        </div>
      </div>
      <div className="ftbook">
        <div className="bookflx">
          <div style={{ width: "50%" }}>
            {/* <p>Floor Price</p> */}
            <h6 style={{ marginTop: "12px" }}>
              <b>
                <i class="fa-solid fa-indian-rupee-sign"></i>{data.roomprice}
              </b>
            </h6>
          </div>
          <div className="bookflx1">
            <i class="fa-solid fa-bag-shopping"></i>
            <Link to="/sbs" state={{data:data}}>
              <h4 style={{ color: "white" }}>Book Now</h4>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoteldetails;
