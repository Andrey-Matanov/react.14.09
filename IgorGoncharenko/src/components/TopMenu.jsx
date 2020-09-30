import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Face";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <MenuItem>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </MenuItem>
        </Link>
        <Link to="about">
          <MenuItem>
            <Typography variant="h6" className={classes.title}>
              About
            </Typography>
          </MenuItem>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
