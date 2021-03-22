import { createMuiTheme,  } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6D7E73',
    },
    secondary: {
      main: '#FFA945'
    },
    accent: {
      main: '#6D7E73'
    },
    base: {
      main: '#fffff'
    },
    grey: {
      main: '#B8B7B6'
    },
  },
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: "72px"
    },
    h2: {
      fontWeight: 300,
      fontSize: "31px",
      color: "#4B6253"
    },
    h3: {
      fontWeight: "normal",
      fontSize: "18px",
      color: "#4B6253"
    },
    body1: {
      fontWeight: 300,
      fontSize: "24px"
    },
    body2: {
      fontWeight: 300,
      fontSize: "14px",
      color: "#787878"
    }
  }
})

export default theme;