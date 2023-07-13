import { Card, Grid, Typography } from '@mui/material';
import NoContent from '../NoContent/NoContent';
import './Commande.scss';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
  tableCart: {
    border: 'none !important',
    backgroundColor: 'white',
    borderRadius: '8px',
    borderColor: 'white',

    '& div.MuiDataGrid-withBorderColor': {
      borderColor: 'white',
    },
  },
  price: {
    borderStyle: 'none',
    borderWidth: '1px',
    borderColor: 'unset',
    opacity: '1',
    width: 'max-content',
    display: 'inline-block',
    color: 'inherit',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

const enumStatusBill = [
  { value: 1, lable: 'Đặt', color: 'blue' },
  { value: 2, lable: 'Đang chuẩn bị', color: 'orange' },
  { value: 3, lable: 'Đang giao', color: 'orange' },
  { value: 4, lable: 'Thành công', color: 'green' },
  { value: 5, lable: 'Hủy', color: 'red' },
];

const Commande = ({ data }) => {
  const classes = useStyles();
  const [dataSelected, setDataSelected] = useState(null);

  const columns = [
    {
      field: 'id',
      headerName: 'Mã đơn hàng',
      minWidth: 50,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              setDataSelected(params?.row);
            }}
          >
            <div style={{ color: 'blue', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              {params?.row?.id}
            </div>
          </div>
        );
      },
    },
    {
      field: 'tenSanPham',
      headerName: 'Sản phẩm',
      minWidth: 400,
      renderCell: (params) => (
        <div className="item-cart" style={{ width: 450 }}>
          <div className="item-cart-des">
            <div className="name">{params?.row?.chiTietHoaDons?.[0]?.sanPham?.tenSanPham}</div>
          </div>
        </div>
      ),
    },
    {
      field: 'createDate',
      headerName: 'Ngày mua',
      minWidth: 130,
      renderCell: (params) => <div>{params?.row?.createDate}</div>,
    },
    {
      field: 'tongTien',
      headerName: 'Thành tiền',
      minWidth: 130,
      renderCell: (params) => (
        <div className={classes.price}>
          {params?.row?.tongTien?.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          }) ?? ''}
        </div>
      ),
    },
    {
      field: 'trangThai',
      headerName: 'Trạng thái',
      minWidth: 130,
      renderCell: (params) => (
        <div style={{ color: enumStatusBill[params?.row?.trangThai - 1].color }}>
          {enumStatusBill.find((item) => item.value === params?.row?.trangThai)?.lable}
        </div>
      ),
    },
  ];

  useEffect(() => {
    // setDataSelected(null)
  }, []);

  console.log(dataSelected, 'setDataSelected,');

  return (
    <div className="commande-container">
      {!dataSelected ? (
        <>
          <div className="title">Quản lý đơn hàng</div>
          <div className="commade-content">
            {!data?.length > 0 && <NoContent des={'Bạn không có sản phẩm nào'} />}
            <Grid container>
              <Grid item xs={12}>
                <DataGrid
                  className={classes.tableCart}
                  rows={data || []}
                  columns={columns}
                  // columnVisibilityModel={{
                  //   id: false,
                  // }}
                  disableColumnMenu
                  disableColumnFilter
                  disableRowSelectionOnClick
                  disableDensitySelector
                  hideFooter
                  autoHeight
                  rowHeight={100}
                />
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
              {' '}
              <ArrowBackIosIcon
                sx={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                onClick={() => {
                  setDataSelected(null);
                }}
              />
              Chi tiết đơn hàng : {dataSelected?.id}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card style={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                      Thông tin người nhận
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: '600' }}>Người nhận:</span>
                      {dataSelected?.tenKhachHang}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: '600' }}> Hình thức nhận hàng:</span> Giao tiêu chuẩn
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: '600' }}> Địa chỉ:</span> {dataSelected?.diaChi}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: '600' }}> Điện thoại:</span> {dataSelected?.soDienThoai}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card style={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                      Thông tin đơn hàng
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: 'bold' }}>Trạng thái đơn hàng:</span> {dataSelected?.trangThai}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span style={{ fontWeight: 'bold' }}> Thời gian tạo:</span>
                      {dataSelected?.createDate}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                      Sản phẩm
                    </Typography>
                  </Grid>
                  {dataSelected?.chiTietHoaDons?.map((item) => (
                    <>
                      <Grid item xs={10}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img
                            src={
                              'https://lh3.googleusercontent.com/7rvuPBx-BS-q4QXqH1xZF7dLIjpi0__Fw_XV1_qw4GaXepR63JBRKOEOJMwSTL2sui58w_OCuzSpdiiI7BArT27mWduE6Asu=w500-rw'
                            }
                            alt="img-product-cart"
                            style={{ width: '120px', marginRight: '20px' }}
                          />
                          <div className="item-cart-des">
                            <div className="name">{item?.sanPham?.tenSanPham}</div>
                            <div>So luong:{item?.soLuong}</div>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        style={{ display: 'flex', alignItems: 'center', fontWeight: '700', fontSize: '16px' }}
                      >
                        {item?.gia.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) ?? ''}
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                      Phương thức thanh toán
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    Thanh toán khi nhận hàng
                  </Grid>
                  <Grid item xs={2} style={{ fontWeight: '700', fontSize: '16px' }}>
                    {Number(123123123).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) ?? ''}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Commande;
