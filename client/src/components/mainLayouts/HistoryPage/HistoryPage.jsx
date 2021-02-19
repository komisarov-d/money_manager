import React from 'react'

import style from './History.module.scss'
import { Pie } from 'react-chartjs-2';
export const History = () => {
   document.title = 'History'
   const records = [{ id: 1 }]

   const state = {
      labels: ['January', 'February', 'March',
         'April', 'May'],
      datasets: [
         {
            label: 'Rainfall',
            // backgroundColor: [
            //    '#B21F00',
            //    '#C9DE00',
            //    '#2FDE00',
            //    '#00A6B4',
            //    '#6800B4'
            // ]
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            ,
            hoverBackgroundColor: [
               '#501800',
               '#4B5000',
               '#175000',
               '#003350',
               '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
         }
      ]
   }


   return (
      <div>

         <div class="page-title">
            <h3>История записей</h3>
         </div>

         <div className={style.pie}>

            <Pie className={style.pie}
               data={state}
               width={150}
               height={50}
               options={{
                  legend: {
                     display: true,
                     position: 'top'
                  }
               }}
            />

         </div>

         <section>
            <table>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Сумма</th>
                     <th>Дата</th>
                     <th>Категория</th>
                     <th>Тип</th>
                     <th>Открыть</th>
                  </tr>
               </thead>

               <tbody>
                  <tr>
                     <td>1</td>
                     <td>1212</td>
                     <td>12.12.32</td>
                     <td>name</td>
                     <td>
                        <span class="white-text badge red">Расход</span>
                     </td>
                     <td>
                        <button class="btn-small btn">
                           <i class="material-icons">open_in_new</i>
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </section>
      </div>

   )
}