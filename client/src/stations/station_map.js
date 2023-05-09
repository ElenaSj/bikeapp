import React from 'react'
import {useEffect} from 'react'
import {MapContainer, TileLayer, Marker, useMap} from 'react-leaflet'

const StationMap = ({position}) => {

  const ChangeMapView = () => {
    const map = useMap()
    useEffect(() => {
      map.flyTo(position)
    })
  }

  return (
    <div className="map">
      <MapContainer style={{height: '100vh', width: '100wh'}} center={position} zoom={13} scrollWheelZoom={false}>
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

export default StationMap