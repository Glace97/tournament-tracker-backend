import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#62c363" //green
        }, 
        secondary: { 
            main: "#9c9c9c"
        },

       
        background: {
            default: "#FFFFFF"   
        },
    },


});

export default mainTheme;