import React from 'react'

const SearchBox = ({filter, changeText, search, label}) => {
  return (
    <div className='col'>
      <label>{label}</label>
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={filter} onChange={ev => changeText(ev.target.value)} placeholder="Suvituulenkuja..." />
        <button className="btn btn-outline-secondary" type="button" onClick={() => search()} id="button-addon1">Search</button>
      </div>
    </div>
  )
}

export default SearchBox