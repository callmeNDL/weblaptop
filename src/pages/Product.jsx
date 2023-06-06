import BasicBreadcrumbs from '../components/BreakCrum/BreakCrum';
import '../assets/scss/Products.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import ListItem from '../components/ListItem/ListItem';

const Product = () => {
  const [value, setValue] = useState([0, 30000000]);
  const [sort, setSort] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const brandItem = ['MSI', 'HP', 'APPLE', 'ACER', 'LG', 'DELL'];
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }

  return (
    <Container>
      <div className="product-container bg-container">
        <BasicBreadcrumbs data={breakItem} />
        <div className="product-box">
          <div className="filter-box">
            <div className="item">
              <div className="subttile">Khoảng giá</div>
              <div className="price">
                <span className="price-item">0đ</span>
                <span className="price-item">30.000.000đ</span>
              </div>
              <Box sx={{ width: 200 }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  min={0}
                  max={30000000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={numberWithCommas(value)}
                />
              </Box>
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="subttile">Thương hiệu</div>
              <FormGroup>
                {brandItem.map((item) => (
                  <FormControlLabel control={<Checkbox />} label={item} />
                ))}
              </FormGroup>
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="subttile">Kích thước màn hình</div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="11.6"
                />
                <FormControlLabel control={<Checkbox />} label="13" />
                <FormControlLabel control={<Checkbox />} label="15" />
              </FormGroup>
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="subttile">Dung lượng RAM</div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="4GB" />
                <FormControlLabel control={<Checkbox />} label="8GB" />
                <FormControlLabel control={<Checkbox />} label="16GB" />
                <FormControlLabel control={<Checkbox />} label="32GB" />
                <FormControlLabel control={<Checkbox />} label="64GB" />
              </FormGroup>
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="subttile">Ổ cứng</div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="512GB" />
                <FormControlLabel control={<Checkbox />} label="1TB" />
                <FormControlLabel control={<Checkbox />} label="2TB" />
              </FormGroup>
              <div className="line"></div>
            </div>
          </div>
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
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
