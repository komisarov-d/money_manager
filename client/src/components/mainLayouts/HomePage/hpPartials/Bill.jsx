import React from 'react'

export const Bill = ({ currEl }) => {

   return (
      <div className="col s12 m6 l4">
         <div className="card light-blue bill-card">
            <div className="card-content white-text">
               <span className="card-title">Счет в валюте</span>
               {currEl}
            </div>
         </div>
      </div>
   )
}