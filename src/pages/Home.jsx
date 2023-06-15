import SliderHome from '../components/Slide';
import TopLapTop from '../components/TopLapTop/TopLapTop';
import '../assets/scss/Home.scss';
import ListItem from '../components/ListItem/ListItem';
import TopBrand from '../components/TopBrand/TopBrand';
import { Container } from '@mui/material';

const Home = () => {
  const listItem = [
    {
      id: 1,
      brandName: 'MSI',
      hinhAnhs: [
        {
          path: 'https://lh3.googleusercontent.com/YU6oxG2QtC_1Bc9pv4ykzK_ldevPNz6YGKrNJ4KshpcG-eNURyzSqlTpzu1ZZ-Dl-8-0Dm_bq0kopcD5BMJU4X8x3MUnDt4C=w230-rw',
        },
      ],
      decsription: 'Laptop HP Victus 16-e1107AX (7C140PA) (Ryzen 5 6600H/RAM 8GB/512GB SSD/ Windows 11)',
      priceLast: '23.490.000 ₫',
      priceFrist: '25.490.000 ₫',
      percentDiscount: '-7.85%',
    },
  ];
  return (
    <>
      <SliderHome />
      <Container>
        <TopLapTop />
        <TopBrand />
        <ListItem title={true} data={listItem} />
      </Container>
    </>
  );
};

export default Home;
