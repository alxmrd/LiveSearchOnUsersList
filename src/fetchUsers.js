import React from "react";
import Typography from "@material-ui/core/Typography";

class FetchUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      namesOfUsers: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true
          });
          const users = result;
          users.forEach(user => {
            this.state.namesOfUsers.push(user.name);
          });
          return this.state.namesOfUsers;
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, namesOfUsers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>{namesOfUsers[0]}</div>;
    } else {
      return <Typography>{namesOfUsers[0]}</Typography>;
    }
  }
}
export default FetchUsers;
