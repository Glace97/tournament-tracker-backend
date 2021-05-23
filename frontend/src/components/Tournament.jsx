
import React from 'react';

//material ui components
import { Button, Paper, Typography } from '@material-ui/core'
import useStyles from '../styles/tournamentStyle'

//redux imports
import { useDispatch, useSelector } from 'react-redux';
import { tournament } from '../redux/ducks/tournament'

//TO DO:
// 1. ---ONCLICK FUNCTIONIONALITY-- DONE
// 2. STYLE PAPER
// 3. MOVE STYLE ATTRIBUTES TO USESTYLES HOOK

export default function Tournament({ name, id }) {
    
    //get state from reducer, kanske inte behövs?
    const selectedTournament = useSelector((state) => state.tournament.selectedTournament);
    console.log("current tournament: " + selectedTournament)

    //call any functions our duck has, ie dispatch an actions of (argument) type
    const dispatch = useDispatch();

    //custom style obj for tournamentsheet onClick={() => dispatch(tournament())}
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper elevation={4} onClick={() => dispatch(tournament(id))} >
                <Typography color="secondary" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600' }}>
                    {name}
                </Typography>
            </Paper>
        </div>
    );
}


