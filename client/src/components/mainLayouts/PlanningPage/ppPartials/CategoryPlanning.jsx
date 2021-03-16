import React, { useEffect } from 'react'

export const CategoryPlanning = ({ category, persent, progressColor, left, spend }) => {
   useEffect(() => { window.M.Tooltip.init(document.querySelectorAll('.tooltipped')); })

   return (
      <div>
         <p>
            <strong>{category.title}: </strong>
            {spend} из {category.limit}
         </p>
         <div className="progress tooltipped" data-position="top" data-tooltip={`Осталось: ${left}`}>
            <div
               className={`determinate ${progressColor}`}
               style={{ width: persent + '%' }}
            ></div>
         </div>
      </div>
   )
}