import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0d81b6'
        },
        secondary: {
            main: '#ffffff'
        },
        transPrimary: {
            main: 'rgba(13, 129, 182, 0.7)',
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.849567)'
        },
        transSecondary: {
            main: 'rgba(250, 250, 250, 0.8)',
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.849567)'
        },
        transBlack: {
            main: 'rgba(0, 0, 0, 0.7)',
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.849567)'
        },
        tertiary: {
            main: '#000000'
        },
    }
})

export default theme;