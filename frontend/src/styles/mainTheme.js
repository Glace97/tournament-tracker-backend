import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#62c363" //green
        }, 
        secondary: {
            main: "#FFFFFF"
        },

       
        background: {
            default: "#FFFFFF"   
        },
    },


});

export default mainTheme;