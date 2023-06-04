import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import '../assets/scss/Cart.scss';
import { Container } from '@mui/material';
const Cart = () => {
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

  const itemCart = [];
  return (
    <Container>
      <div className="cart-container bg-primary">
        <BasicBreadcrumbs data={breakItem} />
        {itemCart.length > 0 ? (
          <div></div>
        ) : (
          <div className="no-item">
            <img
              src="https://shopfront-cdn.tekoapis.com/static/empty_cart.png"
              alt="no-img"
            />
            <p>Giỏ hàng chưa có sản phẩm nào</p>
            <button className="button-primary">Mua sắm ngay</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
