import React from "react";
import { makeStyles, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",
    display: "flex",
    marginLeft: 10,
    width: "38%",
  },
  searchIcon: {
    padding: 5,
    height: "100%",
    color: "blue",
    display: "flex",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more ..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
