import React from 'react'


export const HomePage = () => {
   document.title = 'Home page'
   // const currency = [
   //    { id: 1, name: 'UAH', curr: 33.31, date: '1 april' },
   //    { id: 2, name: 'EUR', curr: 133.31, date: '2 may' },
   //    { id: 3, name: 'DOL', curr: 23.31, date: '13 august' }
   // ]
   // const money = [
   //    { name: 'UAH', moneyItems: 32000, suf: 'грн' },
   //    { name: 'DOL', moneyItems: 1200, suf: 'дол' },
   //    { name: 'EUR', moneyItems: 1000, suf: 'евр' }
   // ]

   return (
      <div>
         <div className="page-title">
            <h3>Счет</h3>

            <button className="btn waves-effect waves-light btn-small">
               <i className="material-icons">refresh</i>
            </button>
         </div>

         <div className="row">
            <div className="col s12 m6 l4">
               <div className="card light-blue bill-card">
                  <div className="card-content white-text">
                     <span className="card-title">Счет в валюте</span>

                     <p className="currency-line">
                        <span>12.0 Р</span>
                     </p>
                  </div>
               </div>
            </div>

            <div className="col s12 m6 l8">
               <div className="card orange darken-3 bill-card">
                  <div className="card-content white-text">
                     <div className="card-header">
                        <span className="card-title">Курс валют</span>
                     </div>
                     <table>
                        <thead>
                           <tr>
                              <th>Валюта</th>
                              <th>Курс</th>
                              <th>Дата</th>
                           </tr>
                        </thead>

                        <tbody>
                           <tr>
                              <td>руб</td>
                              <td>12121</td>
                              <td>12.12.12</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}





