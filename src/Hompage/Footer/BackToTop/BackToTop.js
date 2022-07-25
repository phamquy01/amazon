import React, { Component } from "react";
import { useState } from "react";
import "./BackToTop.scss";
import { Button } from "@mui/material";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="backtotop"
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
        borderRadius: 0,
        backgroundColor: "#37475a",
        width: "100%",
        padding: "15px 0px",
        color: "#fff",
        textTransform: "inherit",
      }}
    >
      Back to top
    </Button>
  );
};

export default ScrollButton;
