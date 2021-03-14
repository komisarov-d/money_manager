import React from 'react'
import { Pie } from 'react-chartjs-2';

export const HistoryPie = ({ categories, records }) => {

   const state = {
      labels: categories.map(c => c.title),
      datasets: [{
         label: 'Rainfall',
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(24, 162, 235, .6)',
            'rgba(255, 206, 86, .7)',
            'rgba(25, 192, 192, .6)'
         ],
         borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'
         ],
         borderWidth: 1,
         hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#4B4500',
            '#1b25000',
            '#0034e0',
            '#003350',
            '#35014F',

         ],
         data: categories.map(c => {
            return records.reduce((total, r) => {
               if (r.category === c._id && r.type === 'outcome') {
                  total += +r.amount
               }
               return total
            }, 0)
         })
      }]
   }
   return (
      <div className='pie'>
         <Pie className={'pie'}
            data={state}
            width={200}
            height={40}
            options={{
               legend: {
                  display: true,
                  position: 'right'
               }
            }}
         />
      </div>
   )
}