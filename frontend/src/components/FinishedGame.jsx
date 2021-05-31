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


export default function Game({ playerOne, playerTwo, league, winner, result }) {
    const classes = useStyles();
 
    //parse result and split in separate arrays for each player per set
    var player1Points = new Array();
    var player2Points = new Array();
    const sets = result.split(" "); //return array with sets

    //assign points to each player from set
    sets.forEach(set => {
        const points = set.split("-");
        player1Points.push(points[0]);
        player2Points.push(points[1]);
    });

    //if only 3 sets, fill remainder with "-"
    if (sets.length == 3) {
        for (var counter = 2; counter > 0; counter--) {
            player1Points.push("-");
            player2Points.push("-");
        }
    }

    return (
        <div className={classes.root}>
            <Card elevation={3} style={{ padding: '20px' }}>
                <Grid container spacing={12} justify="space-between">
                    <Grid xs={6}> {league} </Grid>
                    <Grid item xs={6}> SETS </Grid>

                    <Grid item xs={6}> {playerOne} </Grid>
                    {player1Points.map((setPoint) =>
                        <Grid item xs={1}> {setPoint} </Grid>
                    )}

                    <Grid item xs={6}> {playerTwo} </Grid>
                    {player2Points.map((setPoint) =>
                        <Grid item xs={1}> {setPoint} </Grid>
                    )}
                </Grid>
            </Card>
        </div >
    );
}

