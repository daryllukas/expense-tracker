import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import AuthUserContext from '../context/Session';
import { AppwriteContext } from '../components/Appwrite';

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
  const authUser = useContext(AuthUserContext);
  const appwrite = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite
      .doLogout()
      .then((res) => {
        history.push(ROUTES.LANDING);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Expense Tracker
          </Typography>
          {authUser !== null ? (
            <>
              {authUser.name && (
                <Box mr={3}>
                  <Typography variant="h6" color="inherit">
                    Hello, {authUser.name}
                  </Typography>
                </Box>
              )}
              <Button color="inherit" onClick={() => history.push(ROUTES.HOME)}>
                Home
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => history.push(ROUTES.SIGN_UP)}
              >
                Sign Up
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push(ROUTES.SIGN_IN)}
              >
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
