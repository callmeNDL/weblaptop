import React, { useEffect, useState } from 'react';
import './itemDetail.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CachedIcon from '@mui/icons-material/Cached';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { get } from '../../services/request/request-service';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCardItem } from '../../redux/card/card.actions';
import { enqueueSnackbar } from 'notistack';
import { setItemCheckout } from '../../redux/checkout/checkout.actions';

const ItemDetail = () => {
  const [imageActive, setImageActve] = useState({});
  const [data, setData] = useState({});
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [img, setImg] = useState([]);

  const imgDetail = [
    {
      id: '1',
      img: 'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw',
    },
    {
      id: '2',
      img: 'https://lh3.googleusercontent.com/j-HuK5Q_1efRp-Am8iO5YCI-c14cCrLa9CqP_pH00ZFg0XbSvn4dWEcbu6i74BYisJiVPn6CvUBBhm0HH9CYzmT7UPFObyf5Cw=w500-rw',
    },
    {
      id: '3',
      img: 'https://lh3.googleusercontent.com/f_09jlPo5V3L_9PDwkmqNVMQufB8-WSWoTVNp80O6tiU9FVRv4UimKmA96GV0FV9u8m3jrchBgZOuvpg4HRdq7Luz6LNe9wX=w500-rw',
    },
    {
      id: '4',
      img: 'https://lh3.googleusercontent.com/ShDu3j2lU_kgp5cvEqz4ECELz-d5ULvEjOpbKie2JYSNdqy04WPqKaafX73TlqvmV0za72a0bHhKSA6tB7Ctc0JEY7K8gom1eQ=w500-rw',
    },
    {
      id: '5',
      img: 'https://lh3.googleusercontent.com/BkT11UBsn3um0N0zVqAM3GUBdrzBlMWuyGvpy9BdUJ6WOgyn3v88fT-DCcoY_iKP2r2mn1ZKMsURepKohXAzqZ8drhu-R5LV=w1000-rw',
    },
  ];

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleCheckOut = () => {
    if (!user?.userId) {
      navigate('/signIn');
    } else {
      console.log(data, "Cehck data");
      dispatch(setItemCheckout([{ ...data, quantity: 1 }]))
      navigate('/checkout');
    }
  }
  const getDetail = async (id) => {
    try {
      const res = await get(`sanpham/${productId}`);
      if (res?.status === 'OK') {
        const { thuocTinhs, gia, ...rest } = res.data;
        setData({
          ...res.data,
          giaVND: gia?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) ?? '',
          CPU: thuocTinhs?.filter((item) => item?.tenThuocTinh === 'CPU')?.map((el) => el.giaTriThuocTinh) ?? [],
          RAM: thuocTinhs?.filter((item) => item?.tenThuocTinh === 'Ram')?.map((el) => el.giaTriThuocTinh) ?? [],
          MANHINH:
            thuocTinhs?.filter((item) => item?.tenThuocTinh === 'Màn hình')?.map((el) => el.giaTriThuocTinh) ?? [],
          LUUTRU: thuocTinhs?.filter((item) => item?.tenThuocTinh === 'Lưu trữ')?.map((el) => el.giaTriThuocTinh) ?? [],
          MAU: thuocTinhs?.filter((item) => item?.tenThuocTinh === 'Màu sắc')?.map((el) => el.giaTriThuocTinh) ?? [],
        });
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const handeAddCard = () => {
    dispatch(addCardItem(data));
    enqueueSnackbar('Thêm vào giỏ hàng thành công.', { variant: 'success' });
  };

  useEffect(() => {

    if (productId) {
      getDetail(productId);
    }
  }, [productId]);


  useEffect(() => {
    if (!!img && img.length) {
      setImageActve(img[0] ?? {});
    }
  }, [img])

  useEffect(() => {
    if (data) {
      setImg(data?.hinhAnhs)
    }
  }, [data])

  console.log(img, "imgDetail");

  return (
    <div className="itemDetail-Box">
      <div className="item-left">
        <div className="imageContainer">
          <div className="img-preview">
            <img src={imageActive?.path ?? ''} alt={`img-active-${imageActive?.id}`} />
          </div>
          <div className="list-imgProduct">
            {data?.hinhAnhs?.map((item) => (
              <div
                className={`img-box ${imageActive.id === item.id ? 'img-box--active' : ''}`}
                key={item.id}
                onMouseEnter={() => setImageActve(item)}
              >
                <img src={item.path} alt={`img-${item.id}`} />
              </div>
            ))}
          </div>
          <div className="line-bottom"></div>
          <div className="product-decs">
            - CPU: {data?.CPU?.map((item, index) => `${index === data?.CPU?.length - 1 ? item : item + ' / '}`)}
            <br />- Màn hình:
            {data?.MANHINH?.map((item, index) => `${index === data?.CPU?.length - 1 ? item : item + ' / '}`)}
            <br />- RAM: {data?.RAM?.map(
              (item, index) => `${index === data?.CPU?.length - 1 ? item : item + ' / '}`
            )}{' '}
            <br />- Màu: {data?.MAU?.map((item, index) => `${index === data?.CPU?.length - 1 ? item : item + ' / '}`)}
            <br />- Lưu trữ:{' '}
            {data?.LUUTRU?.map((item, index) => `${index === data?.CPU?.length - 1 ? item : item + ' / '}`)} <br />
          </div>
        </div>
        <div className="itemInformation">
          <div className="item-name">{data?.tenSanPham}</div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Thương hiệu {data?.nhaSanXuat?.tenNhaSanXuat}
            </Grid>
            <Grid item xs={1}>
              |
            </Grid>
            <Grid item xs={5}>
              Mã SP {data?.id}{' '}
            </Grid>
          </Grid>
          <div className="item-price">{data?.giaVND}</div>
          {/* <div className="item-price-sale">
            {item.priceFrist} <span>{item.percentDiscount}</span>
          </div> */}
          <div className="line-bottom"></div>
          <div className="button-box">
            <button className="button-primary" onClick={handleCheckOut}>Mua Ngay</button>
            <button className="button-second" onClick={handeAddCard}>
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="line-bottom"></div>
          <div className="discount-box">
            <p className="discount-title">Khuyến mãi liên quan</p>
            <ul>
              <li>
                Hỗ trợ trả góp với đơn hàng từ 3.000.000đ
                <Link>Xem chi tiết</Link>
              </li>
              <li>
                Nhận voucher giảm 600.000đ cho đơn từ 1.200.000đ khi hoàn thành mở thẻ TPBank EVO
                <Link>Xem chi tiết</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-info">
        <div className="warranty-policy">
          <Typography variant="h6">Chính sách bán hàng</Typography>
          <Grid container>
            <Grid item sx={{ padding: '10px' }}>
              <VerifiedUserIcon sx={{ paddingRight: '10px' }} />
              Miễn phí giao hàng cho đơn hàng từ 5 triệu
            </Grid>
            <Grid item sx={{ paddingLeft: '10px' }}>
              <CachedIcon sx={{ paddingRight: '10px' }} />
              Cam kết hàng chính hãng 100%
            </Grid>
            <Grid item sx={{ padding: '10px' }}>
              <LocalShippingIcon sx={{ paddingRight: '10px' }} />
              Cam kết hàng chính hãng 100%
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
