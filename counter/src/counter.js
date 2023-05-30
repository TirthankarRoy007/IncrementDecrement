import React, { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    minWidth: '40px',
    padding: theme.spacing(1),
    margin: theme.spacing(0.1),
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  counter: {
    margin: theme.spacing(0, 2),
    fontWeight: 'bold',
    fontSize: '2rem',
  },
}));

const Counter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementByTen = () => {
    setCount(count + 10);
  };

  const handleDecrementByTen = () => {
    setCount(count - 10);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleIncrement}
          >
            ↑
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDecrementByTen}
          >
            ←
          </Button>
          <Typography variant="h4" className={classes.counter}>
            {count}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleIncrementByTen}
          >
            →
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDecrement}
          >
            ↓
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Counter;