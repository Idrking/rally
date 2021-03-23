import { makeStyles } from '@material-ui/core/styles';

const volunteerCardStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "100",
    marginBottom: 30,
    display: "wrap",
    boxShadow: "none",
    minWidth: 0
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
  },
  listitemicon: {
    minWidth: 0,
    marginRight: 3
  }
}));

export default volunteerCardStyles;