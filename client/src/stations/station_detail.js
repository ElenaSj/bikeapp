import React from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import StationCard from './station_card'
import axios from 'axios'
import './stations.css'

const StationMap = ({position}) => {

  const ChangeMapView = () => {
    const map = useMap()
    useEffect(() => {
      map.flyTo(position)
    })
  }

  return (
    <div className="map">
      <MapContainer style={{ height: '100vh', width: '100wh' }} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
        <ChangeMapView />
      </MapContainer>
    </div>
  )
}

const StationDetail = ({id}) => {
  const [station, getStation] = useState({})
  const [position, getPosition] = useState([])

  useEffect(() => {
    axios.get('/api/stations/'+id)
      .then(response => {
        getStation(response.data)
        getPosition([response.data.latitude, response.data.longitude])
      })
  },[id])

  return (
    <div>
      {!station.id && <p>Please select a station from the list to view detailed info</p>}

      {!!station.id && <div>
        <StationCard station={station} />
        <StationMap position={position} />
      </div>
      }
    </div>
  )

}

export default StationDetail
