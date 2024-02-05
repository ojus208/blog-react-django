import React, { useState } from "react";
import "../assets/css/sidebar.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Link } from "react-router-dom";
import cx from "classnames";

export default function Sidebar() {
  const [userloggedin, setuserloggedin] = useState(false);
  const [action, setaction] = useState("Home");

  const updateaction = (e) => {
    console.log(e.this.id);
  };

  const navigationlist = ["Home", "Search", "Explore"];

  return (
    <div className="sidebar">
      <div className="sb-userinfo">
        {userloggedin ? divuserlogged() : divusernotlogged()}
      </div>
      <hr />
      <div className="sb-useraction">
        {navigationlist.map((nav) => {
          const currentnav = nav;
          return (
            <Link to={nav==='Home' ? '/': '/'+nav} className="navlink" key={nav}>
              <button onClick={()=>{setaction(nav)}}>
              <div className={cx("sb-actions", currentnav === action && " ac-active")}>
                <div className="ac-icon">
                {returnicon(nav)}
                </div>
                <div className="ac-text">{nav}</div>
              </div>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const logo = () => {
  return (
    <div className="logodiv">
      <div className="logobackground">
        <CampaignIcon fontSize="inherit" />
      </div>
      <div className="logotext">Opps</div>
    </div>
  );
};

const divuserlogged = () => {
  return (
    <div className="sb-loggedin">
      <h3>user is logged in </h3>
    </div>
  );
};

const divusernotlogged = () => {
  return (
    <div className="sb-notloggedin">
      {logo()}
      <div className="loginbuttons">
        <button className="login">Login</button>
        <button className="signup">signup</button>
      </div>
    </div>
  );
};

const returnicon = (iconname) => {
  switch (iconname) {
    case "Home":
      return <HomeIcon />;
    case "Search":
      return <SearchOutlinedIcon />;
    case "Explore":
      return <ExploreOutlinedIcon />;
  }
};
