import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

import useStyles from './item.styles';
import { useNavigate } from 'react-router-dom';

const Item = ({ data }) => {
  const classes = useStyles();
  const navigator = useNavigate();

  return (
    <Grid key={data.id} item className={classes.ItemBox}>
      <Card
        sx={{ maxWidth: 215 }}
        className={classes.Item}
        onClick={() => {
          navigator(`/product/${data.id}`);
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={data.hinhAnhs ? data.hinhAnhs[0].path : ''}
            alt="green iguana"
          />
          <CardContent>
            <Typography className={classes.brandName} gutterBottom variant="h7" component="div">
              tên hãng của máy chưa có
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.tenSanPham}
            </Typography>
            <Typography className={classes.priceLast} variant="body2" color="text.secondary">
              {data.gia}
            </Typography>
            <Box style={{ display: 'flex' }}>
              <Typography className={classes.priceFrist} variant="body2" color="text.secondary">
                gia sau khi giam chưa co
              </Typography>
              <Typography
                style={{ marginLeft: '10px' }}
                className={classes.percentDiscount}
                variant="body2"
                color="text.secondary"
              >
                % giam gia chua co
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
