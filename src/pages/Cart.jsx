import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import '../assets/scss/Cart.scss';
import ItemCount from '../components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';

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
      field: 'name',
      headerName: 'Sản phẩm',
      minWidth: 400,
      renderCell: (params) => (
        <div className="item-cart" style={{ width: 450 }}>
          {console.log(params, 'params')}
          <img src={params.row.imageUrl} alt="img-product-cart" />
          <div className="item-cart-des">
            <div className="name">{params.row.name}</div>
            <div>MSP: 123456464646</div>
          </div>
        </div>
      ),
    },
    {
      field: 'displayPrice',
      headerName: 'Đơn giá',
      minWidth: 100,
      renderCell: (params) => <div className={classes.price}>{params.row.displayPrice}</div>,
    },
    {
      field: 'count',
      headerName: 'Số lượng',
      type: 'number',
      minWidth: 110,
      renderCell: (params) => (
        <ItemCount
          count={1}
          handDecrement={() => {
            handleDecrement(params.row.count);
          }}
          handIncrement={() => {
            handleIncrement(params.row.count);
          }}
        />
      ),
    },
    {
      field: 'rowTotal',
      headerName: 'Thành tiền',
      minWidth: 100,
      renderCell: (params) => <div className={classes.price}>{params.row.displayPrice}</div>,
    },
  ];

  useEffect(() => {
    const listCart = [
      {
        displaySku: '230402670',
        name: 'Máy tính xách tay/ Laptop Acer Nitro 16 Phoenix AN16-41-R5M4 (NH.QKBSV.003) (AMD Ryzen 5-7535HS) (Đen)',
        imageUrl:
          'https://lh3.googleusercontent.com/0qQpKIRxvCY_jgUeXDqo2EzU4lOpbxBxOIPiGXzwND2XVjBGZDk5dJljXi1ZGtoaXpi90vJctb_XF4E_Ex-7N5cV67ezlQc',
        count: 1.0,
        displayTotalAvailable: '',
        available: 0.0,
        sellPrice: 29990000,
        displayPrice: '29.990.000₫',
        promotionDiscount: 0,
        price: 29990000,
        rowTotal: 29990000,
      },
      {
        id: 'd227ebbc-f3d4-485d-ae83-c82d5c0c279d',
        name: 'Máy tính xách tay/ Laptop HP 15s-fq2712TU (7C0X2PA) (i3-1115G4) (Bạc)',
        imageUrl:
          'https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA',
        attributeDescription: null,
        count: 1.0,
        displayTotalAvailable: '',
        available: 0.0,
        sellPrice: 11190000,
        displayPrice: '11.190.000₫',
        strikeThroughDisplayPrice: '12.690.000₫',
        promotionDiscount: 0,
        price: 11190000,
        rowTotal: 11190000,
      },
    ];
    setListCart(listCart);
  }, []);

  const handleDecrement = (id) => {};
  const handleIncrement = (id) => {};

  return (
    <div className="bg-container">
      <Container>
        <div className="cart-container bg-primary">
          <BasicBreadcrumbs data={breakItem} />
          {listCart.length > 0 ? (
            <div className="list-cart-container">
              <div className="list-cart-content">
                <div className="list-cart-title">
                  <h1>Giỏ hàng</h1>
                  <span>Xóa tất cả</span>
                </div>
                <div style={{ height: 'auto', width: '100%' }}>
                  <DataGrid
                    className={classes.tableCart}
                    rows={listCart}
                    columns={columns}
                    columnVisibilityModel={{
                      id: false,
                    }}
                    disableColumnMenu
                    checkboxSelection
                    hideFooter
                    autoHeight
                    rowHeight={100}
                  />
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

export default Cart;
