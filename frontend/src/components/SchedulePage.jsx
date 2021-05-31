//contains finished, current and upcoming games SHIFT mellan dessa

import React from 'react';


//material ui components
import { Paper, Tabs, Tab } from '@material-ui/core';

import Game from './FinishedGame';

export default function SchedulePage() {

    //value -> index of tab. 
    const [value, setValue] = React.useState(0);


    //moch data
    const finished = [
        {
            class: "P12",
            player1: "Aleksandar Mitic",
            player2: "Oskar Nehlin",
            winner: 2,
            result: "7-6 3-6 6-4",
        },
        {
            class: "P12",
            player1: "Aleksandar Mitic",
            player2: "Oskar Nehlin",
            winner: 1,
            result: "7-6 3-6 6-4",
        },
        {
            class: "P12",
            player1: "Aleksandar Mitic",
            player2: "Oskar Nehlin",
            winner: 2,
            result: "7-6 3-6 6-4",
        }]



    return (
        <>
            <Paper>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => { setValue(newValue) }}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Finished" />
                    <Tab label="Current" />
                    <Tab label="Upcoming" />
                </Tabs>
            </Paper>

            {/*VISA ENBART DENNA KOMPOMENTN OM CURRENT LABEL ÄR FINISHED*/}
            {finished.map((finishedGame) =>
                <Game
                    playerOne={finishedGame.player1}
                    playerTwo={finishedGame.player2}
                    league={finishedGame.class}
                    winner={finishedGame.winner}
                    result={finishedGame.result}
                />
            )}
        </>
    );
}

