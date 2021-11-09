import React from "react";
import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  corousel: {
    marginTop: 10,
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay="true"
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#FFFFFF",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.corousel}
    >
      {bannerData.map((img) => (
        <img src={img} alt="img" className={classes.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
