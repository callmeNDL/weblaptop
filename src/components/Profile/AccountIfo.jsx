import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import './Account.scss';
const AccountIfo = () => {
  return (
    <div className="">
      <div className="account-infor box-container bg-white">
        <div className="title">Thông tin tài khoản</div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Họ và tên</InputLabel>
          <Input id="component-simple" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Số điên thoại</InputLabel>
          <Input id="component-simple" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Ngày sinh</InputLabel>
          <Input id="component-simple" />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
        <button>Cập nhật</button>
      </div>
      <div className="account-location">
        <div>Địa chỉ mặc định</div>
        <div>
          Bạn chưa có địa chỉ nhận hàng mặc định. Vui lòng chọn Thêm địa chỉ
          nhận hàng.
        </div>
      </div>
    </div>
  );
};

export default AccountIfo;
