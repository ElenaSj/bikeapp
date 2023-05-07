import { useEffect, useState, React } from 'react'
import axios from 'axios'
import './journey_list.css'

const SearchBox = ({filter, changeText, search}) => {
  return (
    <div className='col'>
      <label>Search for journeys with station name</label>
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={filter} onChange={ev => changeText(ev.target.value)} placeholder="Suvituulenkuja..." />
        <button className="btn btn-outline-secondary" type="button" onClick={() => search()} id="button-addon1">Search</button>
      </div>
    </div>
  )
}

const Pagination = ({navigate, page}) => {
  return (
    <div className="container">
      <button id="paginationbutton" onClick={() => navigate('previous')} type="button" className="btn btn-light">Previous</button>
      <button id="paginationbutton" type="button" className="btn btn-secondary" disabled>Page {page+1}</button>
      <button id="paginationbutton" onClick={() => navigate('next')} type="button" className="btn btn-light">Next</button>
    </div>
  )
}

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
  )
}

const JourneyList = () => {
  const [journeys, getJourneys] = useState([])
  const [page, setPage] = useState(0)
  const [searchFor, setSearchFor] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('/api/journeys?page='+page+'&station='+filter)
      .then(response => getJourneys(response.data))
  },[page,filter])

  const changeText = text => {
    setSearchFor(text)
  }

  const Search = () => {
    setPage(0)
    setFilter(searchFor)
  }

  const Navigate = direction => {
    if (direction==='next') setPage(page+1)
    if (direction==='previous' && page>0) setPage(page-1)
  }

  return (
    <div className="row journeys">
      <h2>Bike journeys</h2>
      <div className="col-9">
        <Pagination navigate={Navigate} page={page} />
        <Journeys journeys={journeys} />
      </div>
      <div className="col-3">
        <SearchBox filter={searchFor} changeText={changeText} search={Search} />
      </div>
    </div>
  )

}

export default JourneyList