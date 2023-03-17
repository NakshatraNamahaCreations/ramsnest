import React from "react";
import { Card } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

function BInfo() {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);
  return (
    <div className="margin">
      <Link to="/allbooking" style={{ textDecoration: "none", color: "black" }}>
        <i
          class="fa-solid fa-arrow-left"
          style={{ fontSize: "20px", marginTop: "5px" }}
        ></i>{" "}
      </Link>
      <div>
        <Card
          style={{
            borderRadius: "30px",
            marginTop: "20px",
            border: "1px solid #e9ecefc2",
          }}
        >
          <Card.Body>
            <div>
              {data.food.map((item) => (
                <div className="jut">
                  <div>
                    <img
                      src={
                        "https://api.howdzat.com/food/" +
                        item.product.foodimage[0]
                      }
                      width="80px"
                      height="80px"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <div>
                    <h4>{item.product.foodname}</h4>
                    <p>{item.product.category}</p>
                  </div>
                  <div>
                    <h4>
                      <i class="fa-solid fa-indian-rupee-sign"></i>
                      {item.product.customerofferprice}X{item.quantity}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="jut">
                <div>
                  <p>order on :{data.customerorderdatetime}</p>
                  {data.customername}
                </div>

                <h4>
                  Total:<i class="fa-solid fa-indian-rupee-sign"></i>
                  {data.total}
                </h4>
              </div>
            </div>
          </Card.Body>
        </Card>
        {}
      </div>
    </div>
  );
}

export default BInfo;
