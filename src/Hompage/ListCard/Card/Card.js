import React, { Component } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./Card.scss";
class CardStore extends Component {
  render() {
    return (
      <div className="card">
        <Card style={{ padding: "0 20px", borderRadius: 0 }}>
          <CardContent style={{ padding: "16px 0", fontWeight: "700" }}>
            <Typography
              component="h2"
              style={{ fontSize: 21, fontWeight: "700" }}
            >
              {this.props.title}
            </Typography>
          </CardContent>
          <CardMedia
            className="card-img"
            height={this.props.height}
            width="300"
            component="img"
            image={this.props.img}
            alt="green iguana"
          />
          <CardContent style={{ padding: "16px 0" }}>
            <Typography>
              <a className="card-a" href="#">
                {this.props.a}
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CardStore;
