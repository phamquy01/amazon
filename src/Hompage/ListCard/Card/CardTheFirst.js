import React, { Component } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./CardTheFirst.scss";
class CardTheFirst extends Component {
  render() {
    return (
      <div className="card">
        <Card style={{ padding: "0 20px", borderRadius: 0 }}>
          <CardContent style={{ padding: "16px 0" }}>
            <Typography
              component="h2"
              style={{ fontSize: 21, fontWeight: "700" }}
            >
              {this.props.title}
            </Typography>
          </CardContent>
          <div className="cardforimg">
            <div className="cardforimglist">
              <div className="cardforitem">
                <div className="img-small">
                  <CardMedia
                    className="cardimgitem"
                    height={this.props.height}
                    component="img"
                    image={this.props.img1}
                    alt="green iguana"
                  />
                  <Typography style={{ fontSize: 12, textAlign: "center" }}>
                    {this.props.content1}
                  </Typography>
                </div>
                <Typography style={{ fontSize: 12 }}>
                  {this.props.desc1}
                </Typography>
              </div>
              <div className="cardforitem">
                <div className="img-small">
                  <CardMedia
                    className="cardimgitem"
                    height={this.props.height}
                    component="img"
                    image={this.props.img2}
                    alt="green iguana"
                  />
                  <Typography style={{ fontSize: 12, textAlign: "center" }}>
                    {this.props.content2}
                  </Typography>
                </div>
                <Typography style={{ fontSize: 12 }}>
                  {this.props.desc2}
                </Typography>
              </div>
            </div>
            <div className="cardforimglist">
              <div className="cardforitem">
                <div className="img-small">
                  <CardMedia
                    className="cardimgitem"
                    height={this.props.height}
                    component="img"
                    image={this.props.img3}
                    alt="green iguana"
                  />
                  <Typography style={{ fontSize: 12, textAlign: "center" }}>
                    {this.props.content3}
                  </Typography>
                </div>
                <Typography style={{ fontSize: 12 }}>
                  {this.props.desc3}
                </Typography>
              </div>
              <div className="cardforitem">
                <div className="img-small">
                  <CardMedia
                    className="cardimgitem"
                    height={this.props.height}
                    component="img"
                    image={this.props.img4}
                    alt="green iguana"
                  />
                  <Typography style={{ fontSize: 12, textAlign: "center" }}>
                    {this.props.content4}
                  </Typography>
                </div>
                <Typography style={{ fontSize: 12 }}>
                  {this.props.desc4}
                </Typography>
              </div>
            </div>
          </div>
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

export default CardTheFirst;
