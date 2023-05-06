import React from 'react';
import StationDetail from './station_detail'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './stations.css'

const Stations = ({ stations, select }) => {
    let stationrows = stations.map(s => <li key={s.id} className="list-group-item" onClick={() => select(s.id)}>{s.nameFi}</li> )
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

const StationContainer = () => {
    const [stations, getStations] = useState([])
    const [selectedId, selectStation] = useState(1)
    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get('/api/stations?page='+page)
            .then(response => getStations(response.data))
    },[page])

    return <div>
        <h2>Stations</h2>
        
        <div className="row">
        <div className='col-4'>
         
        <div className="container">
        <button id="paginationbutton" onClick={()=>setPage(page-1)} type="button" className="btn btn-light">Previous</button>
        <button id="paginationbutton" type="button" className="btn btn-secondary" disabled>Page {page+1}</button>
        <button id="paginationbutton" onClick={()=>setPage(page+1)} type="button" className="btn btn-light">Next</button>
        </div>
        </div>
            <div className='col'>
            <label>Search for stations with name or address</label>
            <div class="input-group mb-3" placeholder="Suvituulenkuja...">
  <input type="text" class="form-control" placeholder="" />
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
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