import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  FormGroup: {
    width: '100%',

    justifyContent: 'space-between',
    flexDirection: 'row !important',
  },
  hidden: {
    height: '65px',
    overflow: 'hidden',
  },
  label: {
    width: '50% ',
    margin: '0 !important',
  },
}));

export default useStyles;
