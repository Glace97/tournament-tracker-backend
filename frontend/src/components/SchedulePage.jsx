
import React from 'react';

//material ui components
import { Paper, Tabs, Tab } from '@material-ui/core';

//components
import FinishedGame from './FinishedGame';
import CurrentGame from './CurrentGame';
import ScheduledGame from './ScheduledGame';

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

    const scheduled = [
        {
          class: "P12",
          player1: "Aleksandar Mitic",
          player1_arrived: true,
          player2_arrived: true,
          player2: "Oskar Nehlin",
          court: "Andra lediga",
          start_time: "2020-03-20:12:32"
        },
        {
          class: "P12",
          player1: "Aleksandar Mitic",
          player1_arrived: true,
          player2_arrived: false,
          player2: "Oskar Nehlin",
          court: "Andra lediga",
          start_time: "2020-03-20:12:32"
        },
        {
          class: "P12",
          player1: "Aleksandar Mitic",
          player1_arrived: false,
          player2_arrived: true,
          player2: "Oskar Nehlin",
          court: "Andra lediga",
          start_time: "2020-03-20:12:32"
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

            {/*conditionally render based on specified tab*/}
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
                 ) : null
            }

            {value == 2 ? 
                scheduled.map((scheduledGame) => 
                    <ScheduledGame 
                        player1={scheduledGame.player1}
                        player2={scheduledGame.player2}
                        court={scheduledGame.court}
                        player1Arrived={scheduledGame.player1_arrived}
                        player2Arrived={scheduledGame.player2_arrived}
                        league={scheduledGame.class}
                        startTime={scheduledGame.start_time}
                    />
                ) : null 
            }
        </>
    );
}

