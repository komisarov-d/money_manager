import React, { useEffect } from 'react'

export const CategoryPlanning = ({ category, persent, progressColor, left, spend }) => {
   useEffect(() => { window.M.Tooltip.init(document.querySelectorAll('.tooltipped')); })
   let int = 'Осталось'
   if (left < 0) { int = 'Лимит превышен на' }
   return (
      <div>
         <p>
            <strong>{category.title}: </strong>
            {spend} из {category.limit}
         </p>
         <div className="progress tooltipped" data-position="top" data-tooltip={`${int}: ${left}`}>
            <div
               className={`determinate ${progressColor}`}
               style={{ width: persent + '%' }}
            ></div>
         </div>
      </div>
   )
}