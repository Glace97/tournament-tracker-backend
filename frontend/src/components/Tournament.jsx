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
// 2. STYLE PAPER
// 3. MOVE STYLE ATTRIBUTES TO USESTYLES HOOK

export default function Tournament({ name, id }) {
    
    //custom style obj for tournamentsheet
    const classes = useStyles();

    const dispatch = useDispatch();
    
    const history = useHistory(); 

    
    //update current tournament on selection and change browser url
    const handleClick = () => { 
        dispatch(tournament(id));
        history.push(`/tournaments/${id}/schedule`);    
    };

    return (
        <div className={classes.root}>
            <Paper elevation={4} onClick={handleClick} style={{background: '#6A9225'}}>
                <Typography color="secondary" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '400'}}>
                    {name}
                </Typography>
            </Paper>
        </div>
    );
}


