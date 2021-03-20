import { createMuiTheme,  } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6D7E73',
    },
    secondary: {
      main: '#4B6253'
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
    body1: {
      fontWeight: 300,
      fontSize: "24px"
    }
  }
})

export default theme;