import * as React from 'react';
import Grid from '@mui/material/Grid';

import useStyles from './topLapTop.styles';
import Item from '../Item/Item';

const TopLapTop = () => {
  const classes = useStyles();
  const listItem = [
    {
      id: 1,
      brandName: 'ASUS',
      hinhAnhs: [
        {
          path: 'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw',
        },
      ],
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 2,
      brandName: 'HP',
      hinhAnhs: [
        {
          path: 'https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA=w230-rw',
        },
      ],
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 3,
      brandName: 'HP',
      hinhAnhs: [
        {
          path: 'https://lh3.googleusercontent.com/0Q0lMqKR7EDq6as_tAt0muqPXPxUMdIhQ91c9QUCHRZiE4JTJRISEGfAxxz7DucQpiokqAZOjTpHn5pm5KO-zUKhnWDwppFL=w230-rw',
        },
      ],
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 4,
      brandName: 'ACER',
      hinhAnhs: [
        {
          path: 'https://lh3.googleusercontent.com/1S6Ltn5pJWSMWh0U6V4w80Di1Lq8AVQhuDOzVHbQPmxwcztwofrF_3gyuy7Pk8AJ73MVFCYDgm4r1orx6eh88iwVj9nDyXk=w230-rw',
        },
      ],
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
  ];

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
            {listItem.map((item, index) => (
              <Item data={item} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopLapTop;
