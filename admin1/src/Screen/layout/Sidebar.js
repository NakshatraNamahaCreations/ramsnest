import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaCamera,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

function Sidebar() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="v">
      <ProSidebar width="200px">
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              Home<Link to="/home"></Link>{" "}
            </MenuItem>
            <MenuItem icon={<FaHeart />}>
              Banner<Link to="/customerbanner"></Link>{" "}
            </MenuItem>
            <SubMenu title="Foods" icon={<FaGem />}>
              <MenuItem>
                Category<Link to="/category"></Link>
              </MenuItem>
              <MenuItem>
                Subcategory<Link to="/subcategory"></Link>
              </MenuItem>
              <MenuItem>
                Foods<Link to="/food"></Link>
              </MenuItem>
              <MenuItem>
                Foods order<Link to="/customerorder"></Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Rooms" icon={<FaGem />}>
              <MenuItem>
                Category<Link to="/category"></Link>
              </MenuItem>
              <MenuItem>
                Subcategory<Link to="/subcategory"></Link>
              </MenuItem>
              <MenuItem>
                Foods<Link to="/food"></Link>
              </MenuItem>
              <MenuItem>
                Foods order<Link to="/customerorder"></Link>
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<FaRegLaughWink />}>
             Packages<Link to="/package"></Link>
            </MenuItem>
          
              <MenuItem icon={<FaCamera />}>
               Notification<Link to="/notification"></Link>
              </MenuItem>
             

            <MenuItem icon={<FaUser />}>
              Customers<Link to="/customer"></Link>
            </MenuItem>
            <MenuItem icon={<FaList />}>
              Promocode<Link to="/promocode"></Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
       

          <div style={{ height: "400px" }}></div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
