import React from "react";
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
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { expandCard } from "../store/actions/actions";
import "./loader.css";

const styles = theme => ({
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
});

class UserCard extends React.Component {
  render() {
    const { classes, users, id } = this.props;

    return (
      <React.Fragment>
        {users.length > 0 ? (
          users.map(user => (
            <ListItem key={user.id}>
              <Card className={classes.root}>
                <CardActions disableSpacing>
                  <Typography className={classes.text}>{user.name}</Typography>

                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: user.id === id
                    })}
                    onClick={id => this.props.onExpand(user.id)}
                    aria-expanded={user.id === id}
                    aria-label="show more"
                  >
                    {user.id === id ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </CardActions>

                <Collapse in={user.id === id} timeout="auto" unmountOnExit>
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
                        <div>
                          {user.address.street + ", " + user.address.suite}{" "}
                        </div>
                        <div>
                          {user.address.zipcode + ", " + user.address.city}{" "}
                        </div>
                      </div>
                    }
                  />
                </Collapse>
              </Card>
            </ListItem>
          ))
        ) : (
          <div className="loader"></div>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onExpand: id => dispatch(expandCard(id))
});

const mapStateToProps = state => ({
  users: state.users,
  id: state.id
});
const UserCardWithStyles = withStyles(styles)(UserCard);
export default connect(mapStateToProps, mapDispatchToProps)(UserCardWithStyles);
