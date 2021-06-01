import React from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';


//TODO:
// 1. skicka ner variant, 2. skicka ner vad som händer onclick

export default function LoginButtons({variant, title, submit, color}) {

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
