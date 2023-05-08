import React from 'react'

const Pagination = ({navigate, page, pages}) => {
  return(
    <div className="container">
      <button id="paginationbutton" onClick={() => navigate('previous')} type="button" className="btn btn-light">Previous</button>
      <button id="paginationbutton" type="button" className="btn btn-secondary" disabled>Page {page+1} of {pages}</button>
      <button id="paginationbutton" onClick={() => navigate('next')} type="button" className="btn btn-light">Next</button>
    </div>
  )
}

export default Pagination