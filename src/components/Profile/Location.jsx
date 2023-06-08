import AddIcon from '@mui/icons-material/Add';
import './Location.scss';
import FormDialog from '../FormDialog/FormDialog';
import { useState } from 'react';
const Location = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="location-container">
      <div className="title">Số địa chỉ</div>
      <div className="location-content">
        <div className="add-location" onClick={() => setOpenDialog(true)}>
          <AddIcon />
          <span>Thêm địa chỉ</span>
        </div>
      </div>
      <FormDialog open={openDialog} title="Thông tin người nhận hàng" handleClose={handleCloseDialog} />
    </div>
  );
};

export default Location;
