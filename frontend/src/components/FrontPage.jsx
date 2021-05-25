import React from 'react';

//specific css style
import '../styles/frontpage.css';

//components
import GenericTitle from './GenericTitle';
import FrontPageButton from './FrontPageButton';

//material ui
import { Grid, Button, Typography } from '@material-ui/core';

//TODO: 1. fixa interface
//Ändra färg och font på tournamentracker, ser weird ut i full screen

export default function FrontPage() {
    return (
        <div class="background">
            <Grid container spacing={2} alignItems="center" direction="column">
                <Grid item xs={12} alignItems="center">
                    {/*Some extra padding for style*/}
                    <div style={{marginTop: '120px', marginBottom: '430px'}}> 
                        <GenericTitle title="Tournament Tracker"/>
                    </div>
                </Grid>
                <FrontPageButton title="TOURNAMENTS" link="/tournaments"/>
                <FrontPageButton title="LOGIN AS ADMIN" link="/loginPage"/>
            </Grid>
        </div>
    );
}