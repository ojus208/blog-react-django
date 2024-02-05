import React from "react";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import "../assets/css/navbarold.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <MenuOutlinedIcon style={{ height: "40px" }} />
        <div className="logodiv">
          <Logo />
        </div>
      </div>

      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="useractions">
        <Actions />
        <Useractions />
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <>
      <span className="logoword">O</span>
      <span className="logoword">P</span>
      <span className="logoword">P</span>
      <span className="logoword">S</span>
    </>
  );
};

const Actions = () => {
  return (
    <div className="actiondiv">
      <div className="action activeaction">
      <HomeIcon fontSize=" inherit" />
      </div>
      <div className="action">
      <ExploreOutlinedIcon fontSize=" inherit" />
      </div>
      <div className="action">
        <GroupOutlinedIcon fontSize=" inherit" />
      </div>
      <div className="action">
        <NotificationsOutlinedIcon fontSize=" inherit" />
      </div>
    </div>
  );
};

const Searchbar = () => {
  return (
    <div className="searchbardiv">
      <input type="text" name="search" placeholder="Search......" />
      <button>
        <SearchOutlinedIcon />
      </button>
    </div>
  );
};

const Useractions = () => {
  return (
    <div className="useractiondiv">
      <PersonAddAltOutlinedIcon fontSize="inherit" />
    </div>
  );
};
