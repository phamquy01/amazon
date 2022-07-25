import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideBook.scss";
import { Typography } from "@mui/material";
import PC1 from "../../../assest/image/imgPC/51DpOA3FvOL._AC_SY200_.jpg";
import PC2 from "../../../assest/image/imgPC/61DYLoyNRWL._AC_SY200_.jpg";
import PC3 from "../../../assest/image/imgPC/61tJ1lpR3L._AC_SY200_.jpg";
import PC4 from "../../../assest/image/imgPC/61vfGTlXSbL._AC_SY200_.jpg";
import PC5 from "../../../assest/image/imgPC/61vGQNUEsGL._AC_SY200_.jpg";
import PC6 from "../../../assest/image/imgPC/71AAVqtFfvL._AC_SY200_.jpg";
import PC7 from "../../../assest/image/imgPC/71J4Q8zM72L._AC_SY200_.jpg";
import PC8 from "../../../assest/image/imgPC/71qA45tWZ5L._AC_SY200_.jpg";
import PC9 from "../../../assest/image/imgPC/71SvgLer5wL._AC_SY200_.jpg";
import PC10 from "../../../assest/image/imgPC/81IC5bWDgL._AC_SY200_.jpg";

class SlideApparel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
    };
    return (
      <div className="section-slide-book">
        <div className="section-content-book">
          <Typography
            component="h2"
            style={{ fontSize: 21, fontWeight: "700", margin: "0 5px" }}
          >
            {" "}
            {this.props.title}
          </Typography>
          <Slider {...settings}>
            <div className="img-customize">
              <img className="img-book" src={PC1} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC2} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC3} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC4} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC5} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC6} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC7} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC8} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC9} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={PC10} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlideApparel;
