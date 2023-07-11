import { Container } from '@mui/material';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const DetailPage = () => {
  return (
    <div className="bg-container detail-container">
      <Container>
        <ItemDetail />
      </Container>
    </div>
  );
};

export default DetailPage;
