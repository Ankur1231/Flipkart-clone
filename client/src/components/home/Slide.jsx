import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/data";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";

const useStyles = makeStyles({
  component: {
    marginTop: "12px",
    background: "#FFFFFF",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 150,
  },
  button: {
    marginLeft: "auto",
    background: "#2870f4",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 15px",
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ timer, title }) => {
  const classes = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <>
            <img src={timerURL} alt="time" style={{ width: "24px" }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View All
            </Button>
          </>
        )}
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((data) => (
          <Box textAlign="center" className={classes.wrapper}>
            <img src={data.url} alt="img" className={classes.image} />
            <Typography className={classes.text} style={{ fontWeight: 600 }}>
              {data.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {data.discount}
            </Typography>
            <Typography className={classes.text}>{data.tagline}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
