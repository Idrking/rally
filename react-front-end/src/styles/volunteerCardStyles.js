import { makeStyles } from '@material-ui/core/styles';

const volunteerCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: "100",
    marginBottom: 30,
    display: "wrap",
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
    gridTemplateColumns: "1fr 2fr",
    paddingTop: 20,
    paddingLeft: 20,
  },
}));

export default volunteerCardStyles;