import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import '../assets/scss/Cart.scss';
import { Checkbox, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';
const Cart = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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

  const listCart = [
    {
      id: 'cd1f8ffc-a568-40f3-ab81-dc5bc67d0ebf',
      sku: '201201617',
      displaySku: '201201617',
      name: 'Máy tính xách tay/ Laptop MacBook Air 2020 13.3" MGN63SA/A (M1/8GB/SSD256GB) (Xám)',
      imageUrl:
        'https://lh3.googleusercontent.com/Ezh1zisXToaMPP30pXE50dnotXpEyxnGsYpbd6uZc6jEWRWhMrMY2EDuXNcWPhw4nfcwwC-mGGVEkkRtRSJE0P3hRPuvCjw',
      uomCode: '81',
      barcodeOrSerials: '056257',
      tags: [],
      attributeDescription: null,
      quantity: 1.0,
      displayTotalAvailable: 'Chỉ còn 2 sản phẩm',
      available: 2.0,
      sellPrice: 18590000,
      displayPrice: '18.590.000₫',
      strikeThroughDisplayPrice: '28.990.000₫',
      promotionDiscount: 0,
      onDemandDiscount: 0,
      maxOnDemandDiscountPercent: 0.0,
      consultationFee: 0,
      maxConsultationFee: 0,
      price: 18590000,
      rowTotal: 18590000,
      isSelected: true,
      isDisabled: false,
      childItems: [],
      promotions: [],
      title: null,
      remainingSeconds: null,
      policies: [],
      allowedUserActions: [
        'CHANGE_QUANTITY',
        'TOGGLE',
        'DELETE',
        'OPEN_PRODUCT_DETAIL',
      ],
    },
  ];

  console.log(listCart.length, 'legth');

  return (
    <Container>
      <div className="cart-container bg-primary">
        <BasicBreadcrumbs data={breakItem} />
        {listCart.length > 0 ? (
          <div className="list-cart-container">
            <div className="list-cart-title">
              <h1>Giỏ hàng</h1>
              <span>Xóa tất cả</span>
            </div>
            <div className="list-cart-content">
              <ul className="cart-title">
                <li>Web lap Top</li>
                <li>Đơn giá</li>
                <li>Số lượng</li>
                <li>Thành tiền</li>
              </ul>
              <div className="list-product-cart">
                <div className="item-cart">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <img src={listCart[0].imageUrl} alt="img-cart" />
                  <div className="item-info">
                    <div>{listCart[0].name}</div>
                    <div>MSP:{listCart[0].sku}</div>
                    <div>chỉ còn 2 sản phẩm</div>
                  </div>
                  <div className="item-price">
                    <div className="price-promo">{listCart[0].price}</div>
                    <div className="price-default">
                      {listCart[0].strikeThroughDisplayPrice}
                    </div>
                  </div>
                  <div className="item-count">
                    <ItemCount />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-item">
            <img
              src="https://shopfront-cdn.tekoapis.com/static/empty_cart.png"
              alt="no-img"
            />
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
  );
};

export default Cart;
