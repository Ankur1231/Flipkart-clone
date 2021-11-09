import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login: {
    background: "#FFFFFF",
    color: "#2874F0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    textDecoration: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    textDecoration: "none",
    alignItems: "center",

    "& > *": {
      marginRight: 50,
      textDecoration: "none",
    },
  },
  component: {
    display: "flex",
  },
});

const HeaderButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Link to="/login">
        {" "}
        <Button variant="contained" className={classes.login}>
          Login
        </Button>
      </Link>
      <Link to="">
        {" "}
        <Typography
          style={{ marginTop: "4px", fontSize: "14px", color: "#FFF" }}
        >
          More
        </Typography>
      </Link>

      <Box className={classes.component}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Link
          to="/cart"
          style={{ marginLeft: "10px", textDecoration: "none", color: "#FFF" }}
        >
          Cart
        </Link>{" "}
      </Box>
    </Box>
  );
};

export default HeaderButton;
