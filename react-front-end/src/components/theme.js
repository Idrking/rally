import { createMuiTheme,  } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B6C7C3',
    },
    secondary: {
      main: '#FFA945'
    },
    accent: {
      main: '#6D7E73'
    },
    base: {
      main: '#CFCFCF'
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
    h4: {
      fontWeight: 600,
      fontSize: "16px",
      color: "#94A8A3"
    },
    body1: {
      fontWeight: 300,
      fontSize: "24px"
    },
    body2: {
      fontWeight: 300,
      fontSize: "15px",
      color: "#787878"
    }
  }
})

export default theme;