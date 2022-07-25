import "./FooterTop.scss";
import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
class FooterTop extends Component {
  render() {
    return (
      <div className="footer-container">
        <Grid container spacing={7}>
          <Grid item sm={3}>
            <Typography
              component="p"
              variant="subtitle2"
              marginBottom={"10px"}
              style={{ fontSize: 15, fontWeight: "700" }}
            >
              Get to Know Us
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Careers
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                blog
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                About Amazon
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Investor Relations
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon Devices
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon Science
              </a>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="p"
              variant="subtitle2"
              marginBottom={"10px"}
              style={{ fontSize: 15, fontWeight: "700" }}
            >
              Make Money with Us
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Sell products on Amazon
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Sell on Amazon Business
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Sell app on Amazon
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Become an Affilate
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Advertise your product{" "}
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Sell publich with Us
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Host an Amazon Hub
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                See More Make Money with Us
              </a>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="p"
              variant="subtitle2"
              marginBottom={"10px"}
              style={{ fontSize: 15, fontWeight: "700" }}
            >
              Amazon Payment Products
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon Business Card
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Shop with Points
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Reload Your Balance
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon Currency Converter
              </a>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="p"
              variant="subtitle2"
              marginBottom={"10px"}
              style={{ fontSize: 15, fontWeight: "700" }}
            >
              Let Us Help You
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon and COVID-19
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Your Account
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Your Orders
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Shipping Rates & Policies
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Returns & Replacements
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Manage Your Content and Devices
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Amazon Assistant
              </a>
            </Typography>
            <Typography component="p" variant="subtitle2" marginBottom={"10px"}>
              <a href="#" className="post">
                Help
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FooterTop;
