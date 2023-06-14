import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import '../assets/scss/Products.scss';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ListItem from '../components/ListItem/ListItem';
import Fillter from '../components/Fillter/Fillter';
import request from '../services/request/request-service';

const Product = () => {
  const [sort, setSort] = useState({});
  const [arrSP, setArrSP] = useState([]);

  const breakItem = [
    {
      title: 'Trang chủ',
      url: '/',
    },
    {
      title: 'Lap top, máy tính sách tay giá rẻ, chính hãng',
      url: null,
    },
  ];
  const sortItem = [
    {
      id: 1,
      name: 'Khuyến mãi tốt nhất',
    },
    {
      id: 2,
      name: 'Bán chạy',
    },
    {
      id: 3,
      name: 'Mới về',
    },
    {
      id: 4,
      name: 'Giá giảm dần',
    },
    {
      id: 5,
      name: 'Giá tăng dần',
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await request.get('sanphamactive');
        if (res && res.data) {
          setArrSP(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
    return () => {};
  }, []);

  console.log(arrSP, 'arrSp');

  return (
    <div className="bg-container">
      <Container>
        <div className="product-container bg-container">
          <BasicBreadcrumbs data={breakItem} />
          <div className="product-box">
            <Fillter />
            <div className="products-box">
              <div className="sort-box">
                <div className="title">Sắp xếp theo</div>
                {sortItem.map((item) => {
                  if (item.id === sort.id) {
                    return (
                      <div
                        key={item.id}
                        className="sort-item sort-item-active"
                        onClick={() => {
                          setSort(item);
                        }}
                      >
                        {item.name}
                        <div className="active"></div>
                        <span className="active-icon">✓</span>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={item.id}
                      className="sort-item"
                      onClick={() => {
                        setSort(item);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <div className="list-item">
                <ListItem data={arrSP} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
