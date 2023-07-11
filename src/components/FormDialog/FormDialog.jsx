import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const FormDialog = ({ children, ...props }) => {
  const [rowData, setRowData] = useState({});
  const handleChange = () => {};

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle id="alert-dialog-title" className="title-bold">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                defaultValue={rowData.name}
                variant="outlined"
                margin="normal"
                name="name"
                label="Họ và tên"
                type="text"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                defaultValue={rowData.description}
                variant="outlined"
                margin="normal"
                name="sdt"
                label="Số điện thoại"
                type="number"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                defaultValue={rowData.description}
                variant="outlined"
                margin="normal"
                name="email"
                label="Email"
                type="email"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="title" style={{ fontSize: '15px' }}>
                Địa chỉ nhận hàng
              </div>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rowData.age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rowData.age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Phường/Xã</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rowData.age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ marginTop: 0 }}
                defaultValue={rowData.description}
                variant="outlined"
                margin="normal"
                name="email"
                label="Địa chỉ cụ thể"
                type="email"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button className="button-primary" onClick={props.handleClose}>
          Cancel
        </button>
        <button className="button-second" onClick={props.handleClose}>
          Subscribe
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
