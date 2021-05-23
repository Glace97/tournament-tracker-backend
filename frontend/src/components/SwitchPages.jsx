//switch between pages component
import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom';

//components
import TournamenPage from './TournamentPage';
import SchedulePage from "./SchedulePage";


export default function SwitchPages() {
    return (
        <Switch>
            <Route path="/tournaments/1/schedule">   {/*HELT hårdkodad path, uppdatera så ID:et är dynamiskt*/}
                <SchedulePage />
            </Route >
            <Route path="/tournaments">
                <TournamenPage />
            </Route >

        </Switch>
    );
}