import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 99999,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .4)',
  },
}));

const LoadingBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
};

export default LoadingBar;
