import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <div className="footer">
          <div className="ft">
          <Link to="/home" style={{textDecoration:"none" ,color:"black"}}>
            <img src="https://cdn-icons-png.flaticon.com/128/263/263115.png" width="20px" />
            <p>Home</p>
            </Link>
          </div>
          <div className="ft">
            <Link to="/foodcategory" style={{textDecoration:"none" ,color:"black"}}>
            <img src="https://img.freepik.com/free-icon/restaurant_318-929224.jpg?size=338&ext=jpg&uid=R19754806&ga=GA1.1.35560669.1669291340&semt=sph" width="20px" />
            <p>Food</p>
            </Link>
          </div>
          <div className="ft">
          <Link to="/allbooking" style={{textDecoration:"none" ,color:"black"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" width="20px" />
            <p>Bookings</p>
            </Link>
          </div>
          <div className="ft">
          <Link to="/profile" style={{textDecoration:"none" ,color:"black"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png" width="20px"/>
            <p>Profile</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
