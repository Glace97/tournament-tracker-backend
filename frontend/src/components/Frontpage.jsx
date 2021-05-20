//ska innehålla generic title
//ska renderea tournaments mha mappning och Tournament comp
//Placera allting i grids här för alignment


//components  (to be moved sen)
import GenericTitle from './GenericTitle';
import Tournament from './Tournament';

//material ui components
import { Grid, List, ListItem } from '@material-ui/core'

//Hook för att gå igenom alla tournaments



export default function Frontpage() {
    const name = "Audi JulCup" //for testpurpose

    return (
        <div >
            <Grid container spacing={3} alignItems="center" direction="column">
                <Grid item xs={12} alignItems="center">
                    <GenericTitle />
                </Grid>
                <Grid item xs={12} alignItems="center">
                    <Tournament name={name} />
                </Grid>
            </Grid>
        </div>
    );
}

