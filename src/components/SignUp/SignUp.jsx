import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Copyright from '../Copyright/Copyright';
import request from '../../services/request/request-service';
import { DatePicker } from '@mui/x-date-pickers';
import { enqueueSnackbar } from 'notistack';

export default function SignUp() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    const loadProvince = async () => {
      try {
        const req = await request.get('/province');
        if (req && req.data) {
          setProvince(req.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadProvince();
    return () => {};
  }, []);

  useEffect(() => {
    const loadDistrict = async () => {
      try {
        const req = await request.get(`/district/${credentials.province}`);
        if (req && req.data) {
          setDistrict(req.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (credentials && credentials.province) {
      loadDistrict();
    }
    return () => {};
  }, [credentials.province]);

  useEffect(() => {
    const loadWard = async () => {
      try {
        const req = await request.get(`/ward/${credentials.district}`);
        if (req && req.data) {
          setWard(req.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (credentials && credentials.district) {
      loadWard();
    }
    return () => {};
  }, [credentials.district]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const changeDate = (view) => {
    const date = view.$d.toLocaleDateString('en-CA');
    setCredentials({
      ...credentials,
      ['ngaySinh']: date,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await request.post('/customer/register', credentials);
      if (res) {
        enqueueSnackbar('Đăng ký thất bại', { variant: 'success' });
        setCredentials({});
        navigate('/signIn');
      }
    } catch (error) {
      enqueueSnackbar('Đăng ký thất bại', { variant: 'error' });
    }
  };

  return (
    <div className="bg-container">
      <Container component="main" maxWidth="xs" style={{ padding: '20px 0px' }}>
        <div className="box-white">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng ký
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="hoTenLot"
                    required
                    fullWidth
                    id="hoTenLot"
                    label="Họ va tên lót"
                    onChange={handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="ten"
                    label="Ten"
                    name="ten"
                    autoComplete="family-name"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    id="username"
                    autoComplete="new-username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Ngày sinh"
                    onChange={(view) => {
                      changeDate(view);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="soDienThoai"
                    label="SDT"
                    id="soDienThoai"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Thành phố / Tỉnh</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={credentials && credentials.province ? credentials.province : ''}
                      label="province"
                      name="province"
                      onChange={handleChange}
                    >
                      {province.map(({ id, name, code }) => {
                        return (
                          <MenuItem value={id} key={id}>
                            {name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Quận / Huyện</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={credentials && credentials.district ? credentials.district : ''}
                      label="district"
                      name="district"
                      onChange={handleChange}
                    >
                      {district &&
                        district.map((item) => {
                          return (
                            <MenuItem key={item.id} value={item.id}>
                              {item.name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Phường</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={credentials && credentials.ward ? credentials.ward : ''}
                      label="ward"
                      name="ward"
                      onChange={handleChange}
                    >
                      {ward.map(({ id, name, code }) => {
                        return (
                          <MenuItem value={id} key={id}>
                            {name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="diaChi"
                    required
                    fullWidth
                    id="diaChi"
                    label="Địa chỉ"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Đăng ký
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => {
                      navigate('/signin');
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </div>
      </Container>
    </div>
  );
}
