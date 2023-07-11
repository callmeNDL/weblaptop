import NoContent from '../NoContent/NoContent';
import './Commande.scss';

const Commande = () => {
  const listProduct = [];

  return (
    <div className="commande-container">
      <div className="title">Quản lý đơn hàng</div>
      <div className="commade-content">
        {!listProduct.length > 0 && <NoContent des={'Bạn không có sản phẩm nào'} />}
      </div>
      <div className="controller">
        <div className="item item-active">Chờ thanh toán</div>
        <div className="item">Chờ giao hàng</div>
        <div className="item">Đã hoàn thành</div>
      </div>
    </div>
  );
};

export default Commande;
