import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import Moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import './Account.scss';
import { useState } from 'react';
import FormDialog from '../FormDialog/FormDialog';

const AccountIfo = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="account-info-box">
      <div className="account-infor box-container bg-white">
        <div className="title">Thông tin tài khoản</div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Họ và tên</InputLabel>
          <Input id="component-simple" value={`${data.hoTenLot} ${data.ten}`} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" value={data.email} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Số điên thoại</InputLabel>
          <Input id="component-simple" value={data.soDienThoai} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Ngày sinh</InputLabel>
          <Input id="component-simple" value={Moment(data.ngaySinh).format('DD/MM/YYYY')} />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio checked />} label="Nam" />
            <FormControlLabel value="male" control={<Radio />} label="Nữ" />
            <FormControlLabel value="other" control={<Radio />} label="Khác" />
            {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="other" /> */}
          </RadioGroup>
        </FormControl>
        <button>Cập nhật</button>
      </div>
      <div className="account-location">
        <div className="title">Địa chỉ mặc định</div>
        <div className="add-location">
          Bạn chưa có địa chỉ nhận hàng mặc định. Vui lòng chọn Thêm địa chỉ nhận hàng.
        </div>
        <div className="line"></div>
        <div
          className="button-add-location"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <AddIcon /> Thêm địa chỉ nhận hàng
        </div>
      </div>
      <FormDialog open={openDialog} title="Thông tin người nhận hàng" handleClose={handleCloseDialog} />
    </div>
  );
};

export default AccountIfo;
