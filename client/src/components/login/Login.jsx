import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2974f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
});

const Login = ({ open, setOpen }) => {
  const classes = useStyles();

  const handelClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handelClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              Get access to your Orders, Wishlist and Recommendation
            </Typography>
          </Box>
          <Box>
            <TextField />
            <TextField />
            <Typography>By continuing, you agree to flipkart's TOS</Typography>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to Flipkart? Create an account</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
