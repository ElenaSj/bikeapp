import { useEffect, useState, React } from 'react'
import axios from 'axios'
import './journey_list.css'
import SearchBox from '../modules/searchbox'
import Pagination from '../modules/pagination'
import Journeys from './journeys'
import SortOptions from './journey_sort'

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