import React, { Component } from "react";
import { Grid, Typography, Button } from "@mui/material";
import logo from "../../assest/image/amazon.png";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Drawer from "../Headerbottom/Drawer";
import Slide from "../Slide/Slide";
import ListCard from "../ListCard/ListCard";
import { GiAmericanShield } from "react-icons/gi";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Radio from "../Footer/FooterCenter/Radio";
import cart from "../../assest/image/cart.png";

import "./Headercss.scss";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Grid
          container
          spacing={1}
          style={{
            backgroundColor: "#131921",
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item style={{ height: "100%" }}>
            <img src={logo} alt="logo" className="logoamazon" style={{}} />{" "}
          </Grid>
          <Grid item>
            <div className="locate-group">
              <FmdGoodTwoToneIcon style={{ color: "#fff", fontSize: 22 }} />
              <div className="locate">
                <Typography
                  variant="body1"
                  style={{ color: "#ccc", fontSize: 12 }}
                >
                  Deliver to
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#fff", fontWeight: "700", fontSize: 14 }}
                >
                  Vietnam
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <Paper
              component="form"
              sx={{
                p: "2px 0",
                display: "flex",
                alignItems: "center",
                width: 738,
                height: 36,
                margin: "11px",
              }}
            >
              <FormControl sx={{ m: 0, minWidth: 80 }}>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  style={{
                    height: 40,
                    backgroundColor: "#ccc",
                    borderRadius: "4px 0 0 4px",
                    fontSize: 14,
                  }}
                  defaultValue={0}
                >
                  <MenuItem style={{ fontSize: 12 }} value={0}>
                    All
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={10}>
                    All Departments
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={20}>
                    Arts & Crafts
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={30}>
                    Automotive
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={40}>
                    Baby
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={50}>
                    Beauty & Personal Care
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={60}>
                    Books
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={70}>
                    Boys' Fashion
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={80}>
                    Computer
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={90}>
                    Deals
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={100}>
                    Digital Music
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={110}>
                    Electronic
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={120}>
                    Girls' Fashion
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={130}>
                    Electronic
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={140}>
                    Health & Household
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={150}>
                    Home & Kitchen
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={160}>
                    Industrial & Cientific
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={170}>
                    Kindle Store
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={180}>
                    Luggage
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={190}>
                    Mens' Fashion
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={200}>
                    Movies & TV
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12 }} value={210}>
                    Music, CDs &vinyl
                  </MenuItem>
                </Select>
              </FormControl>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                // placeholder="Search Google Maps"
                // inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "15px" }} aria-label="search">
                <SearchIcon
                  style={{
                    backgroundColor: "orange",
                    padding: "8px",
                    position: "absolute",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                  }}
                />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <div className="country-language">
              <GiAmericanShield style={{ fontSize: 25 }} />
              <ArrowDropDownIcon style={{ fontSize: 18 }} />
              <div className="country-language-list">
                <div className="country-language-item">
                  <Radio />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <div className="sign-in">
              <span className="signin-hello">Hello, Sign in</span>
              <div className="signin-text">
                <p>Account & Lists</p>
                <ArrowDropDownIcon style={{ fontSize: 18 }} />
              </div>
              <div className="singin-list">
                <div className="signin-item"></div>
              </div>
            </div>
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <div className="order">
              <span className="order-top">Returns</span>
              <div className="order-bottom">
                <p>& Order</p>
              </div>
            </div>
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <div className="cart">
              <img src={cart} alt="cart" />
              <span className="cart-number">0</span>
              <div className="cart-text">
                <p>Cart</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{ backgroundColor: "#232f3e", height: 40, marginTop: 0 }}
        >
          <Drawer />
          <Button
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Today's Deals
          </Button>
          <Button
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Customer Service
          </Button>
          <Button
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Registry
          </Button>
          <Button
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Gift Cards{" "}
          </Button>
          <Button style={{ color: "#fff", textTransform: "capitalize" }}>
            Sell
          </Button>
        </Grid>
        <Slide />
        <ListCard />
      </div>
    );
  }
}

export default Header;
