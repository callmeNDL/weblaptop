import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import PaginationRounded from '../Pagination/Pagination';
import './ListItem.scss';

const ListItem = ({ title, data }) => {
  const navigate = useNavigate();

  return (
    <div className="listItemContainer">
      {title ? (
        <div className="titleItem">
          <p className="title">LapTop</p>
          <p
            className="showMore"
            onClick={() => {
              navigate('/product');
            }}
          >
            Xem tất cả &gt;
          </p>
        </div>
      ) : (
        ''
      )}
      <div className="listItemBox">
        {data.map((item) => (
          <div className="Item" key={item.id}>
            <Item data={item} />
          </div>
        ))}
      </div>
      <PaginationRounded />
    </div>
  );
};

export default ListItem;
