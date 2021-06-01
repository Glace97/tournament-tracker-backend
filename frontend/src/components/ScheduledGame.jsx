import React from 'react';
//material UI componentes
import { Card, Grid, Typography } from '@material-ui/core';

//icons
import DoneIcon from '@material-ui/icons/Done';

//style
import useStyles from '../styles/gameCardStyle';


//gamecard for upcoming games
export default function ScheduledGame({
    player1, 
    player2, 
    court, 
    startTime, 
    player1Arrived,
    player2Arrived,
    league
}) {

    //style obj
    const classes = useStyles();

    //parse starttime from given startdate+time format -> date:hour:minutes
    const splitDate = startTime.split(":"); // returns [date, hour, minute]
    const hour = splitDate[1];
    const minute = splitDate[2];
    let courtInfo; //change court information for something more intuitive if none available 

    return (
        <div className={classes.root}>
            <Card elevation={12} style={{ backgroundColor: '#6A9225', padding: '20px', fontWeight: '600', color: '#f7f7ed', textAlign: 'center' }}>
                <Grid container spacing={12}>
                    <Grid item xs={4}>
                        {player1}
                        {player1Arrived ? <DoneIcon style={{ color: '#48ff00' }} fontSize='small' /> : null}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography> vs </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {player2}
                        {player2Arrived ? <DoneIcon style={{ color: '#48ff00' }} fontSize='small' /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        Class: {league}
                    </Grid>
                    <Grid item xs={12}>
                       Start time: {hour}:{minute}
                    </Grid>
               
                    <Grid item xs={12}>
                        Court: {court == "Andra lediga" ?  courtInfo="Wait for assignment" : courtInfo=court} 
                    </Grid>
                </Grid>
            </Card >
        </div >
    );

}
