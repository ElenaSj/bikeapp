import React from 'react';
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import axios from 'axios'
import 'leaflet/dist/leaflet.css';



const StationDetail = props => {
    const id = props.id
    const [station, getStation] = useState({})
    const [position, getPosition] = useState([])
    
    useEffect(() => {
        axios.get('/api/stations/'+id)
            .then(response => {
                getStation(response.data)
                getPosition([response.data.latitude, response.data.longitude])
            })
        },[id])

    const ChangeMapView = () => {
        const map = useMap()
        useEffect(() => {
            map.flyTo(position)
        })
    }
   
    return (
        <div className="col">
        {!station.id && <p>Please select a station from the list to view detailed info</p>}

        {!!station.id && <div>
            <h2>Station: {station.nameFi}</h2>
            <p>Address: {station.addressFi}</p>
            <p>Number of journeys from this station: {station.journeysFrom}</p>
            <p>Number of journeys to this station: {station.journeysTo}</p>
          
            <MapContainer style={{ height: '100vh', width: '100wh' }} center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
            <ChangeMapView />
            </MapContainer>
        </div>
        }
        </div>
    )

}

export default StationDetail
