
//material ui styles
import { ThemeProvider } from '@material-ui/styles';
import  {CssBaseline, MuiThemeProvider}  from '@material-ui/core'
import  mainTheme  from './styles/mainTheme'

//components
import Frontpage from './components/Frontpage';

function App() {
  return (   
    <MuiThemeProvider theme = {mainTheme}>
      <CssBaseline/>
        <Frontpage />
    </MuiThemeProvider>
 
  );
}

export default App;
