import React from 'react'

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

export default SortOptions