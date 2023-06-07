import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import useStyles from './fillter.stytles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Fillter = () => {
  const [value, setValue] = useState([0, 30000000]);
  const [showMore, setShowMore] = useState(false);
  const classes = useStyles();
  const brandItem = [
    'ACER',
    'APPLE',
    'APPLE',
    'ASUS',
    'Avita',
    'Dell',
    'GIGABYTE',
    'HP',
    'Huawei',
    'LG',
    'Lenovo',
    'MSI',
  ];
  const ramItem = ['4GB', '8GB', '16GB', '32GB', '64GB'];
  const screenItem = ['11.3', '13', '15.6', '16', '17'];
  const hardDriveItem = ['512GB', '1TB', '2TB'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }
  return (
    <div className="filter-box">
      <div className="item">
        <div className="subttile">Khoảng giá</div>
        <div className="price">
          <span className="price-item">0đ</span>
          <span className="price-item">30.000.000đ</span>
        </div>
        <Box sx={{ width: 160, margin: 'auto' }}>
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
        <FormGroup
          className={`${classes.FormGroup} ${!showMore && classes.hidden}`}
        >
          {brandItem.map((item) => (
            <FormControlLabel
              className={classes.label}
              control={<Checkbox />}
              label={item}
            />
          ))}
        </FormGroup>
        <span
          className="show-more-filter"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? 'Ẩn bớt  ' : 'Xem thêm  '}{' '}
          {showMore ? (
            <KeyboardDoubleArrowUpIcon />
          ) : (
            <KeyboardDoubleArrowDownIcon />
          )}
        </span>

        <div className="line"></div>
      </div>
      <div className="item">
        <div className="subttile">Kích thước màn hình</div>
        <FormGroup className={classes.FormGroup}>
          {screenItem.map((item) => (
            <FormControlLabel
              className={classes.label}
              control={<Checkbox />}
              label={item}
            />
          ))}
        </FormGroup>
        <span className="show-more-filter">
          Xem thêm <KeyboardDoubleArrowDownIcon />
        </span>
        <div className="line"></div>
      </div>
      <div className="item">
        <div className="subttile">Dung lượng RAM</div>
        <FormGroup className={classes.FormGroup}>
          {ramItem.map((item) => (
            <FormControlLabel
              className={classes.label}
              control={<Checkbox />}
              label={item}
            />
          ))}
        </FormGroup>
        <span className="show-more-filter">
          Xem thêm <KeyboardDoubleArrowDownIcon />
        </span>
        <div className="line"></div>
      </div>
      <div className="item">
        <div className="subttile">Ổ cứng</div>
        <FormGroup className={classes.FormGroup}>
          {hardDriveItem.map((item) => (
            <FormControlLabel
              className={classes.label}
              control={<Checkbox />}
              label={item}
            />
          ))}
        </FormGroup>
        <span className="show-more-filter">
          Xem thêm <KeyboardDoubleArrowDownIcon />
        </span>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Fillter;
