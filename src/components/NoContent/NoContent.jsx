import './NoContent.scss';

const NoContent = ({ des }) => {
  return (
    <div className="commade-nocontent">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mongcaifood.appspot.com/o/no-products-found.png?alt=media&token=2f22ae28-6d48-49a7-a36b-e1a696618f9c"
        alt="img-no-product"
      />
      <div className="description">{des}</div>
    </div>
  );
};

export default NoContent;
