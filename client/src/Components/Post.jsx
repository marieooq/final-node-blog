import React, { useState } from 'react';
import './Post.scss';
import { api } from '../api';
import { withRouter } from 'react-router-dom';
import CKEditor from 'ckeditor4-react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const colortheme = createMuiTheme({
  palette: {
    primary: { main: '#fff' }
  }
});

const postHeaderStyle = {
  height: '50vh',
  backgroundImage: `url("https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1462&q=80")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  verticalAlign: 'top',
  backgroundPosition: 'center center',
  transformOrigin: 'center top',
  transform: 'translateZ(-#{0.5 * 2}px) scale(1 + 0.5 * 2)'
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const categoriesArr = ['Art', 'Event', 'Museum'];
const options = categoriesArr.map(category => (
  <MenuItem value={category}>{category}</MenuItem>
));

const Post = ({ history }) => {
  const [postTitle, setTitle] = useState();
  const [postContent, setContent] = useState();
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');

  const classes = useStyles();

  let user;
  if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
  }

  const postForm = async event => {
    event.preventDefault();
    const post = await api
      .post('/post', {
        userId: user._id,
        title: postTitle,
        content: postContent,
        category: category,
        featuredImage: image
      })
      .then(function(response) {
        history.push('/u/' + user._id);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleTitleChange = value => {
    setTitle(value);
  };

  const handleContentChange = value => {
    setContent(value);
  };

  const handleFeaturedImageChange = value => {
    setImage(value);
  };

  return (
    <div className="post_main">
      <div style={postHeaderStyle}></div>
      <div className="post_section">
        <Header />
        <div className="post_main_wrapper">
          <div className="post_article_wrapper">
            <Container component="main" maxWidth="lg">
              <CssBaseline />
              <div className={classes.paper}>
                <MuiThemeProvider theme={colortheme}>
                  <Typography component="h1" variant="h3" color="primary">
                    Write an Article
                  </Typography>
                </MuiThemeProvider>
                <form className={classes.form} onSubmit={postForm}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="title"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                        onChange={e => handleTitleChange(e.target.value)}
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="category-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="category-label"
                          id="category-select"
                          value={category}
                          onChange={handleCategoryChange}
                        >
                          {options}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="featuredImage"
                        required
                        fullWidth
                        id="featuredImage"
                        label="Featured Image URL"
                        onChange={e =>
                          handleFeaturedImageChange(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CKEditor
                        id="body"
                        onBeforeLoad={CKEDITOR =>
                          (CKEDITOR.disableAutoInline = true)
                        }
                        onChange={evt => setContent(evt.editor.getData())}
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
                    Post
                  </Button>
                </form>
              </div>
              <Box mt={5}></Box>
            </Container>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Post);
