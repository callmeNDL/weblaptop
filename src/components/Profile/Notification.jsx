import NoContent from '../NoContent/NoContent';
import './Notification.scss';
const Notification = () => {
  const listNotification = [];

  return (
    <div className="notification-container">
      <div className="title">Thông báo</div>
      <div className="notification-content">
        {!listNotification.length > 0 && <NoContent des="Bạn chưa có thông báo mới" />}
      </div>
    </div>
  );
};

export default Notification;
