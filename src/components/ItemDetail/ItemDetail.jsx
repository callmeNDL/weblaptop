import React, { useEffect, useState } from 'react';
import './itemDetail.scss';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CachedIcon from '@mui/icons-material/Cached';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ItemDetail = () => {
  const [imageActive, setImageActve] = useState({});
  const imgDetail = [
    {
      id: '1',
      img: 'https://lh3.googleusercontent.com/aY3yhDAmI_bWPQqtJSFQIfBfeG30gN7FWphBDA7NemI7NPuESFu_fKMJHJtzMxYm4yPQ6OBBjODwM-YSjsQdpRw9WFeYivs=rw',
    },
    {
      id: '2',
      img: 'https://lh3.googleusercontent.com/I4lippGnxxs0YZH4FqA12SN7-Uv0FADq1BpBhKiZ4iE96NtaQck5CDCPsKHV7VajWXTWB9nn8vCSRf0yJP8f6DBudIMhbZXf=rw',
    },
    {
      id: '3',
      img: 'https://lh3.googleusercontent.com/B_mUPgptehMmdUGkHosweeh0RVOZkCXN9biwE9_TdVJjNUk34Ut3VhEEG7RgDf105h95z1LGyApDvsAEvY0iJiLXHO9GwlDd=rw',
    },
    {
      id: '4',
      img: 'https://lh3.googleusercontent.com/y1Z6TfCqJ-wh7tb73Bm2zOxYYnfbgQt9m1xIp2IkIAOS2eLP1pQ4BBMEWjBGy3r0rZnuaccXnjvb1Za0nZPwJIeAjrbca4Ro=rw',
    },
    {
      id: '5',
      img: 'https://lh3.googleusercontent.com/8cblungYk03qOJRN5aUJgacdG_tzDbtxltaDf3JiC2NpRvzIwIUVKWZaSCyUASkLTQFL5AXWIJEpeECL5yEak2F4OYLjsr_Iug=rw',
    },
  ];
  const item = {
    id: 1,
    brandName: 'MSI',
    img: 'https://lh3.googleusercontent.com/YU6oxG2QtC_1Bc9pv4ykzK_ldevPNz6YGKrNJ4KshpcG-eNURyzSqlTpzu1ZZ-Dl-8-0Dm_bq0kopcD5BMJU4X8x3MUnDt4C=w230-rw',
    decsription:
      'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
    priceLast: '23.490.000 ₫',
    priceFrist: '25.490.000 ₫',
    percentDiscount: '-7.85%',
    name: 'MacBook Air 2020 13.3 inch MGND3SA/A (M1/8GB/SSD256GB) (Vàng)',
  };

  useEffect(() => {
    setImageActve(imgDetail[0]);
  }, []);

  return (
    <div className="itemDetail-Box">
      <div className="item-left">
        <div className="imageContainer">
          <div className="img-preview">
            <img src={imageActive.img} alt={`img-active-${imageActive.id}`} />
          </div>
          <div className="list-imgProduct">
            {imgDetail.map((item) => (
              <div
                className={`img-box ${
                  imageActive.id === item.id ? 'img-box--active' : ''
                }`}
                key={item.id}
                onMouseEnter={() => setImageActve(item)}
              >
                <img src={item.img} alt={`img-${item.id}`} />
              </div>
            ))}
          </div>
          <div className="line-bottom"></div>
          <div className="product-decs">
            - CPU: Apple M1
            <br />
            - Màn hình: 13.3" IPS (2560 x 1600)
            <br />
            - RAM: 8GB Onboard LPDDR4 3733MHz <br />
            - Đồ họa: Onboard <br />
            - Lưu trữ: 256GB SSD / <br />
            - Hệ điều hành: macOS
            <br />
            - Pin liền
            <br />- Khối lượng: 1.3kg
          </div>
        </div>
        <div className="itemInformation">
          <div className="item-name">{item.name}</div>
          <div className="item-information">
            <div>Thương hiệu {item.brandName}</div>
            <div className="line">|</div>
            <div>Mã SP {item.id}</div>
            <div className="line">|</div>
          </div>
          <div className="item-price">{item.priceLast}</div>
          <div className="item-price-sale">
            {item.priceFrist} <span>{item.percentDiscount}</span>
          </div>
          <div className="line-bottom"></div>
          <div className="button-box">
            <button className="button-primary">Mua Ngay</button>
            <button className="button-second">Thêm vào giỏ hàng</button>
          </div>
          <div className="line-bottom"></div>
          <div className="discount-box">
            <p className="discount-title">Khuyến mãi liên quan</p>
            <ul>
              <li>
                Hỗ trợ trả góp với đơn hàng từ 3.000.000đ
                <Link>Xem chi tiết</Link>
              </li>
              <li>
                Nhận voucher giảm 600.000đ cho đơn từ 1.200.000đ khi hoàn thành
                mở thẻ TPBank EVO
                <Link>Xem chi tiết</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-info">
        <div className="warranty-policy">
          <div>Chính sách bán hàng</div>
          <ul>
            <li>
              <VerifiedUserIcon />
              Miễn phí giao hàng cho đơn hàng từ 5 triệu
            </li>
            <li>
              <CachedIcon />
              Cam kết hàng chính hãng 100%
            </li>
            <li>
              <LocalShippingIcon />
              Cam kết hàng chính hãng 100%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
