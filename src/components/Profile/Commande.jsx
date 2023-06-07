import './Commande.scss';

const Commande = () => {
  const listProduct = [];

  return (
    <div className="commande-container">
      <div className="title">Quản lý đơn hàng</div>
      <div className="commade-content">
        {!listProduct.length > 0 && (
          <div className="commade-nocontent">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mongcaifood.appspot.com/o/no-products-found.png?alt=media&token=2f22ae28-6d48-49a7-a36b-e1a696618f9c"
              alt="img-no-product"
            />
            <div>Bạn không có sản phẩm nào</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commande;
