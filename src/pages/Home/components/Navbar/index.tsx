import React from "react";
import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";
// @ts-ignore
import { Logo } from "#components";
import { FiSearch } from "react-icons/fi";
import "./style.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar__middle">
        <div className="middle__features">
          <button>Địa điểm bất kỳ</button>
          <button>tuần bất kỳ</button>
          <button>Thêm khách</button>
        </div>
        <div className="middle__search">
          <div className="search__icon">
            <IconContext.Provider
              value={{ className: "search-icon", size: "16px" }}
            >
              <FiSearch
                style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}
              />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="profile">Profile</div>
    </nav>
  );
};

export default Navbar;
