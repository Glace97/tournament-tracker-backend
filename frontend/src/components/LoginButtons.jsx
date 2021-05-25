import React from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';


//GÖR MER GENERISK

export default function LoginButtons() {
    return (
        <>
            <Grid item xs={12} >
                <Button variant="contained" color="primary" style={{ minWidth: '150px', fontSize: '1.0rem', color: "#FFF0D7" }}>
                    Log in
                </Button>
            </Grid>
            <Grid item xs={12} >
                <Button variant="contained" color="primary" style={{ minWidth: '150px', fontSize: '1.0rem', color: "#FFF0D7" }}>
                    Forgot password
                </Button>
            </Grid>
            <Grid item xs={12} >
                <Button variant="outlined" color="primary" style={{ minWidth: '150px', fontSize: '1.0rem' }}>
                    Create Account
                </Button>
            </Grid>
        </>

    );
}