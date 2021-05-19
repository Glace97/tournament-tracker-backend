//ska innehålla generic title
//ska renderea tournaments mha mappning och Tournament comp
//Placera allting i grids här för alignment


//components  (to be moved sen)
import GenericTitle from './GenericTitle';


//material ui components
import { Button, Grid } from '@material-ui/core'



export default function Frontpage() {
    return (
        <div >
            <Grid container spacing={3} alignItems="center" direction="column"> 
                <Grid item xs={12} alignItems="center">
                    <GenericTitle />
                </Grid>
                <Grid item xs={12} alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Hello
                </Button>
                </Grid>
            </Grid>
        </div>
    );
}