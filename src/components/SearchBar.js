import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  searchBar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 700,
    margin: "50px",
    marginBottom: "0px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  text: {
    marginTop: "50px",
    marginRight: "80px",
    marginLeft: "50px"
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Paper className={classes.searchBar}>
        <InputBase
          className={classes.input}
          placeholder="Search by name"
          // inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Typography variant="h4" className={classes.text}>
        5 People
      </Typography>
    </Grid>
  );
}
