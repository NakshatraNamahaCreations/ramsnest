import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Packagedetails() {
  const location = useLocation();
  const { data } = location.state;
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const confirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        url: "/buypackage",
        method: "post",
        baseURL: "https://api.howdzat.com/api",
        headers: {
          "content-type": "application/json",
        },
        data: {
          customerId: user.id,
          customername: user.name,
          phonenumber: user.phonenumber,
          purchasedatetime: moment().format("DD/MM/YYYY hh:mm A"),
          total: data.discount,
          starttime: data.starttime,
          endtime: data.endtime,
          packagename: data.packagename,
          packageimage:data.packageimage,
          indoorgames:data.indoorgames,
          outdoorgames:data.outdoorgames,
          packagefeature:data.packagefeature,
          swimmingpool:data.swimmingpool,
          packageexpdatetime: moment()
            .add(1, "days")
            .format("DD/MM/YYYY hh:mm A"),
          paymentmethod: "COD",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setLoading(false);
        alert("Package purchased Successfully");
        window.location.assign("/home");

        return res;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div style={{marginTop:"100%",marginBottom:"50%",textAlign:"center"}}>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
        <p>Loading....</p>
      </div>
    )
  }
  return (
    <div>
      <div className="marginbtm">
        <div className="margin">
          <div>
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
              <div className="col-9">
                <h4 style={{ marginLeft: "10px" }}>
                  <b>Package Details</b>
                </h4>
              </div>
            </div>
            <div>
              <img
                className="d-block w-100"
                src={"https://api.howdzat.com/package/" + data.packageimage}
                alt="First slide"
                style={{ height: "250px", marginTop: "20px" }}
              />
            </div>
            <div className="pp">
              <h5>{data.packagename}</h5>
              <div className="ppd">
                <h5>
                  <del>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    {data.packageprice}
                  </del>
                </h5>
                /
                <h5>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  {data.discount}
                </h5>
              </div>
            </div>
            <div>
              <h5>Start from :{data.starttime} AM</h5>
              <h5>End Timmings:{data.endtime} PM</h5>
              
            </div>
            <div className="margintop">
              <h5>Indoor Games</h5>
             
            </div>
            <div className="ig">
              <img src="./images/chess.avif" />
              <img src="./images/archery.avif" />
              <img src="./images/carom.avif" />
            </div>
            <p>{data.indoorgames}</p>
            <div>
              <h5 className="margintop">Outdoor Games</h5>
             
            </div>
            <div className="ig">
              <img src="./images/cricket.avif" />
              <img src="./images/throughball.jpg" />
              <img src="./images/volleyball.jpg" />
            </div>

           
            <p> {data.outdoorgames}</p>
            <div className="margintop">
            <h5>Swimming pool</h5>
              <p>{data.swimmingpool}</p>
             <b>Swimming Costume Mandatory</b> 
            </div>
            <div  className="margintop">
              <h5>Package features</h5>
              <p>{data.packagefeature}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ftbook">
            <div className="cont">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content imp">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.D-glNbmdqIOVsA5vEUmPFwHaE8&pid=Api&P=0"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Pay Online </h4>
                    </div>
                    {/* <div className="rad">
                      <input type="radio" />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="bibrd">
                <div className="bi">
                  <div className="flex1" style={{ marginTop: "0" }}>
                    <div>
                      <img
                        src="https://t3.ftcdn.net/jpg/05/64/33/62/240_F_564336244_Yx3bkxrGvwpgrgDAdWz6hGgApKXBTePD.jpg"
                        width="35px"
                      />
                    </div>
                    <div>
                      <h4>Cash</h4>
                    </div>
                    {/* <div className="rad">
                      <input type="radio" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div>
                <div className="ftbook">
                  <div className="cont">
                    <button onClick={confirm}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packagedetails;
