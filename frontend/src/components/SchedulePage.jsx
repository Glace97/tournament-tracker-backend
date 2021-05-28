//contains finished, current and upcoming match
import React from 'react';


//material ui components
import {Paper, Tabs, Tab} from '@material-ui/core';

import Game from './Game';

export default function SchedulePage() {

    //value -> index of tab. 
    const [value, setValue] = React.useState(0);
    
    console.log("value: " + value);

    return (
        <>
        <Paper>
            <Tabs
                value={value}
                onChange={(event, newValue) => { setValue(newValue)}}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Finished" />
                <Tab label="Current" />
                <Tab label="Upcoming" />
            </Tabs>
        </Paper>
       <Game/>
        </>
    );
}

