import { useEffect, useState, React } from 'react'
import axios from 'axios'
import './journey_list.css'

const Journeys = ({ journeys }) => {
  let journeyrows = journeys.map(j => {
    return (
      <tr key={j.id}>
        <td>{j.departureStation}</td>
        <td>{j.returnStation}</td>
        <td>{j.duration}</td>
        <td>{j.distance}</td>
      </tr>
    )
  })

  return (
    <div className="col-9">
      <div className="journeytable">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">From (station name)</th>
              <th scope="col">To (station name)</th>
              <th scope="col">Duration (minutes)</th>
              <th scope="col">Distance (kilometers)</th>
            </tr>
          </thead>
          <tbody className="tablerows">
            { journeyrows }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const JourneyList = () => {
  const [journeys, getJourneys] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios.get('/api/journeys?page='+page)
      .then(response => getJourneys(response.data))
  },[page])

  return (
    <div className="row journeys">
      <h2>Bike journeys</h2>
      <nav>
        <ul className="pagination">
          <li onClick={() => setPage(page-1)} className="page item"><button className="page-link">Previous</button></li>
          <li className="page item active"><button className="page-link">{page+1}</button></li>
          <li onClick={() => setPage(page+1)} className="page item"><button className="page-link">Next</button></li>
        </ul>
      </nav>
      <Journeys journeys={journeys} />
      <div className="col-3">
        <h2>Searcing functionality could be here</h2>
      </div>
    </div>
  )

}

export default JourneyList