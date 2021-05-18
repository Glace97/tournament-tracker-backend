import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#A5BE00" //limeRick
        }, 
        secondary: { 
            main: "#EBF2FA" //anti-flash white
        },

        backgroundColor: {
          default:  "#ffffff"
        }
    },

});

export default mainTheme;