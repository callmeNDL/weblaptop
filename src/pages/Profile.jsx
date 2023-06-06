import { Container } from '@mui/material';
import Account from '../components/Profile/Account';

const Profile = () => {
  const account = {
    img: 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?resize=560%2C560&ssl=1',
    name: 'NDL',
  };
  return (
    <div className="profile-container bg-container">
      <Container style={{ display: 'flex' }}>
        <Account dataAccount={account} />
        <div></div>
      </Container>
    </div>
  );
};

export default Profile;
