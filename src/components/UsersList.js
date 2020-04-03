import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import UserCard from "./UserCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "93%",
    //maxWidth: 360,
    marginLeft: "35px",
    marginRight: "30px"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function UserList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <UserCard />
    </List>
  );
}
