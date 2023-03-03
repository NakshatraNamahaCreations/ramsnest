import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="margin">
      <div className="row">
        <div className="col-1">
          <Link
            to="/hoteldetails"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-9">
          <h4 style={{ marginLeft: "10px" }}>
            <b>Gallery Hotel Photos</b>
          </h4>
        </div>
      </div>

      <div className="gl">
        <div className="gly">
          <img
           
            src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph"
          />
        </div>
        <div className="gly">
          <img src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph" />
        </div>
      </div>
      <div className="gl">
        <div className="gly">
          <img src="https://img.freepik.com/free-photo/luxury-dinner-table-hotel_1150-11071.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
        </div>
        <div className="gly">
          <img src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
        </div>
      </div>
      <div className="gl">
        <div className="gly">
          <img src="https://img.freepik.com/free-photo/luxury-restaurant-grill-bar-interior-with-chandeliers-furniture_114579-2341.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
        </div>
        <div className="gly">
          <img src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph" />
        </div>
      </div>

      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />
        <div id="caption"></div>
      </div>
    </div>
  );
}

export default Gallery;
