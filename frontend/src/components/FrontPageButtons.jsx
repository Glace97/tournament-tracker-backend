//react imports
import { useHistory } from 'react-router-dom';

//material imports
import { Grid, Button } from '@material-ui/core';



//TODO: //2. Login knapp routa till loginpage
//3. Tournament knapp ska routa till /tournament
//Ändra färg och font 

export default function FrontPageButtons() {
    
    const history= useHistory();

    return (
        <>
            <Grid item xs={12} alignItems="center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ minWidth: '200px', fontSize: '1.2rem', color:"#FFF0D7"}} 
                    disableRipple="true" 
                    onClick={() => history.push("/tournaments")}
                >
                    TOURNAMENTS
                </Button>
            </Grid>
            <Grid item alignItems="center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ minWidth: '200px', fontSize: '1.2rem', color:"#FFF0D7"}} 
                    disableRipple="false"
                    onClick={() => history.push("/loginPage")}
                >
                    LOGIN AS ADMIN
                </Button>
            </Grid>
        </>
    );
}