import React from 'react'
import StationDetail from './station_detail'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './stations.css'
import SearchBox from '../modules/searchbox'
import Pagination from '../modules/pagination'
import StationList from './station_list'

const StationContainer = () => {
  const [stations, getStations] = useState([])
  const [selectedId, selectStation] = useState(1)
  const [page, setPage] = useState(0)
  const [searchFor, setSearchFor] = useState('')
  const [filter, setFilter] = useState('')
  const [pages, setPages] = useState(1)

  const Navigate = direction => {
    if (direction==='next' && page < pages-1) setPage(page+1)
    if (direction==='previous' && page > 0) setPage(page-1)
  }

  const changeText = text => {
    setSearchFor(text)
  }

  const Search = () => {
    setPage(0)
    setFilter(searchFor)
  }

  useEffect(() => {
    axios.get('/api/stations?page='+page+'&filter='+filter)
      .then(response => {
        getStations(response.data.stations)
        setPages(response.data.totalPages)
      })
  },[page, filter])

  return <div className='stationcontainer'>
    <div className="row">
      <div className='col-4'>
        <h2>Stations</h2>
      </div>
      <div className='col-8'>
        <SearchBox filter={searchFor} changeText={changeText} search={Search} label="Search for stations with name or address" />
      </div>
    </div>
    <div className="row">
      <div className='col-4'>
        <Pagination navigate={Navigate} page={page} pages={pages} />
        <StationList stations={ stations } select={ selectStation }/>
      </div>
      <div className='col-8'>
        <StationDetail id={ selectedId }/>
      </div>
    </div>
  </div>
}

export default StationContainer