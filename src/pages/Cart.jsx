import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import { makeStyles } from '@mui/styles';
import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import '../assets/scss/Cart.scss';
import ItemCount from '../components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCardItem, decrementCardItem, deleteALlItem, deleteCardItem } from '../redux/card/card.actions';
import { enqueueSnackbar } from 'notistack';
import { setItemCheckout } from '../redux/checkout/checkout.actions';

const useStyles = makeStyles((theme) => ({
  tableCart: {
    border: 'none !important',
    backgroundColor: 'white',
    borderRadius: '8px',
    borderColor: 'white',

    '& div.MuiDataGrid-withBorderColor': {
      borderColor: 'white',
    },
  },
  price: {
    borderStyle: 'none',
    borderWidth: '1px',
    borderColor: 'unset',
    opacity: '1',
    width: 'max-content',
    display: 'inline-block',
    color: 'inherit',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

const Cart = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [listCart, setListCart] = useState([]);
  const [listCartSelected, setListCartSelected] = useState([]);
  const [priceTotal, setpriceTotal] = useState('');

  const [open, setOpen] = useState(false);
  const itemCard = useSelector((state) => state.itemCard.cartAr);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const breakItem = [
    {
      title: 'Trang chủ',
      url: '/',
    },
    {
      title: 'Giỏ hàng',
      url: null,
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 30 },
    {
      field: 'tenSanPham',
      headerName: 'Sản phẩm',
      minWidth: 400,
      renderCell: (params) => (
        <div className="item-cart" style={{ width: 450 }}>
          {/* <img src={params?.row?.hinhAnhs[0]?.path ?? 'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw'} alt="img-product-cart" /> */}
          <img
            src={
              'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw'
            }
            alt="img-product-cart"
          />
          <div className="item-cart-des">
            <div className="name">{params?.row?.tenSanPham}</div>
            <div>MSP:{params?.row?.id}</div>
          </div>
        </div>
      ),
    },
    {
      field: 'gia',
      headerName: 'Đơn giá',
      minWidth: 130,
      renderCell: (params) => <div className={classes.price}>{params?.row?.giaVND}</div>,
    },
    {
      field: 'count',
      headerName: 'Số lượng',
      type: 'number',
      minWidth: 130,
      renderCell: (params) => (
        <ItemCount
          count={params?.row?.quantity ?? '1'}
          handDecrement={() => {
            if (params?.row?.quantity > 1) {
              handleDecrement(params.row);
            }
          }}
          handIncrement={() => {
            handleIncrement(params.row);
          }}
          deleteItem={() => {
            deleteItem(params.row);
          }}
        />
      ),
    },
    {
      field: 'rowTotal',
      headerName: 'Thành tiền',
      minWidth: 130,
      renderCell: (params) => (
        <div className={classes.price}>
          {(params?.row?.gia * params?.row?.quantity)?.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          }) ?? ''}
        </div>
      ),
    },
  ];

  const handleDecrement = (row) => {
    dispatch(decrementCardItem(row));
  };
  const handleIncrement = (row) => {
    dispatch(addCardItem(row));
  };

  const deleteItem = (row) => {
    dispatch(deleteCardItem(row));
  };

  const handeDelteCart = () => {
    dispatch(deleteALlItem([]));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (Array.isArray(itemCard) && itemCard?.length > 0) {
      const arr = itemCard;
      let indexArr = -1;
      arr.forEach((item, index) => {
        if (Array.isArray(item)) {
          indexArr = index;
        }
      });
      if (indexArr > -1) {
        // only splice array when item is found
        arr.splice(indexArr, 1); // 2nd parameter means remove one item only
      }

      setListCart(arr);
    }
  }, [itemCard]);

  const handleSelectItem = (item) => {
    const arrResult = item?.map((item) => listCart.find((el) => el.id === item));
    if (arrResult) {
      setListCartSelected(arrResult);
    }
  };

  useEffect(() => {
    let price = 0;

    if (listCartSelected) {
      listCartSelected?.forEach((item) => (price += item.gia * item.quantity));
      setpriceTotal(price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) ?? '');
    }
  }, [listCartSelected]);

  const handleCheckOut = () => {
    dispatch(setItemCheckout(listCartSelected));

    navigate('/checkout');
  };

  return (
    <div className="bg-container">
      <Container>
        <div className="cart-container">
          <BasicBreadcrumbs data={breakItem} />

          {itemCard && itemCard?.length > 0 ? (
            <div className="list-cart-container">
              <div className="list-cart-content">
                <div style={{ height: 'auto' }}>
                  <div className="list-cart-title">
                    <h1>Giỏ hàng</h1>
                    <span onClick={() => setOpen(true)}>Xóa tất cả</span>
                  </div>
                  <DataGrid
                    className={classes.tableCart}
                    rows={listCart}
                    columns={columns}
                    columnVisibilityModel={{
                      id: false,
                    }}
                    disableColumnMenu
                    checkboxSelection
                    disableRowSelectionOnClick
                    hideFooter
                    autoHeight
                    rowHeight={100}
                    onRowSelectionModelChange={(item) => handleSelectItem(item)}
                  />
                </div>
                <div className="total-price">
                  <div className="title">Thanh toán</div>
                  <div className="temporary-price">
                    <div className="temporary-price-title">Tổng tạm tính</div>
                    <div className="price">{priceTotal}</div>
                  </div>
                  <div className="temporary-price">
                    <div className="temporary-price-title">Thành tiền</div>
                    <div className="price price-into">{priceTotal}</div>
                  </div>
                  <div className="title-vat">(Đã bao gồm thuế)</div>
                  <button className="button-primary" onClick={handleCheckOut}>
                    THANH TOÁN
                    <br /> {user ? '' : 'Bạn cần đăng nhập để thanh toán'}
                  </button>
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

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Chú ý'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bạn có thật sự muốn xoá sản phẩm ra khỏi giỏ hàng?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="button-second" onClick={handleClose}>
              Huỷ bỏ
            </button>
            <button className="button-primary" onClick={handeDelteCart} autoFocus>
              Đồng ý
            </button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default Cart;
