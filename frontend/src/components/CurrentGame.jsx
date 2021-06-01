
import React from 'react';
//material UI componentes
import { Card, Grid, Paper, Typography } from '@material-ui/core';

//style
import useStyles from '../styles/gameCardStyle';

//currently playing on specific court
export default function CurrentGame({ league, player1, player2, court }) {
    //style obj
    const classes = useStyles();


    //TO DO: HIGHLIGHT TYPOGRAPHY
    return (
        <div className={classes.root}>
            <Card elevation={12} style={{ backgroundColor: '#6A9225', padding: '20px', fontWeight: '600', color: '#f7f7ed', textAlign: 'center' }}>
                <Grid container spacing={12}>
                <Grid item xs={12}>
                        <Typography variant="h5"> {league} </Typography>
                    </Grid>

                    <Grid item xs={4}> {player1} </Grid>
                    <Grid item xs={4}>
                        <Typography> vs </Typography>
                    </Grid>
                    <Grid item xs={4}> {player2}  </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5"> On: {court} </Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>

    );
}