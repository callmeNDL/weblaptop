import hedaerImg from '../assets/imgs/header-img.webp';
import PrimarySearchAppBar from './AppBar/PrimarySearchAppBar';
import '../assets/scss/Header.scss';
import { Container } from '@mui/material';

const Header = () => {
  return (
    <header>
      <div>
        <img className="img-header" src={hedaerImg} alt="hedaerImg" />
      </div>
      <div className="bg-blue">
        <Container>
          <div className="nav-container">
            <ul>
              <li>Khuyến mãi</li>
              <li>Hệ thống Showroom</li>
              <li>Tư vấn mua hàng (miễn phí): 1800 6867</li>
              <li>CSKH: 1800 6865</li>
              <li>Tin công nghệ</li>
              <li>Xây dựng cấu hình</li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-second">
        <Container>
          <PrimarySearchAppBar />
        </Container>
      </div>
    </header>
  );
};

export default Header;
