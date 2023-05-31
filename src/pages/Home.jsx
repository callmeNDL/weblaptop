import SliderHome from '../components/Slide';
import TopLapTop from '../components/TopLapTop/TopLapTop';
import '../assets/scss/Home.scss';
import ListItem from '../components/ListItem/ListItem';

const Home = () => {
  return (
    <div>
      <SliderHome />
      <TopLapTop />
      <ListItem />
    </div>
  );
};

export default Home;
