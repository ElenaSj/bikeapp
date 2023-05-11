import React from 'react'
import {useEffect, useState} from 'react'
import StationCard from './station_card'
import StationMap from './station_map'
import axios from 'axios'
import './stations.css'

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
