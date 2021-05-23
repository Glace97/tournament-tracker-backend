import { Grid, Button, Typography, Paper } from '@material-ui/core';


//TODO: //2. Login knapp routa till loginpage
//3. Tournament knapp ska routa till /tournament
//Ändra färg och font 

export default function FrontPageButtons() {
    return (
        <>
            <Grid item xs={12} alignItems="center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ minWidth: '200px', fontSize: '1.2rem', color:"#FFF0D7"}} 
                    disableRipple="true" 
                >
                    TOURNAMENTS
                </Button>
            </Grid>
            <Grid item alignItems="center">
                <Button 
                    variant="outlined" 
                    color="primary" 
                    style={{ minWidth: '200px', fontSize: '1.2rem'}} 
                    disableRipple="true"
                >
                    LOGIN AS ADMIN
                </Button>
            </Grid>
        </>
    );
}