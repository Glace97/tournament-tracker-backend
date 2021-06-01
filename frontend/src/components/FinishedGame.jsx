//display finished game info

import React from 'react';
//material UI componentes
import { Card, Grid, Paper, Typography } from '@material-ui/core';

//style
import useStyles from '../styles/gameCardStyle';

//icons
import {TrophyFilled} from '@ant-design/icons'


export default function Game({ playerOne, playerTwo, league, winner, result }) {
    //style obj
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
            <Card elevation={12} style={{backgroundColor: '#6A9225', padding: '20px', fontWeight: '600', color:'#f7f7ed'}}>
                <Grid container spacing={12} justify="space-between">
                    <Grid item xs={6}> 
                        <Typography>
                           Class: {league}
                        </Typography>  
                    </Grid>
                    
                    <Grid item xs={6}>  
                        <Typography>
                            SETS
                        </Typography>  
                    </Grid>
                    <Grid item xs={6}> 
                        {playerOne} 
                        {winner == 1?  <TrophyFilled style={{color: '#FFD700'}}/> : null} 
                    </Grid>
                    {player1Points.map((setPoint) =>
                        <Grid item xs={1}> {setPoint} </Grid>
                    )}

                    <Grid item xs={6}> 
                        {playerTwo} 
                        {winner == 2?   <TrophyFilled style={{color: '#FFD700'}}/> : null}    
                    </Grid>
                    {player2Points.map((setPoint) =>
                        <Grid item xs={1}> {setPoint} </Grid>
                    )}
                </Grid>
            </Card>
        </div >
    );
}

