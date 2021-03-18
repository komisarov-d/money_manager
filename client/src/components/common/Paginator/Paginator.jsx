import React from 'react'
import '../../commonStyles/common.css'
export const Pagination = ({ paginationHandler, pageArrIndex, paginationArr }) => {

   const changeHandler = (e) => { paginationHandler(e.target.name) }

   const paginationEl = paginationArr.map((el, idx) => {
      let active = ''
      if (idx === +pageArrIndex) { active = 'active' }
      return (<li key={idx} className={`waves-effect ${active}`}><a name={idx} onClick={changeHandler} href="#!">{idx + 1}</a></li>)
   })

   return (
      <div className="center" >
         <ul className="pagination">
            {paginationEl}
         </ul>
      </div>
   )
}