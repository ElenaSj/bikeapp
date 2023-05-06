import React from 'react';
import StationDetail from './station_detail'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './stations.css'

const Stations = ({ stations, select }) => {
    let stationrows = stations.map(s => <li key={s.id} className="list-group-item" onClick={() => select(s.id)}>{s.nameFi} ({s.nameSwe})</li> )
    return (
        <>
            <ul className="list-group">
                {stationrows}
            </ul>
        </>
    )
}

const StationList = ({stations, select }) => {
    return (
        <div className="col-4">
            
            <Stations stations={stations} select={select}/>
        </div>
    )
}

const Pagination = ({navigate, page}) => {
    return(
        <div className="container">
        <button id="paginationbutton" onClick={()=>navigate("previous")} type="button" className="btn btn-light">Previous</button>
        <button id="paginationbutton" type="button" className="btn btn-secondary" disabled>Page {page+1}</button>
        <button id="paginationbutton" onClick={()=>navigate("next")} type="button" className="btn btn-light">Next</button>
        </div>
        )
}



const StationContainer = () => {
    const [stations, getStations] = useState([])
    const [selectedId, selectStation] = useState(1)
    const [page, setPage] = useState(0)
    const [searchFor, setSearchFor] = useState("")
    const [filter, setFilter] = useState("")

    const Navigate = direction => {
        if (direction==="next") setPage(page+1)
        if (direction==="previous" && page>0) setPage(page-1)
    }

    const changeText = text => {
        setSearchFor(text)
    }

    const Filter = () => {
        setPage(0)
        setFilter(searchFor)
    }

    useEffect(() => {
        axios.get('/api/stations?page='+page+'&filter='+filter)
            .then(response => getStations(response.data))
    },[page, filter])

    return <div>
        <h2>Stations</h2>
        
        <div className="row">
        <div className='col-4'>
        <Pagination navigate={Navigate} page={page} />

        
        </div>
            <div className='col'>
            <label>Search for stations with name or address</label>
            <div class="input-group mb-3">
  <input type="text" class="form-control" value={searchFor} onChange={ev=>changeText(ev.target.value)} placeholder="Suvituulenkuja..." />
  <button class="btn btn-outline-secondary" type="button" onClick={()=>Filter()} id="button-addon1">Search</button>
</div>

        </div>
        
        </div>
        <div className="row">
        <StationList stations={ stations } select={ selectStation }/>
        <StationDetail id={ selectedId }/>
    
    </div>
    </div>
}

export default StationContainer