import React from "react";
import { Box, makeStyles } from "@material-ui/core";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    padding: 5,
    background: "#FFFFFF",
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

const Home = () => {
  const classes = useStyles();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title={"Deal of the day"} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title={"Discounts for you"} />
        <Slide timer={false} title={"Suggested items"} />
        <Slide timer={false} title={"Top selection"} />
        <Slide timer={false} title={"Recommended items"} />
        <Slide timer={false} title={"Best Sellers"} />
      </Box>
    </div>
  );
};

export default Home;
