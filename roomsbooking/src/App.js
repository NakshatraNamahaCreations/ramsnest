import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomepage from "./Pages/Welcomepage";
import Onboardingone from "./Pages/Onboardingone";
import Onboardingtwo from "./Pages/Onboardingtwo";
import Onboardingthree from "./Pages/Onboardingthree";
import Letyouin from "./Pages/Letyouin";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Editprofile from "./Pages/Editprofile";
import Profile from "./Pages/Profile";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Mostrecentlybooking from "./Pages/Mostrecentlybooking";
import Search from "./Pages/Search";
import Mybookmark from "./Pages/Mybookmark";
import Hoteldetails from "./Pages/Hoteldetails";
import Book from "./Pages/Book";
import Sbs from "./Pages/Sbs";
import Addpromocode from "./Pages/Addpromocode";
import Address from "./Pages/Address";
import Bookinginformation from "./Pages/Bookinginformation";
import Addcard from "./Pages/Addcard";
import Confirmpayment from "./Pages/Confirmpayment";
import Gallery from "./Pages/Gallery";
import Allbooking from "./Pages/Allbooking";
import Viewticket from "./Pages/Viewticket";
import Helpcenter from "./Pages/Helpcenter";
import Security from "./Pages/Security";
import Viewallpackages from "./Pages/Viewallpackages";
import Foods from "./Pages/Foods";
import Fooddetails from "./Pages/Fooddetails";
import Cart from "./Pages/Cart";
import Foodcategory from "./Pages/Foodcategory";
import Foodsubcategory from "./Pages/Foodsubcategory";
import Allfoods from "./Pages/Allfoods";
import Allfooddetails from "./Pages/Allfooddetails";
import Packagedetails from "./Pages/Packagedetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcomepage />}></Route>
          <Route path="/obone" element={<Onboardingone />}></Route>
          <Route path="/obtwo" element={<Onboardingtwo />}></Route>
          <Route path="/obthree" element={<Onboardingthree />}></Route>
          <Route path="/lyi" element={<Letyouin />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/editprofile" element={<Editprofile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/mrb" element={<Mostrecentlybooking />}></Route>
          <Route path="/searchpage" element={<Search />}></Route>
          <Route path="/mybookmark" element={<Mybookmark />}></Route>
          <Route path="/hoteldetails" element={<Hoteldetails />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/sbs" element={<Sbs />}></Route>
          <Route path="/addpromocode" element={<Addpromocode />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route
            path="/bookinginformation"
            element={<Bookinginformation />}
          ></Route>
          <Route path="/addcard" element={<Addcard />}></Route>
          <Route path="/confirmpayment" element={<Confirmpayment />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/allbooking" element={<Allbooking />}></Route>
          <Route path="/viewticket" element={<Viewticket />}></Route>
          <Route path="/helpcenter" element={<Helpcenter />}></Route>
          <Route path="/security" element={<Security />}></Route>
          <Route path="/vap" element={<Viewallpackages />}></Route>
          <Route path="/foods" element={<Foods />}></Route>
          <Route path="/fooddetails" element={<Fooddetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/foodcategory" element={<Foodcategory />}>
            {" "}
          </Route>
          <Route path="/foodsubcategory" element={<Foodsubcategory />}></Route>
          <Route path="/allfoods" element={<Allfoods />}></Route>
          <Route path="/allfooddetails" element={<Allfooddetails />}></Route>
          <Route path="/packagedetails" element={<Packagedetails />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
