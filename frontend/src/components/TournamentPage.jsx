/*{
    id: "325425",
    name: "Audi JulCup",
    start_date: "2019-01-13",
    end_date: "2019-01-18"
    },
*/



//components  (to be moved sen)
import GenericTitle from './GenericTitle';
import Tournament from './Tournament';

//material ui components
import { Grid, List, ListItem } from '@material-ui/core'



//TODO: anropa api mha redux saga


export default function TournamentPage() {
    
    //for testpurpose ( i verkligenheten finnns fler attributer än name)
    const tournaments = [
        {name: "Audi JulCup", id: "1"},
        {name: "Järfälla kommun JättelångtNamnCuppen", id: "2"},
        {name: "Test233ed TestCup", id: "3"},
        {name: "Spångafsgsegs JulCup", id: "4"}
    
    ];

    return (
        <div >
            <Grid container spacing={2} alignItems="center" direction="column">
                <Grid item xs={12} alignItems="center">
                    <GenericTitle />
                </Grid>
                <Grid item xs={12} alignItems="center">
                    {tournaments.map((tournament) => 
                        <Tournament 
                            name={tournament.name} 
                            id={tournament.id}
                        />)
                    } 
                </Grid>
            </Grid>
        </div>
    );
}

