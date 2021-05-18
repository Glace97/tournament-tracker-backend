
//material ui styles
import { ThemeProvider } from '@material-ui/styles';
import  {CssBaseline, MuiThemeProvider}  from '@material-ui/core'
import  mainTheme  from './styles/mainTheme'

//components
import Tournament  from './components/Tournament';

function App() {
  return (   
    <MuiThemeProvider theme = {mainTheme}>
      <CssBaseline/>
        <Tournament />
    </MuiThemeProvider>
 
  );
}

export default App;
