import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideBook.scss";
import { Typography } from "@mui/material";
import apparel1 from "../../../assest/image/imgapparel/41Jy4btGZL._AC_SY195_.jpg";
import apparel2 from "../../../assest/image/imgapparel/61a2iQgVuS._AC_SY200_.jpg";
import apparel3 from "../../../assest/image/imgapparel/61EKpb7tBdL._AC_SY200_.jpg";
import apparel4 from "../../../assest/image/imgapparel/71Cf4vcWoeL._AC_SY195_.jpg";
import apparel5 from "../../../assest/image/imgapparel/71cI0CYAg3L._AC_SY200_.jpg";
import apparel6 from "../../../assest/image/imgapparel/71Hb7IagUWS._AC_SY200_.jpg";
import apparel7 from "../../../assest/image/imgapparel/71wW3feC4lL._AC_SY200_.jpg";
import apparel8 from "../../../assest/image/imgapparel/81E9bnzHtpL._AC_SY200_.jpg";
import apparel9 from "../../../assest/image/imgapparel/91BdX7N8yL._AC_SY200_.jpg";
import apparel10 from "../../../assest/image/imgapparel/611lFFDpzJL._AC_SY200_.jpg";

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
              <img className="img-book" src={apparel1} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel2} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel3} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel4} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel5} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel6} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel7} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel8} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel9} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={apparel10} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlideApparel;
