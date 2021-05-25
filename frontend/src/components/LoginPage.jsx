import React from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';
//material ui icons
import { AccountCircle, Lock, SportsTennis } from '@material-ui/icons/';


//styles
import useStyles from '../styles/loginTheme'
import GenericTitle from './GenericTitle';
import LoginButtons from './LoginButtons';
import EmailField from './EmailField';


//TODO:
//1. fixa utseende
//2. lägg till error hantering with felaktig inloggning
//3. routa vidare till admin view ---KOLLA DENNA DEL MED OSKAR-- 

export default function LoginPage() {

    //style
    const classes = useStyles();

    return (
        <Grid container spacing={2} alignItems="center" direction="column">
            <Grid item xs={12} alignItems="center">
                <GenericTitle title="Sign in" />
            </Grid>
            <EmailField/>
            <LoginButtons/>
        </Grid>
    );

}

/*
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField label="Email" />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Lock />
                </Grid>
                <Grid item>
                    <TextField label="Password" type="password" />
                </Grid>
            </Grid>*/