/*{
    id: "325425",
    name: "Audi JulCup",
    start_date: "2019-01-13",
    end_date: "2019-01-18"
    },
*/

import React from 'react';

//material ui components
import { Button, Typography } from '@material-ui/core'

//material ui styles
import { makeStyles } from '@material-ui/core/styles' 


//makesStyles takes inherited theme
const useStyles = makeStyles( theme => ({
    buttonStyle: {

    }
}));

export default function Tournament() {
    return(
        <>
            <h1 /> Tournament Tracker <h1/>
            <Typography color="primary"> Tournament Tracker </Typography>
            <Button 
                variant="contained" 
                color="primary"
            >
                 Hello 
            </Button>
        </>
    );
}