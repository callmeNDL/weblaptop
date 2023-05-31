import hedaerImg from "../assets/imgs/header-img.webp";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import "../assets/scss/Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <img className="img-header" src={hedaerImg} alt="hedaerImg" />
      </div>
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
      <PrimarySearchAppBar />
    </header>
  );
};

export default Header;
