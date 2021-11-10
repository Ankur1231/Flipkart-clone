import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { ImageURL } from "../../constants/data";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
});

const MidSection = () => {
  const classes = useStyles();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Box className={classes.wrapper}>
        {ImageURL.map((img) => (
          <img src={img} style={{ width: "33%" }} alt="pic" />
        ))}
      </Box>
      <img
        src={coronaURL}
        alt="corona"
        style={{ width: "100%", marginTop: 20 }}
      />
    </>
  );
};

export default MidSection;
