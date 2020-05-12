import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100%'
  },
  inline: {
    display: 'inline',
  },
  column: {
    display:'flex',
    flexFlow:'column'
  },
  button : {
    background:'#e0e0e0',
    color: '#000000de'
  }
});

export default useStyles;