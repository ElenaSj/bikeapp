import React from 'react'

const StationList = ({ stations, select }) => {
  let stationrows = stations.map(s => <li key={s.id} className="stationrow list-group-item" onClick={() => select(s.id)}>{s.nameFi} ({s.nameSwe})</li>)

  if (stations.length === 1) select(stations[0].id)

  return (
    <div>
      <ul className="list-group">
        {stationrows}
      </ul>
    </div>
  )
}

export default StationList