import React, { Component } from "react";
import "./Slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assest/image/61DUO0NqyyL._SX3000_.jpg";
import logo2 from "../../assest/image/61jovjd+f9L._SX3000_.jpg";
import logo3 from "../../assest/image/61NAdLjXLlL._SX3000_.jpg";
import logo4 from "../../assest/image/71qid7QFWJL._SX3000_.jpg";
import logo5 from "../../assest/image/711Y9Al9RNL._SX3000_.jpg";
class Slide extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="section-slide">
        <div className="section-content">
          <Slider {...settings}>
            <div>
              <img className="img-logo" src={logo1} />
            </div>
            <div>
              <img className="img-logo" src={logo2} />
            </div>
            <div>
              <img className="img-logo" src={logo3} />
            </div>
            <div>
              <img className="img-logo" src={logo4} />
            </div>
            <div>
              <img className="img-logo" src={logo5} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Slide;
