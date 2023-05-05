import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

const Stations = ({ stations }) => {
    let stationrows = stations.map(s => <li className="list-group-item">{s.nameFi}</li> )

    return (
        <>
            <ul className="list-group">
                {stationrows}
            </ul>
        </>
    )
}

const StationList = () => {
    const [stations, getStations] = useState([])

    useEffect(() => {
        axios.get('/api/stations')
            .then(response => getStations(response.data))
    },[])

    return (
        <div className="col">
            <h2>Stations</h2>
            <Stations stations={stations} />
        </div>
    )

}

export default StationList