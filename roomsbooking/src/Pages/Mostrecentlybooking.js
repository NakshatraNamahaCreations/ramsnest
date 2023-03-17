import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Mostrecentlybooking() {
  const [room, setroom] = useState([]);

  useEffect(() => {
    getallrooms();
  }, [])
  

  const getallrooms = async () => {
    let res = await axios.get("https://api.howdzat.com/api/getallrooms");
    if ((res.status = 200)) {
      console.log(res);
      setroom(res.data?.rooms);
    }
  };
  return (
    <div className='margin'>
       <div className="row">
        <div className="col-1">
          <Link
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ fontSize: "20px", marginTop: "5px" }}
            ></i>{" "}
          </Link>
        </div>
        <div className="col-10 justbt">
            <div>
            <h4 >All Rooms</h4>
            </div>
          
          
        </div>
      </div>
      <div>
      {room?.map((data) => (
        <div>
          <Link to="/hoteldetails" state={{ data: data }}>
            <div className="flex seal" style={{ marginTop: "20px" }}>
              <div style={{ width: "50%" }} className="slimg">
                <img
                  src={"https://api.howdzat.com/rooms/" + data.roomimage[0]}
                  width="100px"
                />
              </div>

              <div style={{ width: "100%" }}>
                <div className="justbt">
                  <h5>{data.roomname}</h5>
                  <p style={{ fontSize: "15px", color: "deepskyblue" }}>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <b>{data.roomprice}</b>
                  </p>
                </div>
                <div className="justbt">
                  <p style={{ fontSize: "13px" }}>Kaggalipura Bangalore</p>
                  <p>per day</p>
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
                    style={{
                      fontSize: "21px",
                      marginTop: "5px",
                      color: "deepskyblue",
                    }}
                    width="30px"
                  ></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Mostrecentlybooking
