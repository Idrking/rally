import { makeStyles } from '@material-ui/core/styles';

const volunteerCardStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "100",
    marginBottom: 30,
    display: "wrap",
    boxShadow: "none"
  },
  media: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    verticalAlign: 'middle',
  },
  flex: {
    display: "grid",
    gridTemplateColumns: "2fr 4fr",
    // paddingTop: 20,
    // paddingLeft: 20,
  },
  avatardiv: {
    margin: "auto"
  }
}));

export default volunteerCardStyles;