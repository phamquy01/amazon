import "./FooterCenter.scss";
import React, { Component } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import Radio from "./Radio";
import logo from "../../../assest/image/amazon.png";
import { BiDollar } from "react-icons/bi";
import { GiAmericanShield } from "react-icons/gi";
class FooterCenter extends Component {
  render() {
    return (
      <div className="nav-footer">
        <div className="img-logo-footer">
          <img
            src={logo}
            alt="logosmall"
            style={{
              width: 76,
              height: 23,
              padding: "18px 0 0 18px",
            }}
          />
        </div>
        <div className="controller">
          <div className="language">
            <div className="language-dropdown">
              <LanguageIcon style={{ fontSize: 18 }} />
              <span className="dropdown-select">English</span>
              <ArrowDropDownIcon style={{ fontSize: 18 }} />
            </div>
            <div className="language-list">
              <div className="language-item">
                <Radio />
              </div>
            </div>
          </div>
          <div className="dollar">
            <div className="dollar-container">
              <BiDollar style={{ fontSize: 18, margin: "0 5px 0" }} />
              <span className="dropdown-span">USD - U.S. Dollar</span>
            </div>
          </div>
          <div className="country">
            <div className="country-flag">
              <GiAmericanShield style={{ fontSize: 18, margin: "0 5px 0" }} />
              <span className="country-span">USD - U.S. Dollar</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterCenter;
