import React from 'react'
import { Pie } from 'react-chartjs-2';

export const HistoryPie = ({ categories }) => {
   // const category = categories.reduce((cat, acc) => {

   // }, [])
   const state = {
      labels: ['January', 'February', 'March',
         'April', 'May', 'asd', 'asd'],
      datasets: [{
         label: 'Rainfall',
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
      <div className='pie'>
         <Pie className={'pie'}
            data={state}
            width={180}
            height={50}
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