import React from 'react'

const StationCard = ({station}) => {
  return (
    <div className="card border-light">

      <div className="card-body">
        <h5 className="card-title">{station.nameFi} / {station.nameSwe}</h5>
        <p className="card-text">Address: {station.addressFi} / {station.addressSwe}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Number of journeys from this station: {station.journeysFrom}</li>
        <li className="list-group-item">Number of journeys to this station: {station.journeysTo}</li>
      </ul>

    </div>
  )
}

export default StationCard