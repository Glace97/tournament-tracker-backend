import React from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';


//GÖR MER GENERISK
// 1. skicka ner variant, 2. skicka ner vad som händer onclick

export default function LoginButtons({variant, title, submit, color}) {
    console.log(color);
    return (
        <Grid item xs={12} >
            <Button 
                variant={variant} 
                color="primary" 
                style={{ minWidth: '226px', fontSize: '1.1rem', color: color}}   
                onClick={submit}
            >
                {title}  
            </Button>
        </Grid>

    );
}


/*

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

*/