import React from 'react';
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



const StationDetail = props => {
    const station=props.station
    const position=[station.latitude, station.longitude]

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
            <h2>{station.nameFi}</h2>
            <p>Address: {station.addressFi}</p>
          
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