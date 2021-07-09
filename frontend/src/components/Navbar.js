import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  },
  navButton: {
    color: 'white'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} component={Link} to="/">
          ☀️ SkyCast
        </Typography>
        <Button className={classes.navButton} component={Link} to="/">Home</Button>
        <Button className={classes.navButton} component={Link} to="/docs">API Docs</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
