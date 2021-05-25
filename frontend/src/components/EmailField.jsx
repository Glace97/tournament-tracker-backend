import React from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';
//material ui icons
import { AccountCircle, Lock, SportsTennis } from '@material-ui/icons/';


//styles
import useStyles from '../styles/loginTheme'
import GenericTitle from './GenericTitle';
import LoginButtons from './LoginButtons';



//TODO: 1. fixa utseende
// 2. uppdatera state onChange
//2. hantera felaktig inlogg
//3. spara inlogg mha cookies
export default function EmailField(){
    return(
        <Grid item xs={12} alignItems="center">
            <TextField 
                label="Email address" 
                type="email" 
                variant="outlined" 
            />
        </Grid>
    );

}

