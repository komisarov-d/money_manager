import React from 'react'

export const Pagination = ({ paginationHandler, currentPage, paginationArr }) => {

   const changeHandler = (e) => { paginationHandler(e.target.name) }

   const paginationEl = paginationArr.map((el, idx) => {
      let active = ''
      if (idx + +1 === +currentPage) { active = 'active' }
      return (<li key={idx} className={`waves-effect ${active}`}><a name={idx + 1} onClick={changeHandler} href="#!">{idx + 1}</a></li>)
   })

   return (
      <div className="pagination__block" style={{ display: 'flex', justifyContent: 'center' }}>
         <ul className="pagination">
            {paginationEl}
         </ul>
      </div>
   )
}