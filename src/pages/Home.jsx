import SliderHome from '../components/Slide';
import TopLapTop from '../components/TopLapTop/TopLapTop';
import '../assets/scss/Home.scss';
import ListItem from '../components/ListItem/ListItem';
import TopBrand from '../components/TopBrand/TopBrand';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import request, { getAuthToken } from '../services/request/request-service';

const Home = () => {
  const [data, setData] = useState([])
  const [dataTop, setDataTop] = useState([])

  const loadData = async (limit = 12) => {
    try {
      const res = await request.get(`sanphamactive?limit=${limit}&currentpage=0`);
      if (res && res.data) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loadDataTop = async (limit = 4) => {
    try {
      const res = await request.get(`sanphamactive?limit=${limit}&currentpage=0`);
      if (res && res.data) {
        setDataTop(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDataTop()
    loadData();
    return () => { };
  }, []);
  return (
    <>
      <SliderHome />
      <Container>
        <TopLapTop data={dataTop} />
        <TopBrand />
        <ListItem title={true} data={data} />
      </Container>
    </>
  );
};

export default Home;
