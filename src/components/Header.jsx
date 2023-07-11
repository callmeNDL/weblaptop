import hedaerImg from '../assets/imgs/header-img.webp';
import PrimarySearchAppBar from './AppBar/PrimarySearchAppBar';
import '../assets/scss/Header.scss';
import { Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const searchRef = useRef();
  const navigate = useNavigate();
  function handleClickHome() {
    navigate('/');
  }
  function handleClickProduct() {
    navigate('/product');
  }
  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > 88 ? 'down' : 'up';
      if (direction && direction !== scrollDirection) {
        setScrollDirection(direction);
      }
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (searchRef && searchRef.current && scrollDirection) {
      if (scrollDirection === 'down') {
        searchRef.current.classList.add('fixed');
      } else {
        searchRef.current.classList.remove('fixed');
      }
    }
  }, [scrollDirection]);

  return (
    <header>
      <div>
        <img className="img-header" src={hedaerImg} alt="hedaerImg" />
      </div>
      <div className="bg-blue">
        <Container>
          <div className="nav-container">
            <ul>
              {/* <li>Khuyến mãi</li> */}
              <a href="" onClick={handleClickHome}>
                <h5>Trang chủ</h5>
              </a>
              <a href="#placeholder">
                <h5>Khuyến mãi</h5>
              </a>
              <a href="" onClick={handleClickProduct}>
                <h5>Sản phẩm</h5>
              </a>
              <a href="#placeholder">
                <h5>CSKH</h5>
              </a>
              <a href="#placeholder">
                <h5>Tin công nghệ</h5>
              </a>
              <a href="#placeholder">
                <h5>Tư vấn mua hàng</h5>
              </a>
              {/* <li>Hệ thống Showroom</li>
              <li>Tư vấn mua hàng (miễn phí): 1800 6867</li>
              <li>CSKH: 1800 6865</li>
              <li>Tin công nghệ</li>
              <li>Xây dựng cấu hình</li> */}
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-second" ref={searchRef}>
        <PrimarySearchAppBar />
      </div>
    </header>
  );
};

export default Header;
