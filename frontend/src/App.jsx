//material ui styles
import { ThemeProvider } from '@material-ui/styles';
import  {CssBaseline, MuiThemeProvider}  from '@material-ui/core'
import  mainTheme  from './styles/mainTheme'

//components
import TournamentPage from './components/TournamentPage';
import SwitchPages from './components/SwitchPages';

//switch router statements inom app?
//switcha mellan following pages: login (admin), register (admin), tournaments, schedule

function App() {

  return (   
    <MuiThemeProvider theme = {mainTheme}>
      <CssBaseline/>
        <SwitchPages/>
    </MuiThemeProvider>
 
  );
}

// <TournamentPage />

export default App;
