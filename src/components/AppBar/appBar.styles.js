import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  AppBar: {
    backgroundColor: 'white',
    height: '88px',
    color: 'rgb(130, 134, 158)',
    fontWeight: 500,
    boxShadow: 'none',

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
    minWidth: '150px',
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
  searchContainer: {
    width: '100%',
  },
  SearchBox: {
    maxWidth: '500px',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    border: '1px solid #eaeaea',
    borderRadius: '8px',
  },
  searchInput: {
    width: '100%',
    borderRadius: '8px',
    paddingLeft: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    height: '36px',
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
  },
  searchButton: {
    cursor: 'pointer',
    border: '0',
    background: 'blue',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      color: 'white',
    },
  },
}));

export default useStyles;
