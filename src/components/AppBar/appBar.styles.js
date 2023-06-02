import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  AppBar: {
    backgroundColor: 'white !important',
    height: '88px',
    color: 'rgb(130, 134, 158) !important',
    fontWeight: 500,
    '& div.MuiToolbar-root': {
      height: '100%',
    },
    '& input.MuiInputBase-input': {
      display: 'block !important',
      width: '100% !important',
      borderRadius: '4px !important',
      border: '1px solid #e0e0e0 !important',
      minHeight: '16px !important',
      backgroundColor: 'transparent !important',
      flex: '1 !important',
      height: '100% !important',
    },
  },
  Profile: {
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'space-around',

    '& svg.MuiSvgIcon-root': {
      fontSize: '32px',
    },
  },
  img: {
    width: '50px',
    margin: '0 30px',
  },
  SearchBox: {
    backgroundColor: '#F5F5F5 !important',
  },
}));

export default useStyles;
