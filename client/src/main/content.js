import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './main.css'

import JourneyList from "../journeys/journey_list";
import StationContainer from '../stations/station_container'

export function Navigation(){
    return <nav className='navigation'>
        <Link id="nav_link" to="/">Bike Journeys</Link>   
        <Link id="nav_link" to="/stations">Bike Stations</Link>
    </nav>
}

export function Main(){

    return <main>
        <Routes>
            <Route path="/"  element={<JourneyList />} />
            <Route path="/stations" element={<StationContainer />} />
        </Routes>
    </main>
}