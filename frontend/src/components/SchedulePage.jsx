
import React from 'react';

//material ui components
import { Paper, Tabs, Tab } from '@material-ui/core';

//components
import FinishedGame from './FinishedGame';
import CurrentGame from './CurrentGame';

//contains finished, current and upcoming games
export default function SchedulePage() {

    //value -> index of tab. Decides which card user wants displayed 
    const [value, setValue] = React.useState(0);


    //mock data
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


    const playing = [{
        class: "P12",
        player1: "Aleksandar Mitic",
        player2: "Oskar Nehlin",
        court: "Bana 3",
    },
    {
        class: "P12",
        player1: "Aleksandar Mitic",
        player2: "Oskar Nehlin",
        court: "Bana 3",
    },
    {
        class: "P12",
        player1: "Aleksandar Mitic",
        player2: "Oskar Nehlin",
        court: "Bana 3",
    }];

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

            {/*only display games for specified tab*/}
            {value == 0 ?
                finished.map((finishedGame) =>
                    <FinishedGame
                        playerOne={finishedGame.player1}
                        playerTwo={finishedGame.player2}
                        league={finishedGame.class}
                        winner={finishedGame.winner}
                        result={finishedGame.result}
                    />
                ) : null
            }

            {value == 1 ? 
                 playing.map((currentGame) =>
                    <CurrentGame 
                        player1={currentGame.player1}
                        player2={currentGame.player2}
                        court={currentGame.court}
                        league={currentGame.class}
                    />
                 ) : null}
        </>
    );
}

