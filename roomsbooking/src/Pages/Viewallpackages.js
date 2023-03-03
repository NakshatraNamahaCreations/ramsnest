import React from "react";
import { Link } from "react-router-dom";

function Viewallpackages() {
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <i class="fa-solid fa-arrow-left" style={{fontSize:"20px",marginTop:"5px" }}></i>{" "}
          </Link>
        </div>
        <div className="col-9">
          <h4><b>All Packages</b></h4>
        </div>
        <div className="col-2">
            <a href="/searchpage">
            <i class="fa-solid fa-magnifying-glass" style={{fontSize:"20px"}}></i></a>
          </div>
       
      </div>
      <a href="/hoteldetails">
      <div className="">
        {/* <h5 style={{ marginTop:"25px" }}>Packages</h5> */}
        <div className="mpss">
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-dark-wood-european-classic-bedroom-suite-hotel_105762-2164.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
            Premium Rooms
            </p>
          </div>
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2063.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
             AC Rooms
            </p>
          </div>
        </div>
        <div className="mpss">
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/tidy-hall-with-two-pictures-wall_1203-1487.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
             Container Rooms
            </p>
          </div>
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
              Luxury rooms
            </p>
          </div>
        </div>
        <div className="mpss">
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-wardrobe-walk-closet_105762-2158.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.2.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
             Deluxe Rooms
            </p>
          </div>
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2152.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=ais"
              width="100%"
              height="120px"
            />
            <p>
              Luxury rooms
            </p>
          </div>
        </div>
      </div>
      </a>
      {/* <div>
        <h5 style={{marginTop:"20px" }}>Cleaning services</h5>
        <div className="mpss">
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
              width="100%"
              height="120px"
            />
            <p><b>Floor Cleaning</b></p>
          </div>
          <div className="mps">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DGpvJPVY7XeP78oFAZBrkxlyPD-LT1AQtQ&usqp=CAU"
              width="100%"
              height="120px"
            />
            <p><b>Glass Cleaning</b></p>
          </div>
        </div>
      
      </div> */}
      {/* <div>
        <h5 style={{marginTop:"20px" }}>Appliance services</h5>
        <div className="mpss">
          <div className="mps">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DGpvJPVY7XeP78oFAZBrkxlyPD-LT1AQtQ&usqp=CAU "
              width="100%"
              height="120px"
            />
            <p><b>AC Service & Repair</b></p>
          </div>
          <div className="mps">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgW14BNZB4g5R7ca20AAQ6Thgo52jTjzFROg&usqp=CAU"
              width="100%"
              height="120px"
            />
            <p><b>Refrigerator Repair</b></p>
          </div>
        </div>
        <div className="mpss">
          <div className="mps">
            <img
              src="https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg?size=626&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph"
              width="100%"
              height="120px"
            />
            <p><b>Chimney Repair</b></p>
          </div>
          <div className="mps">
            <img
              src="https://repair-appliance.ca/wp-content/uploads/2020/01/AdobeStock_188974309.jpeg"
              width="100%"
              height="120px"
            />
            <p><b>Washing Machine Repair</b></p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Viewallpackages;
