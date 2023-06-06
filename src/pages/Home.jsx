import SliderHome from '../components/Slide';
import TopLapTop from '../components/TopLapTop/TopLapTop';
import '../assets/scss/Home.scss';
import ListItem from '../components/ListItem/ListItem';
import TopBrand from '../components/TopBrand/TopBrand';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <SliderHome />
      <Container>
        <TopLapTop />
        <TopBrand />
        <ListItem title={true} />
      </Container>
    </>
  );
};

export default Home;
