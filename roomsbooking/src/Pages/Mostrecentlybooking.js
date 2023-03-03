import React from 'react';
import {Link} from 'react-router-dom';

function Mostrecentlybooking() {
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
            <h4 >Recently Booked</h4>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/2258/2258853.png" width="25px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/5665/5665189.png" width="25px" style={{marginLeft:"10px"}}/>

            </div>
          
        </div>
      </div>
      <div>
      <div className="flex seal">
        <div style={{width:"50%"}} className="slimg">
        <img src="https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" width="100px" />
        </div>
       
        <div style={{width:"100%"}}>
          <div className="justbt">
            <h4>President Hotel</h4>
            <p style={{fontSize:"15px" ,color:"deepskyblue"}}>
            <i class="fa-solid fa-dollar-sign" ></i>
              <b>35</b>
            </p>
          </div>
          <div className="justbt">
            <p>Paris,France</p>
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
            <i class="fa-regular fa-bookmark" style={{fontSize:"21px",color:"deepskyblue"}}width="30px"></i>
          </div>
        </div>
      </div>
      <div className="flex seal">
        <div style={{width:"50%"}} className="slimg">
        <img src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph" width="100px" />
        </div>
       
        <div style={{width:"100%"}}>
          <div className="justbt">
            <h4>Palms Casino</h4>
            <p style={{fontSize:"15px",color:"deepskyblue"}}>
            <i class="fa-solid fa-dollar-sign" ></i>
              <b>29</b>
            </p>
          </div>
          <div className="justbt">
            <p>Paris,France</p>
            <p>night</p>
          </div>
          <div className="justbt">
            <p className="mb">
              {" "}
              <i
                class="fa-regular fa-star"
                style={{ marginRight: "8px", color: "gold", }}
              ></i>
              4.8 (4,378)
            </p>
            <i class="fa-regular fa-bookmark" style={{fontSize:"21px",color:"deepskyblue"}}width="30px"></i>
          </div>
        </div>
      </div>
      <div className="flex seal">
        <div style={{width:"50%"}} className="slimg">
        <img src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph" width="100px" />
        </div>
       
        <div style={{width:"100%"}}>
          <div className="justbt">
            <h4>Palazzo Versace</h4>
            <p style={{fontSize:"15px",color:"deepskyblue"}}>
            <i class="fa-solid fa-dollar-sign" ></i>
              <b>37</b>
            </p>
          </div>
          <div className="justbt">
            <p>Paris,France</p>
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
            <i class="fa-regular fa-bookmark" style={{fontSize:"21px",color:"deepskyblue"}}width="30px"></i>
          </div>
        </div>
      </div>
      <div className="flex seal">
        <div style={{width:"50%"}} className="slimg">
        <img src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.1.35560669.1669291340&semt=sph" width="100px" />
        </div>
       
        <div style={{width:"100%"}}>
          <div className="justbt">
            <h4>Bulgari Resort</h4>
            <p style={{fontSize:"15px",color:"deepskyblue"}}>
            <i class="fa-solid fa-dollar-sign" ></i>
              <b>25</b>
            </p>
          </div>
          <div className="justbt">
            <p>Paris,France</p>
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
            <i class="fa-regular fa-bookmark" style={{fontSize:"21px",color:"deepskyblue"}}width="30px"></i>
          </div>
        </div>
      </div>
      <div className="flex seal">
        <div style={{width:"50%"}} className="slimg">
        <img src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?size=626&ext=jpg&ga=GA1.2.35560669.1669291340&semt=sph" width="100px" />
        </div>
       
        <div style={{width:"100%"}}>
          <div className="justbt">
            <h4>Martinez Cannes</h4>
            <p style={{fontSize:"15px",color:"deepskyblue"}}>
            <i class="fa-solid fa-dollar-sign" ></i>
              <b>35</b>
            </p>
          </div>
          <div className="justbt">
            <p>Paris,France</p>
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
            <i class="fa-regular fa-bookmark" style={{fontSize:"21px",color:"deepskyblue"}}width="30px"></i>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Mostrecentlybooking
