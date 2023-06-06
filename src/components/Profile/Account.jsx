import './Account.scss';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const Account = ({ dataAccount }) => {
  return (
    <div className="account-container">
      <div className="account-info">
        <img src={dataAccount.img} alt="img-avatar" />
        <div className="account-name">
          <span>Tài khoản của</span>
          <span>{dataAccount.name}</span>
        </div>
      </div>
      <ul>
        <li>
          <PersonPinIcon /> Thông tin cá nhân
        </li>
        <li>
          <LocalMallIcon />
          Quản lý đơn hàng
        </li>
        <li>
          <EditLocationIcon />
          Số địa chỉ
        </li>
        <li>
          <CircleNotificationsIcon /> Thông báo
        </li>
      </ul>
    </div>
  );
};

export default Account;
