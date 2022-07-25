import React, { Component } from "react";
import "./SlideKitchen.scss";
import kit1 from "../../../assest/image/imgkitchen/31yGL1k8LaL._AC_SY200_.jpg";
import kit2 from "../../../assest/image/imgkitchen/61b-KGjhnOL._AC_SY200_.jpg";
import kit3 from "../../../assest/image/imgkitchen/61Rmo6TPAjL._AC_SY200_.jpg";
import kit4 from "../../../assest/image/imgkitchen/61VvYq9P-OL._AC_SY200_.jpg";
import kit5 from "../../../assest/image/imgkitchen/61x9z7teAUL._AC_SY200_.jpg";
import kit6 from "../../../assest/image/imgkitchen/71A98Pq8eqL._AC_SY200_.jpg";
import kit7 from "../../../assest/image/imgkitchen/71awztfrCUL._AC_SY200_.jpg";
import kit8 from "../../../assest/image/imgkitchen/71lHY-MXOdL._AC_SY200_.jpg";
import kit9 from "../../../assest/image/imgkitchen/71nA60a7ZS._AC_SY200_.jpg";
import kit10 from "../../../assest/image/imgkitchen/71NwXbY6nL._AC_SY200_.jpg";
import { Typography } from "@mui/material";
import Slider from "react-slick";

class SlideKitchen extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
    };
    return (
      <div className="section-slide-kitchen">
        <div className="section-content-kitchen">
          <Typography
            component="h2"
            style={{ fontSize: 21, fontWeight: "700", margin: "0 5px" }}
          >
            {" "}
            {this.props.title}
          </Typography>
          <Slider {...settings}>
            <div className="img-customize">
              <img className="img-book" src={kit1} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit2} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit3} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit3} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit4} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit5} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit6} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit7} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit8} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit9} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={kit10} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlideKitchen;
