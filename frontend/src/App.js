//material ui styles
import { ThemeProvider } from '@material-ui/styles';
import  {CssBaseline, MuiThemeProvider}  from '@material-ui/core'
import  mainTheme  from './styles/mainTheme'

//components
import TournamentPage from './components/TournamentPage';




function App() {

  return (   
    <MuiThemeProvider theme = {mainTheme}>
      <CssBaseline/>
        <TournamentPage/>
    </MuiThemeProvider>
 
  );
}

// <TournamentPage />

export default App;
