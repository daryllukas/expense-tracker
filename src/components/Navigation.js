import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Expense Tracker
          </Typography>
          <Button color="inherit" onClick={() => history.push(ROUTES.HOME)}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push(ROUTES.SIGN_UP)}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={() => history.push(ROUTES.SIGN_IN)}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
