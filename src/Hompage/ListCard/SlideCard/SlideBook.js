import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideBook.scss";
import { Typography } from "@mui/material";
// import book1 from "../../../assest/image/61DUO0NqyyL._SX3000_.jpg";
// import book2 from "../../../assest/image/71qid7QFWJL._SX3000_.jpg";
import book1 from "../../../assest/image/imgbook/61BCx3mMAGL._AC_SY200_.jpg";
import book2 from "../../../assest/image/imgbook/61Haa9rjZSL._AC_SY200_.jpg";
import book3 from "../../../assest/image/imgbook/61Uoxm3ohQS._AC_SY200_.jpg";
import book4 from "../../../assest/image/imgbook/61zGOvBSgAL._AC_SY200_.jpg";
import book5 from "../../../assest/image/imgbook/71aMpgf078L._AC_SY200_.jpg";
import book6 from "../../../assest/image/imgbook/71MRvjESS9L._AC_SY200_.jpg";
import book7 from "../../../assest/image/imgbook/71slsnNNChL._AC_SY200_.jpg";
import book8 from "../../../assest/image/imgbook/81fr0n799EL._AC_SY200_.jpg";
import book9 from "../../../assest/image/imgbook/81FxtWFGiiL._AC_SY200_.jpg";
import book10 from "../../../assest/image/imgbook/81IbsvjLolL._AC_SY200_.jpg";
import book11 from "../../../assest/image/imgbook/81k1b6u4YvL._AC_SY200_.jpg";
import book12 from "../../../assest/image/imgbook/81m6us1KNaL._AC_SY200_.jpg";
import book13 from "../../../assest/image/imgbook/81Nc7imfMyL._AC_SY200_.jpg";
import book14 from "../../../assest/image/imgbook/81NxXxzz6jL._AC_SY200_.jpg";
import book15 from "../../../assest/image/imgbook/81nzxODnaJL._AC_SY200_.jpg";
import book16 from "../../../assest/image/imgbook/81okm4IpfL._AC_SY200_.jpg";
import book17 from "../../../assest/image/imgbook/81UBpZdEFL._AC_SY200_.jpg";
import book18 from "../../../assest/image/imgbook/81vTRhCo4sL._AC_SY200_.jpg";
import book19 from "../../../assest/image/imgbook/91bubfjkTPS._AC_SY200_.jpg";
import book20 from "../../../assest/image/imgbook/91K20PnjefL._AC_SY200_.jpg";
import book21 from "../../../assest/image/imgbook/91pdllYEUfL._AC_SY200_.jpg";
import book22 from "../../../assest/image/imgbook/91UvdebBM-L._AC_SY200_.jpg";
import book23 from "../../../assest/image/imgbook/617uZq23IPL._AC_SY200_.jpg";
import book24 from "../../../assest/image/imgbook/715nIJJGIfL._AC_SY200_.jpg";
import book25 from "../../../assest/image/imgbook/810e52BTWAL._AC_SY200_.jpg";

class SlideBook extends Component {
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
              <img className="img-book" src={book1} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book2} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book3} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book4} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book5} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book6} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book7} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book8} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book9} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book10} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book11} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book12} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book13} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book14} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book15} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book16} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book17} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book18} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book19} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book20} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book21} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book22} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book23} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book24} />
            </div>
            <div className="img-customize">
              <img className="img-book" src={book25} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlideBook;
