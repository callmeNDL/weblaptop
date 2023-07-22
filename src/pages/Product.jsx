import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import '../assets/scss/Products.scss';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ListItem from '../components/ListItem/ListItem';
import Fillter from '../components/Fillter/Fillter';
import request from '../services/request/request-service';
import NoContent from '../components/NoContent/NoContent';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const [sort, setSort] = useState({});
  const [arrSP, setArrSP] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const nhaSanXuat = searchParams.get('nhaSanXuat')


  const loadDataNSX = async (nhaSanXuat) => {
    try {
      const res = await request.get(`sanpham/nhasanxuat/${nhaSanXuat}`);
      if (res && res.data) {
        setArrSP(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (nhaSanXuat) {
      loadDataNSX(nhaSanXuat)
    }
  }, [nhaSanXuat])

  const breakItem = [
    {
      title: 'Trang chủ',
      url: '/',
    },
    {
      title: 'Lap top, máy tính sách tay, chính hãng',
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
        const res = await request.get('sanphamactive?limit=12&currentpage=0');
        if (res && res.data) {
          setArrSP(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
    return () => { };
  }, []);

  return (
    <div className="bg-container">
      <Container>
        <div className="product-container bg-container">
          <BasicBreadcrumbs data={breakItem} />
          <div className="product-box">
            <Fillter setArrSP={setArrSP} />
            <div className="products-box">
              <div className="sort-box">
                <div className="title">Laptop - {nhaSanXuat ? nhaSanXuat : 'Máy tính xách tay'}</div>
                {/* {sortItem.map((item) => {
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
                })} */}
              </div>
              <div className="list-item">
                {arrSP.length > 0 ? (
                  <ListItem data={arrSP} />
                ) : (
                  <div className="no-content">
                    <NoContent />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
