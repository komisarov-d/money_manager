import React from 'react'

import style from './Home.module.scss'
export const Home = () => {
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
         <div class="page-title">
            <h3>Счет</h3>

            <button class="btn waves-effect waves-light btn-small">
               <i class="material-icons">refresh</i>
            </button>
         </div>

         <div class="row">
            <div class="col s12 m6 l4">
               <div class="card light-blue bill-card">
                  <div class="card-content white-text">
                     <span class="card-title">Счет в валюте</span>

                     <p class="currency-line">
                        <span>12.0 Р</span>
                     </p>
                  </div>
               </div>
            </div>

            <div class="col s12 m6 l8">
               <div class="card orange darken-3 bill-card">
                  <div class="card-content white-text">
                     <div class="card-header">
                        <span class="card-title">Курс валют</span>
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





