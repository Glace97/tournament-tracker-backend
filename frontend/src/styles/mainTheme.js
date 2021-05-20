import { createMuiTheme } from '@material-ui/core/styles';


//consistent theme throughout app
const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#37DEC4" //green
        }, 
        secondary: { 
            main: "#BEBEBE" //grey
        },

       
        background: {
            default: "#FFFFFF"   //anti-flash white
        },
    },


});

export default mainTheme;