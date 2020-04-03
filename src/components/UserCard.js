import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import RemoveIcon from "@material-ui/icons/Remove";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import userIcon from "../assets/user.jpg";
import Divider from "@material-ui/core/Divider";
import loader from "./loader.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  text: {
    marginLeft: "10px",
    marginRight: "10px"
  }
}));

export default function UserCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const handleExpandClick = id => {
    console.log(id);
    const bool = users[id].boolean;
    console.log(users[id].boolean);
    setExpanded(!expanded);
  };
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setUsers(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div class="loader"></div>;
  } else {
    users.map(user => (user["boolean"] = false));
    return users.map(user => (
      <ListItem key={user.id}>
        <Card className={classes.root}>
          <CardActions disableSpacing>
            <Typography className={classes.text}>{user.name}</Typography>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={id => handleExpandClick(user.id)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider />
            <CardHeader
              avatar={
                <Avatar
                  aria-label={user.name}
                  className={classes.avatar}
                  src={userIcon}
                />
              }
              title={user.email}
              subheader={
                <div>
                  <div>{user.address.street + ", " + user.address.suite} </div>
                  <div>{user.address.zipcode + ", " + user.address.city} </div>
                </div>
              }
            />
          </Collapse>
        </Card>
      </ListItem>
    ));
  }
}
