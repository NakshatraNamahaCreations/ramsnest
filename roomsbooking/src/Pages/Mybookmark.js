import React from "react";
import { Link } from "react-router-dom";

function Mybookmark() {
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
        <div className="col-10 justbt">
          <div className="mk4">
            <h4>My Bookmarks</h4>
          </div>
          {/* <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2258/2258853.png"
              width="25px"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/5665/5665189.png"
              width="25px"
              style={{ marginLeft: "10px" }}
            />
          </div> */}
        </div>
      </div>
      <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Martinez Cannes</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.8 Paris,France
              </p>
            </div>
           
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Egleton resort</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.8 Paris,France
              </p>
            </div>
         
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2222.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Palms Casino</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.7 Paris,France
              </p>
            </div>
         
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Palazzo Versace</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.5 Paris,France
              </p>
            </div>
          
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Bulgari Resort</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.9 Paris,France
              </p>
            </div>
         
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bmk">
            <div className="bmrk">
              <div className="mkl">
                <img src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" />
              </div>
            </div>
            <div className="mk4">
              <h5>Emeralda De Hotel</h5>
            </div>
            <div className="mb">
              <p className="mb  " style={{ fontSize: "14px" }}>
                <i
                  class="fa-regular fa-star"
                  style={{ marginRight: "8px", color: "gold" }}
                ></i>{" "}
                4.8 Paris,France
              </p>
            </div>
          
            <div className="">
              <div className="justbt">
                <p className="mb">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <b style={{ fontWeight: "500" }}>29</b> /per night
                </p>
                <i class="fa-solid fa-bookmark" style={{marginTop:"7px"}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mybookmark;
