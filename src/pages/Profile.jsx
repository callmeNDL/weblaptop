import { Container } from '@mui/material';
import AccountIfo from '../components/Profile/AccountIfo';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import '../components/Profile/Account.scss';
import { useState } from 'react';
import Commande from '../components/Profile/Commande';
<<<<<<< HEAD
import Location from '../components/Profile/Location';
import Notification from '../components/Profile/Notification';
=======
>>>>>>> f1f05f93abdda915191b6945f73c9a7ce0758d8e

const Profile = () => {
  const [activeProfile, setActiveProfile] = useState('Thông tin cá nhân');
  const account = {
    img: 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?resize=560%2C560&ssl=1',
    name: 'NDL',
  };

  return (
    <div className="profile-container bg-container">
      <Container style={{ display: 'flex' }}>
        <div className="account-container">
          <div className="account-info">
            <img src={account.img} alt="img-avatar" />
            <div className="account-name">
              <span className="title">Tài khoản của</span>
              <span className="name">{account.name}</span>
            </div>
          </div>
          <ul>
            <li
              onClick={() => {
                setActiveProfile('Thông tin cá nhân');
              }}
              className={activeProfile === 'Thông tin cá nhân' ? 'active' : ''}
            >
              <PersonPinIcon /> Thông tin cá nhân
            </li>
            <li
              onClick={() => {
                setActiveProfile('Quản lý đơn hàng');
              }}
              className={activeProfile === 'Quản lý đơn hàng' ? 'active' : ''}
            >
              <LocalMallIcon />
              Quản lý đơn hàng
            </li>
            <li
              onClick={() => {
                setActiveProfile('Số địa chỉ');
              }}
              className={activeProfile === 'Số địa chỉ' ? 'active' : ''}
            >
              <EditLocationIcon />
              Số địa chỉ
            </li>
            <li
              onClick={() => {
                setActiveProfile('Thông báo');
              }}
              className={activeProfile === 'Thông báo' ? 'active' : ''}
            >
              <CircleNotificationsIcon /> Thông báo
            </li>
          </ul>
        </div>
        {activeProfile === 'Thông tin cá nhân' && <AccountIfo />}
        {activeProfile === 'Quản lý đơn hàng' && <Commande />}
<<<<<<< HEAD
        {activeProfile === 'Số địa chỉ' && <Location />}
        {activeProfile === 'Thông báo' && <Notification />}
=======
>>>>>>> f1f05f93abdda915191b6945f73c9a7ce0758d8e
      </Container>
    </div>
  );
};

export default Profile;
