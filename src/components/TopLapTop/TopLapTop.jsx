import * as React from 'react';
import Grid from '@mui/material/Grid';

import useStyles from './topLapTop.styles';
import Item from '../Item/Item';

const TopLapTop = ({ data }) => {
  const classes = useStyles();

  return (
    <div className="topLaptopBox">
      <img
        className="imgtopLaptop"
        src="https://lh3.googleusercontent.com/027kpWdyl2bQaFxuCNBLyUuEFABfoetwql-_eOnLmgMYUrVE5SnXQJshzN1WDxKF3CQyWuBwkIlJysoxlxGybKR-xhC5mvxo=w1232"
        alt="img"
      />
      <Grid sx={{ flexGrow: 1 }} container spacing={2} className={classes.topLaptopContainer}>
        <Grid item xs={12}>
          <Grid className={classes.topLaptop} container justifyContent="center" spacing={2}>
            {data.map((item, index) => (
              <Item data={item} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopLapTop;
