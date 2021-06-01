import React from 'react';

//material ui comoponents
import { Grid, TextField } from '@material-ui/core';


//TODO: 
//2. hantera felaktig inlogg
//3. spara inlogg mha cookies


//local variables onChange sent ot parent component
export default function EmailField({ email, updateEmail, validEmail, pwd, updatePwd }) {
    return (
        <>
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
            <Grid item xs={12} alignItems="center">
                <TextField
                    error={!validEmail}
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={pwd}
                    onChange={(event) => updatePwd(event.target.value)}
                />
            </Grid>
          
        </>
    );
}

