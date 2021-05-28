//displays one specific game info between two players

// TODO: 1. fixa utseende
// a)        LEAGUE P12 
//      Player 1      vs     Player 2
// b)       3                  3
// C)       1                  7 
// make room for trophe and checkmark

import React from 'react';


//material UI componentes
import { Card, Grid, Paper } from '@material-ui/core';

//style
import useStyles from '../styles/gameCardStyle';


export default function Game() {
    const classes = useStyles();

    //byt ut paper mot card?
    //problem: för lång namn hamnar utanför paper

    return (
        <div className={classes.root}>
            <Paper elevation={3} style={{textAlign: 'center', padding: '20px'}}>
                <Grid container spacing={3} justify="space-between">
                    <Grid xs={12}>
                        P12 LIGAN
                    </Grid>
                    <Grid item xs={4} > Glacier Ali </Grid>
                    <Grid item xs={4} > vs </Grid>
                    <Grid item xs={4} > Oskar Nehlin </Grid>
                    <Grid item xs={4} > 1 </Grid>
                    <Grid item xs={4} > </Grid>
                    <Grid item xs={4} >2 </Grid>
                    <Grid item xs={4} > 1 </Grid>
                    <Grid item xs={4} > </Grid>
                    <Grid item xs={4} >2 </Grid>
                    <Grid item xs={4} > 1 </Grid>
                    <Grid item xs={4} > </Grid>
                    <Grid item xs={4} >2 </Grid>

                </Grid>
            </Paper>
        </div >
    );
}

