import React, { useState } from 'react';
import Header from './Header';
import './Signup.scss';
import { api } from '../api';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer';

const colortheme = createMuiTheme({
  palette: {
    primary: { main: '#fff' }
  }
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Signup = props => {
  const [userFirstName, setFirstName] = useState();
  const [userLastName, setLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const [userPic, setUserPic] = useState();

  const classes = useStyles();

  const signupForm = async event => {
    event.preventDefault();
    await api
      .post('/signup', {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPass,
        displayPicture: userPic
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      })
      .catch(function(error) {
        console.log('Sign Up Error: ', error);
      });
    props.history.push('/');
  };

  return (
    <div className="signup_main">
      <div className="signup_header"></div>
      <div className="signup_section">
        <Header />
        <div className="signup_main_wrapper">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <MuiThemeProvider theme={colortheme}>
                <Typography component="h1" variant="h5" color="primary">
                  Sign up
                </Typography>
              </MuiThemeProvider>
              <form className={classes.form} onSubmit={signupForm}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={e => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={e => setUserEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={e => setUserPass(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      name="displayPicture"
                      label="Display Picture URL"
                      type="text"
                      id="displayPicture"
                      onChange={e => setUserPic(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </form>
            </div>
            <Box mt={5}></Box>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Signup);
