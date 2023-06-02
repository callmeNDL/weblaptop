import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  topLaptopContainer: {
    marginTop: '30px !important',
    paddingTop: '40px !important',
  },
  topLaptop: {
    dislay: 'flex !important',
    '& div.MuiGrid-item': {
      width: '228px',
      height: '100%',
      backgroundColor: 'white !important',
    },
    '& div.MuiCardContent-root': {
      backgroundColor: 'white !important',
    },
  },
  brandName: {
    margin: '0px !important',
    padding: '0px !important',
    borderStyle: 'none !important',
    borderWidth: '1px !important',
    borderColor: 'unset !important',
    opacity: '1 !important',
    color: 'rgb(130, 134, 158) !important',
    fontWeight: '700 !important',
    textDecoration: 'unset !important',
    fontSize: '13px !important',
    lineHeight: '20px !important',
    overflow: 'hidden !important',
  },
  percentDiscount: {
    padding: '0px !important',
    borderStyle: 'none !important',
    borderWidth: '1px !important',
    borderColor: 'unset !important',
    opacity: '1 !important',
    color: 'rgb(20, 53, 195) !important',
    fontWeight: '400 !important',
    textDecoration: 'unset !important',
    fontSize: '12px !important',
    lineHeight: '16px !important',
    overflow: 'hidden !important',
    display: '-webkit-box !important',
    maxWidth: 'unset !important',
    minWidth: 'unset !important',
    transition: 'color 0.3s ease 0s !important',
  },
  priceFrist: {
    margin: '0px 0.25rem 0px 0px !important',
    padding: '0px !important',
    borderStyle: 'none !important',
    borderWidth: '1px !important',
    borderColor: 'unset !important',
    opacity: '1 !important',
    color: 'rgb(130, 134, 158) !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    lineHeight: '16px !important',
    overflow: 'hidden !important',
    display: '-webkit-box !important',
    maxWidth: 'unset !important',
    minwidth: 'unset !important',
    transition: 'color 0.3s ease 0s !important',
    textDecoration: 'line-through !important',
  },
  priceLast: {
    margin: '0px 0.25rem 0px 0px !important',
    padding: '0px !important',
    borderStyle: 'none !important',
    borderWidth: '1px !important',
    borderColor: 'unset !important',
    opacity: '1 !important',
    color: 'rgb(20, 53, 195) !important',
    fontWeight: '700 !important',
    fontSize: '14px !important',
    lineHeight: '16px !important',
    overflow: 'hidden !important',
    display: '-webkit-box !important',
    maxWidth: 'unset !important',
    minwidth: 'unset !important',
    transition: 'color 0.3s ease 0s !important',
  },
}));

export default useStyles;
