//contains finished, current and upcoming match
import React from 'react';


//material ui components
import {Paper, Tabs, Tab} from '@material-ui/core';

export default function SchedulePage() {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    
    return (
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Finished" />
                <Tab label="Current" />
                <Tab label="Upcoming" />
            </Tabs>
        </Paper>
    );
}

