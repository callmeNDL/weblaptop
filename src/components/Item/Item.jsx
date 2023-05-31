import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

import useStyles from './item.styles';

const Item = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid key={data.id} item>
      <Card sx={{ maxWidth: 345 }} className={classes.Item}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              className={classes.brandName}
              gutterBottom
              variant="h7"
              component="div"
            >
              {data.brandName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.decsription}
            </Typography>
            <Typography
              className={classes.priceLast}
              variant="body2"
              color="text.secondary"
            >
              {data.priceLast}
            </Typography>
            <Box xs={{ display: 'flex' }}>
              <Typography
                className={classes.priceFrist}
                variant="body2"
                color="text.secondary"
              >
                {data.priceFrist}
              </Typography>
              <Typography
                className={classes.percentDiscount}
                variant="body2"
                color="text.secondary"
              >
                {data.percentDiscount}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
