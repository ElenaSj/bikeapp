import React from 'react';
import StationDetail from './station_detail'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Stations = ({ stations, select }) => {
    let stationrows = stations.map(s => <li className="list-group-item" onClick={() => select(s)}>{s.nameFi}</li> )
    return (
        <>
            <ul className="list-group">
                {stationrows}
            </ul>
        </>
    )
}

const StationList = ({stations, select }) => {
    return (
        <div className="col">
            <h2>Stations</h2>
            <Stations stations={stations} select={select}/>
        </div>
    )
}

const StationContainer = () => {
    const [stations, getStations] = useState([])
    const [selectedStation, selectStation] = useState({id: 0})

    useEffect(() => {
        axios.get('/api/stations')
            .then(response => getStations(response.data))
    },[])

    return <div className="row">
        <StationList stations={ stations } select={ selectStation }/>
        <StationDetail station={ selectedStation }/>
    </div>
}

export default StationContainer