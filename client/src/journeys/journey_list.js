import { useEffect, useState, React } from 'react'
import axios from 'axios'
import './journey_list.css'
import SearchBox from '../modules/searchbox'
import Pagination from '../modules/pagination'
import Journeys from './journeys'

const SortOptions = ({setSort}) => {
  return(
    <div onChange={ev => setSort(ev.target.value)}>
      <h4>Sort journeys by:</h4>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="dstation" name="flexRadioDefault" id="radio1" defaultChecked/>
        <label className="form-check-label" htmlFor="radio1">Departure station name</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="rstation" name="flexRadioDefault" id="radio2"/>
        <label className="form-check-label" htmlFor="radio2">Return station name</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="longestd" name="flexRadioDefault" id="radio3"/>
        <label className="form-check-label" htmlFor="radio3">Longest distance</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="shortestd" name="flexRadioDefault" id="radio4"/>
        <label className="form-check-label" htmlFor="radio4">Shortest distance</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="longestt" name="flexRadioDefault" id="radio5"/>
        <label className="form-check-label" htmlFor="radio5">Longest duration</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" value="shortestt" name="flexRadioDefault" id="radio6"/>
        <label className="form-check-label" htmlFor="radio6">Shortest duration</label>
      </div>

    </div>
  )
}

const JourneyList = () => {
  const [journeys, getJourneys] = useState([])
  const [page, setPage] = useState(0)
  const [searchFor, setSearchFor] = useState('')
  const [filter, setFilter] = useState('')
  const [pages, setPages] = useState(0)
  const [sort, setSort] = useState('dstation')

  useEffect(() => {
    axios.get('/api/journeys?page='+page+'&station='+filter+'&sort='+sort)
      .then(response => {
        getJourneys(response.data.journeys)
        setPages(response.data.totalPages)
      })
  },[page,filter, sort])

  const changeText = text => {
    setSearchFor(text)
  }

  const Sort = text => {
    setSort(text)
  }

  const Search = () => {
    setPage(0)
    setFilter(searchFor)
  }

  const Navigate = direction => {
    if (direction==='next' && page < pages-1) setPage(page+1)
    if (direction==='previous' && page > 0) setPage(page-1)
  }

  return (
    <div className="row journeys">
      <h2>Bike journeys</h2>
      <div className="col-9">
        <Pagination navigate={Navigate} page={page} pages={pages} />
        <Journeys journeys={journeys} />
      </div>
      <div className="col-3">
        <h3>Search & sort journeys</h3>
        <SearchBox filter={searchFor} changeText={changeText} search={Search} label="Search for journeys with station name" />
        <SortOptions setSort={Sort} />
      </div>
    </div>
  )

}

export default JourneyList