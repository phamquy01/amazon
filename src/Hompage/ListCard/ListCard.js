import React, { Component } from "react";
import "./ListCard.scss";
import CardStore from "./Card/Card";
import CradLogin from "./Card/CardLogin";
import anh from "../../assest/image/amazonbasics_520x520._SY304_CB442725065_.jpg";
import anh1 from "../../assest/image/Fuji_LunarNY_dash_Jan22_zhTW._SY304_CB649046262_.jpg";
import anh2 from "../../assest/image/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg";
import anh3 from "../../assest/image/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg";
import anh4 from "../../assest/image/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg";
import chuot from "../../assest/image/chuot.jpg";
import banphim from "../../assest/image/banphim.jpg";
import ghe from "../../assest/image/ghe.jpg";
import tainghe from "../../assest/image/tainghe.jpg";
import laptop from "../../assest/image/laptop.jpg";
import maycamtay from "../../assest/image/maycamtay.jpg";
import maycamtaydochoi from "../../assest/image/maycamtaydochoi.jpg";
import quacau from "../../assest/image/quacau.jpg";
import ao from "../../assest/image/ao.jpg";
import jogger from "../../assest/image/jogger.jpg";
import cadigans from "../../assest/image/cadigans.jpg";
import tees from "../../assest/image/tees.jpg";
import dongho from "../../assest/image/dongho.jpg";
import bookipad from "../../assest/image/bookipad.jpg";
import pet from "../../assest/image/pet.jpg";
import toys from "../../assest/image/toys.jpg";
import shoplaptop from "../../assest/image/shoplaptop.jpg";
import fitness from "../../assest/image/fitness.jpg";

import ScrollButton from "../Footer/BackToTop/BackToTop";
import FooterTop from "../Footer/FooterTop/FooterTop";
import FooterCenter from "../Footer/FooterCenter/FooterCenter";
import FooterBottom from "../Footer/FooterBottom/FooterBottom";
import SlideBook from "./SlideCard/SlideBook";
import SlideKitchen from "./SlideCard/SlideKitchen";
import SlidePC from "./SlideCard/SlidePC";
import SlideApparel from "./SlideCard/SlideApparel";
import CardTheFirst from "./Card/CardTheFirst";
import CardTheSecond from "./Card/CardTheSecond";

class ListCard extends Component {
  render() {
    return (
      <div className="card-container">
        <CardTheFirst
          title="Gaming accessories"
          a="See more"
          img1={tainghe}
          img2={banphim}
          img3={chuot}
          img4={ghe}
          desc1="Headsets"
          desc2="keyboards"
          desc3="computer mice"
          desc4="chairs"
        />
        <CardTheSecond
          title="Shop by Category"
          a="Shop now"
          img1={laptop}
          img2={maycamtay}
          img3={maycamtaydochoi}
          img4={quacau}
          content1="Computer & accessories"
          content2="Video games"
          content3="Baby"
          content4="Toys & games"
        />
        <CardStore title="AmazonBasics" a="See more" img={anh} height="300" />
        <CradLogin />
        <CardStore
          title="Lunar New Year"
          a="Shop now"
          img={anh1}
          height="300"
        />
        <CardStore
          title="Computers & Accessories"
          a="See more"
          img={anh2}
          height="300"
        />
        <CardStore
          title="Find your ideal TV"
          a="See more"
          img={anh3}
          height="300"
        />
        <CardStore title="Electronics" a="Learn more" img={anh4} height="300" />
        <SlideBook title="Top Sellers in Books for you" />
        <SlideKitchen title="Popular products in PC internationally" />
        <CardTheFirst
          title="Comfy styles for her"
          a="See more"
          img1={ao}
          img2={jogger}
          img3={cadigans}
          img4={tees}
          desc1="sweatshirts "
          desc2="Jogger"
          desc3="Cadigans"
          desc4="Easy tees"
        />
        <CardStore
          title="Shop activity trackers and smartwatches"
          a="Shop now"
          img={dongho}
          height="268"
        />
        <CardStore
          title="Comfy styles for her"
          a="Learn more"
          img={anh4}
          height="300"
        />
        <CardStore
          title="Kindle E readers"
          a="Learn more"
          img={bookipad}
          height="300"
        />
        <SlideApparel title="Top Sellers in Baby Products for you" />
        <SlidePC title=" International top sellers in Kitchen" />
        <CardStore
          title="Shop Pet supplies"
          a="See more"
          img={pet}
          height="300"
        />
        <CardStore
          title="New arrivals in Toys"
          a="Shop now"
          img={toys}
          height="300"
        />
        <CardStore
          title="Shop Laptops & Tablets"
          a="See more"
          img={shoplaptop}
          height="300"
        />
        <CardStore
          title="For your Fitness Needs"
          a="Shop Now"
          img={fitness}
          height="300"
        />
        <ScrollButton />
        <FooterTop />
        <FooterCenter />
        <FooterBottom />
      </div>
    );
  }
}

export default ListCard;
