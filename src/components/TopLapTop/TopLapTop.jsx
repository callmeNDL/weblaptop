import * as React from 'react';
import Grid from '@mui/material/Grid';

import useStyles from './topLapTop.styles';
import Item from '../Item/Item';

const TopLapTop = () => {
  const classes = useStyles();
  const listItem = [
    {
      id: 1,
      brandName: 'MSI',
      img: 'https://lh3.googleusercontent.com/YU6oxG2QtC_1Bc9pv4ykzK_ldevPNz6YGKrNJ4KshpcG-eNURyzSqlTpzu1ZZ-Dl-8-0Dm_bq0kopcD5BMJU4X8x3MUnDt4C=w230-rw',
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 2,
      brandName: 'MSI',
      img: 'https://lh3.googleusercontent.com/3JFqgn1gigjmEFwG5nH6sICKnZRPHHAnMWoVRKyi2DQzb2zhihFENtO3pxAnx39EpkcPzRlGrEtB9pnKAIsMLW4Ax22OSzqtDQ=w230-rw',

      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 3,
      brandName: 'MSI',
      img: 'https://lh3.googleusercontent.com/TldFf1XX0fNtluXF7vf6pvFyLR5foiopDTePmN-wZkFHDkGSi41GuFPCYtQZ9BMb6zPL_8644oW34ws3vTQ-WUfD-tMOSRcE=w230-rw',

      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
    {
      id: 4,
      brandName: 'MSI',
      img: 'https://lh3.googleusercontent.com/k9H0KS7063wUceOem_5T-soiCA4mHBOebq-_9IylO5ZIL_DedMr4RaRLh7vn6YtS7tDV_KWOhXbaaaVkrx4QNgmdN2GKd1I=w230-rw',
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
