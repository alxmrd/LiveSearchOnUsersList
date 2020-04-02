import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  miniAppBar: {
    background: "#2EA4E4",
    minHeight: "30px"
  },
  appBar: {
    background: "#ffffff",
    height: "80px"
  },

  title: {
    justifyContent: "flex-start",
    marginLeft: 20,
    color: "#B8BDC5"
  },
  bottomToolbar: {
    background: "#E5E5E5",
    minHeight: "5px"
  }
}));

export default function LogoAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.miniAppBar} />
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <img src={logo} alt="logo" />
          <Typography variant="h4" className={classes.title}>
            Team Members
          </Typography>
        </Toolbar>
        <Toolbar className={classes.bottomToolbar} />
      </AppBar>
    </div>
  );
}
