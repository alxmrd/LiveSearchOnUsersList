import React from "react";
import List from "@material-ui/core/List";
import UserCard from "./UserCard";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/actions";

const styles = theme => ({
  root: {
    width: "93%",
    //maxWidth: 360,
    marginLeft: "35px",
    marginRight: "30px"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
});

class UserList extends React.Component {
  componentDidMount() {
    this.props.onfetchUsers();
  }
  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        <UserCard />
      </List>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onfetchUsers: () => fetchUsers(dispatch)
});

const mapStateToProps = state => ({
  users: state.users
});

const UserListWithStyles = withStyles(styles)(UserList);
export default connect(mapStateToProps, mapDispatchToProps)(UserListWithStyles);
