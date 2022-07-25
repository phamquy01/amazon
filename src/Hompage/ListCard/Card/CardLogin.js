import React, { Component } from "react";
import thunghop from "../../../assest/image/thunghop.jpg";

import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./CardLogin.scss";
class CardLogin extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: 312, height: 150, borderRadius: 0 }}>
          <CardContent style={{ padding: "16px" }}>
            <Typography
              component="h2"
              style={{ fontSize: 21, fontWeight: "700" }}
            >
              Sign in for the best experience
            </Typography>
            <button className="btn-card-signin" type="submit">
              Sign in Securely
            </button>
          </CardContent>
        </Card>
        <Card
          style={{
            width: 300,
            height: 250,
            margin: "20px 6px",
            borderRadius: 0,
          }}
        >
          <CardMedia
            m="20px 0"
            className="card-img"
            height="250"
            width="312"
            component="img"
            image={thunghop}
            alt="green iguana"
          />
        </Card>
      </div>
    );
  }
}

export default CardLogin;
