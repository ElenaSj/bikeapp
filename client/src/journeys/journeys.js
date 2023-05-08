import React from 'react'

const Journeys = ({ journeys }) => {
  let journeyrows = journeys.map(j => {
    const minutes = Math.floor(j.duration / 60)
    const seconds = Math.floor(j.duration % 60)

    return (
      <tr key={j.id}>
        <td>{j.departureStation}</td>
        <td>{j.returnStation}</td>
        <td>{minutes} min {seconds} sec</td>
        <td>{j.distance} km</td>
      </tr>
    )
  })

  return (
    <div className="journeytable">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">From (station name)</th>
            <th scope="col">To (station name)</th>
            <th scope="col">Duration</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody className="tablerows">
          { journeyrows }
        </tbody>
      </table>
    </div>
  )
}

export default Journeys