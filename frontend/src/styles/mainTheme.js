import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#6A9225" //green
        }, 
        secondary: { 
            main: "#446145"
        },

       
        background: {
            default: "#FFFFFF"   
        },
    },


});

export default mainTheme;