import { Container } from '@mui/material';
import AccountIfo from '../components/Profile/AccountIfo';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import '../components/Profile/Account.scss';
import { useEffect, useState } from 'react';
import Commande from '../components/Profile/Commande';
import Location from '../components/Profile/Location';
import Notification from '../components/Profile/Notification';
import request, { getAuthToken } from '../services/request/request-service';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { async } from 'q';

const Profile = () => {
  const [activeProfile, setActiveProfile] = useState('Thông tin cá nhân');
  const [userData, setUserData] = useState({});

  const userState = useSelector((state) => state.user);
  const pathPattern = useLocation();

  const account = {
    img: 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?resize=560%2C560&ssl=1',
    name: 'NDL',
  };

  const getHoaDonKhachHang = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const res = await request.get(`hoadonbykhachhang`, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });

        console.log(res, "Aa");

      } catch (error) {
        console.log(error);
      }

    }
  }

  useEffect(() => {
    const getUser = async () => {
      const { accessToken } = await getAuthToken();
      if (accessToken && userState && userState.userId) {
        const user = await request.get(`customer/${userState.userId}`, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });
        if (user && user.data) {
          setUserData(user.data);
        }
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (pathPattern.pathname) {
      if (pathPattern.pathname === '/profile/order') {
        setActiveProfile('Quản lý đơn hàng')
      }
    }
  }, [pathPattern?.pathname])

  useEffect(() => {
    if (activeProfile === 'Quản lý đơn hàng') {
      getHoaDonKhachHang()
    }
  }, [activeProfile])

  return (
    <div className="profile-container bg-container">
      <Container style={{ display: 'flex' }}>
        <div className="account-container">
          <div className="account-info">
            <img src={account.img} alt="img-avatar" />
            <div className="account-name">
              <span className="title">Tài khoản của</span>
              <span className="name">
                {userData.hoTenLot ?? ''} {userData.ten ?? ''}
              </span>
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
        {activeProfile === 'Thông tin cá nhân' && <AccountIfo data={userData} />}
        {activeProfile === 'Quản lý đơn hàng' && <Commande />}
        {activeProfile === 'Số địa chỉ' && <Location />}
        {activeProfile === 'Thông báo' && <Notification />}
      </Container>
    </div>
  );
};

export default Profile;
