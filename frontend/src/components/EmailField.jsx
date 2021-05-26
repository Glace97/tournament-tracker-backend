import React from 'react';

//material ui comoponents
import { Grid, TextField } from '@material-ui/core';


//TODO: 1. fixa utseende
// 2. uppdatera state onChange  -> kan ligga lokalt 
//2. hantera felaktig inlogg
//3. spara inlogg mha cookies


//local variables onChange sent ot parent component
export default function EmailField({email, updateEmail, validEmail}){

    

    return(
        <Grid item xs={12} alignItems="center">
            <TextField 
                error={!validEmail}            
                label="Email address" 
                type="email" 
                variant="outlined"
                value={email}
 
                onChange={(event) => updateEmail(event.target.value)}
            />
        </Grid>
    );

}

