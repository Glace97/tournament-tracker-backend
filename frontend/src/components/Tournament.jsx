/*{
    id: "325425",
    name: "Audi JulCup",
    start_date: "2019-01-13",
    end_date: "2019-01-18"
    },
*/

import React from 'react';

//material ui components
import { Button, Paper } from '@material-ui/core'

//material ui styles
import { makeStyles } from '@material-ui/core/styles'


//makesStyles takes inherited theme
const useStyles = makeStyles(theme => ({
    buttonStyle: {

    }
}));



export default function Tournament({ name }) {
    return (
        <Paper elevation={4}>
            <Button
                variant="outlined"
                color="primary"
                style={{ minWidth: '300px', minHeight: '60px', fontSize: '1.5rem', fontWeight: '500', backgroundColor: '#FFFFFF' }}
            >
                {name}
            </Button>
        </Paper>
    );
}