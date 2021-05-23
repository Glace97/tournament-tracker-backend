
//react imports
import React from 'react';
import { useHistory } from 'react-router-dom';

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
    
    //custom style obj for tournamentsheet
    const classes = useStyles();

    //get state from reducer, kanske inte behövs sen framöver?
    const selectedTournament = useSelector((state) => state.tournament.selectedTournament); 

    //call any functions our duck has, ie dispatch an actions of (argument) type
    const dispatch = useDispatch();
    
    const history = useHistory(); 

    const handleClick = () => { 
        //update current tournament obj state
        dispatch(tournament(id));
        console.log("current tournament: " + selectedTournament) //TA BORT
        history.push(`/${id}/schedule`);    
    };


    return (
        <div className={classes.root}>
            <Paper elevation={4} onClick={handleClick} >
                <Typography color="secondary" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600' }}>
                    {name}
                </Typography>
            </Paper>
        </div>
    );
}


