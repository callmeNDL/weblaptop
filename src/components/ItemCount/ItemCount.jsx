import './itemCount.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const ItemCount = (props) => {
  return (
    <div className="count-box">
      <div className="count-container bg-container">
        <div
          className={props.count > 1 ? 'button-count' : 'button-count button-count-disable'}
          onClick={props.handDecrement}
        >
          <RemoveIcon />
        </div>
        <div>{props.count}</div>
        <span className="button-count" onClick={props.handIncrement}>
          <AddIcon />
        </span>
      </div>
      <div className="delete" onClick={props.deleteItem}>
      </div>
    </div>
  );
};

export default ItemCount;
