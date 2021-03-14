import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryRecord } from './HistoryPartials/HistoryRecord';
import { HistoryPie } from './HistoryPartials/HistoryPie';

export const HistoryPage = () => {
   document.title = 'History'

   const categories = useSelector(state => state.categories.categories)
   const records = useSelector(state => state.records.records)

   const recordsEl = records.map((record, idx) => {
      const title = categories.filter(cat => cat._id !== record.category)[0].title
      return <HistoryRecord key={record._id}
         title={title}
         record={record} idx={idx} />
   })

   return (
      <div>
         <div className="page-title">
            <h3>История записей</h3>
         </div>
         <HistoryPie categories={categories} records={records} />
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
                  {recordsEl}
               </tbody>
            </table>
         </section>
      </div>
   )
}