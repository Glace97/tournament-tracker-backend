//switch between pages component
import React from "react";
import { Switch, Route } from 'react-router-dom';

//components
import TournamenPage from './TournamentPage';
import SchedulePage from "./SchedulePage";

//redux
import { useSelector } from 'react-redux';


export default function SwitchPages() {    
    
   //get currently selected tournament for specific url path
   const tournamendID = useSelector((state) => state.tournament.selectedTournament); 
   const scheduleUrl = `/tournaments/${tournamendID}/schedule`

   return (
        <Switch>
            <Route path={scheduleUrl}>   
                <SchedulePage />
            </Route >
            <Route path="/tournaments">
                <TournamenPage />
            </Route >

        </Switch>
    );
}