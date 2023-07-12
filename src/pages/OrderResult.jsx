import React from 'react';
import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import { Container, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const OrderResult = () => {


  return (
    <div className="bg-container">
      <Container>
        <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <AccessTimeIcon style={{ fontSize: 160, color: "#FC8F26" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom >
              Đơn hàng chờ xử lý
            </Typography>
          </Grid>
          <Grid item xs={12}>
            Vui lòng chờ trong giây lát hoặc liên hệ bộ phận CSKH. Hotline: 1800 6865
          </Grid>
          <Grid item xs={12}>
            <Grid container
              justifyContent="center"
              style={{ padding: "20px 0" }}
              textAlign={"center"}
            >
              <Grid container xs={12}>
                <Grid xs={6}>Mã đơn hàng </Grid>
                <Grid xs={6}>23071032108310</Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid xs={6}>Giá trị đơn hàng</Grid>
                <Grid xs={6}>23071032108310</Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid xs={6}>Giá trị đơn hàng</Grid>
                <Grid xs={6}>23071032108310</Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <button className="button-primary">Xem chi tiết đơn hàng</button>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
};

export default OrderResult;
