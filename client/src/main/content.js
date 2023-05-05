import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './main.css'

import JourneyList from "../journeys/journey_list";

export function Navigation(){
    return <nav className='navigation'>
        <Link id="nav_link" to="/">Bike Journeys</Link>   
        <Link id="nav_link" to="/">Bike Stations</Link>
    </nav>
}

export function Main(){

    return <main>
        <Routes>
            <Route path="/"  element={<JourneyList />} />
        </Routes>
    </main>
}