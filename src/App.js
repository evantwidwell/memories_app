import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles'
import { getPosts } from './actions/posts'
import memories from './images/memories.png';
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId, dispatch])
  return(
    <Container maxWidth='lg'>
      <AppBar className = {classes.appBar} position="static" color="inherit">
        <Typography className = {classes.heading} variant="h2" align="center">Memories</Typography>
        <img className = {classes.image}src={memories} alt="memories" height="60" ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className = {classes.mainContainer}container justify="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default  App;