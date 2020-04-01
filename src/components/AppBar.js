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
    marginLeft: 30
  },
  bottomToolbar: {
    background: "#E5E5E5",
    minHeight: "5px"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.miniAppBar} />
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo" />
          </Typography>
        </Toolbar>
        <Toolbar className={classes.bottomToolbar} />
      </AppBar>
    </div>
  );
}
