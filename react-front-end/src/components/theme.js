import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F5AE5E',
    },
    secondary: {
      main: '#F0622F'
    },
    accent: {
      main: '#6D8C77'
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
    body1: {
      fontWeight: 300,
      fontSize: "24px"
    }
  }
})

export default theme;