import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import { makeStyles } from '@mui/styles';
import { Box, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/Cart.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/scss/Checkout.scss';
import AddIcon from '@mui/icons-material/Add';
import request, { getAuthToken } from '../services/request/request-service';
import { enqueueSnackbar } from 'notistack';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CheckOut = () => {
  const navigate = useNavigate();
  const [priceTotal, setpriceTotal] = useState('');

  const itemCard = useSelector(state => state.itemCheckout.arrItem)
  const userState = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const breakItem = [
    {
      title: 'Trang chủ',
      url: '/',
    },
    {
      title: 'Thanh toán',
      url: null,
    },
  ];

  const getUser = async () => {
    const { accessToken } = await getAuthToken();
    if (accessToken && userState && userState.userId) {
      const user = await request.get(`customer/${userState.userId}`, {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
      });
      if (user && user.data) {
        setUserData(user.data);
      }
    }
  };

  console.log([userData, itemCard], "Daaa");

  const handleCheckout = async () => {
    if (userData && itemCard.length > 0) {
      const dataChiTiet = itemCard.map((item) => {
        return {
          soLuong: item?.quantity,
          gia: item?.gia,
          sanPham: {
            id: item?.id
          }
        }
      })

      let priceCheckout = 0
      itemCard?.forEach((item) =>
        priceCheckout += item.gia * item.quantity
      )

      const fromData = {
        tenKhachHang: userData?.ten,
        diaChi: userData.diaChi,
        soDienThoai: userData.soDienThoai,
        ghiChu: "123",
        trangThaiThanhToan: "1",
        soThangTraGop: 0,
        soTienTraTruoc: priceCheckout,
        soTienTraGop: 0,
        chiTietHoaDons: dataChiTiet
      }
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const res = await request.post('hoadon', fromData, {
            headers: {
              Authorization: `Token ${accessToken}`,
            },
          });
          console.log(res, "Check res");
          if (res?.data?.status === 'OK') {
            enqueueSnackbar(res?.data?.message, { variant: 'success' });
            navigate('/profile/order')
          }
          else {
            enqueueSnackbar(res?.data?.message, { variant: 'error' });

          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log(accessToken, "AAA");
    }
  }


  useEffect(() => {
    let price = 0

    if (itemCard) {
      itemCard?.forEach((item) =>
        price += item.gia * item.quantity
      )
      setpriceTotal(price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) ?? '')
    }
  });

  useEffect(() => {
    if (userState && userState.userId) {
      getUser(userState.userId)
    }
  }, [userState])

  return (
    <div className="bg-container">
      <Container>
        <div className="cart-container">
          <BasicBreadcrumbs data={breakItem} />

          {itemCard && itemCard?.length > 0 ? (
            <div className="list-cart-container">
              <div className="list-cart-content" style={{ justifyContent: 'space-between' }}>
                <div style={{ width: '100%' }} >
                  <div className='delivery-info'>
                    <h1>Thông tin nhận hàng</h1>
                    <Grid container gap={'10px 0'} className='delivery-box'>
                      <Grid item className="address address--active">
                        <div className='name'>GH:{userData?.hoTenLot + userData?.ten}</div>
                        <div>{userData?.soDienThoai}</div>
                        <div>{userData?.diaChi}</div>
                        <span className="active-icon">✓</span>
                      </Grid>
                      <Grid item className="address address-add">
                        <AddIcon />
                        <div>Thêm địa chỉ</div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="delivery-info" style={{ margin: '20px 0' }}>
                    <div className="note">
                      <h1>Ghi chú cho đơn hàng</h1>
                      <TextField
                        id="outlined-basic"
                        label="Nhập thông tin ghi chú cho nhà bán hàng"
                        variant="outlined"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: 'auto',
                      width: '100%',
                      backgroundColor: 'white',
                      padding: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <div className="banking">
                      <h1>Phương thức thanh toán</h1>
                      <div className="des">Thông tin thanh toán của bạn sẽ luôn được bảo mật</div>
                      <div container className="banking-box">
                        <div className="item item--active">
                          <div className="banking-title">Thanh toán khi nhận hàng</div>

                          <span className="active-icon">✓</span>
                        </div>

                        <div className="item">
                          <div className="banking-title">
                            Thanh toán qua thẻ ngân hàng<span className="recomend">Khuyên dùng</span>
                          </div>
                          <div>Thanh toán qua Internet Banking, Visa, Master, JCB, Momo</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 'auto' }}>
                  <div className="total-price" style={{ marginTop: 0 }}>
                    <div className="title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Thông tin đơn hàng{' '}
                      <div
                        onClick={() => {
                          navigate('/cart');
                        }}
                        style={{ color: 'blue', cursor: 'pointer' }}
                      >
                        Chỉnh sửa
                      </div>
                    </div>
                    <div>
                      {itemCard?.map((item) => {
                        return (
                          <div className="item-cart" style={{ marginBottom: '20px' }}>
                            {/* <img src={params?.row?.hinhAnhs[0]?.path ?? 'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw'} alt="img-product-cart" /> */}
                            <img
                              src={
                                'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw'
                              }
                              alt="img-product-cart"
                            />
                            <div className="item-cart-des" style={{ maxWidth: '200px' }}>
                              <div className="name" style={{ marginBottom: '5px' }}>
                                {item?.tenSanPham}
                              </div>
                              <div>Số lượng:{item?.quantity}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="total-price">
                    <div className="title">Thanh toán</div>
                    <div className="temporary-price">
                      <div className="temporary-price-title">Tổng tạm tính</div>
                      <div className="price">{priceTotal}</div>
                    </div>
                    <div className="temporary-price">
                      <div className="temporary-price-title">Phí vận chuyển </div>
                      <div className="price">Miễn phí</div>
                    </div>
                    <div className="temporary-price">
                      <div className="temporary-price-title">Hỗ trợ kỹ thuật máy tính tận nơi</div>
                      <div className="price">Miễn phí</div>
                    </div>
                    <div className="temporary-price" style={{ marginTop: '20px' }}>
                      <div className="temporary-price-title">Cài đặt máy tính </div>
                      <div className="price">Miễn phí</div>
                    </div>
                    <div className="temporary-price">
                      <div className="temporary-price-title">Thành tiền</div>
                      <div className="price price-into" style={{ color: 'red', fontSize: '24px' }}>
                        {priceTotal}
                      </div>
                    </div>
                    <div className="title-vat">(Đã bao gồm thuế)</div>
                    <button className="button-primary" onClick={handleCheckout}>THANH TOÁN<br /> {userState ? '' : 'Bạn cần đăng nhập để thanh toán'}</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-item">
              <img src="https://shopfront-cdn.tekoapis.com/static/empty_cart.png" alt="no-img" />
              <p>Giỏ hàng chưa có sản phẩm nào</p>
              <button
                className="button-primary"
                onClick={() => {
                  navigate('/product');
                }}
              >
                Mua sắm ngay
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
