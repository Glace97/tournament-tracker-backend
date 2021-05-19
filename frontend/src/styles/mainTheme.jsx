import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#A5BE00" //limeRick
        }, 
        secondary: { 
            main: "#FAFAFA" 
        },

        /*
        background: {
            default:   //anti-flash white
        },*/
    },


});

export default mainTheme;