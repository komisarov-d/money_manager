import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryRecord } from './HistoryPartials/HistoryRecord';
import { HistoryPie } from './HistoryPartials/HistoryPie';
import { NavLink } from 'react-router-dom';
// import { Pagination } from '../../common/Paginator/Paginator';
import _ from 'lodash'
export const HistoryPage = () => {
   document.title = 'History'

   const categories = useSelector(state => state.categories.categories)
   const records = useSelector(state => state.records.records)


   const paginationEl = _.chunk(records, 5)
   console.log(paginationEl);
   const recordsEl = records.reverse().map((record, idx) => {
      return <HistoryRecord
         categories={categories}
         key={record._id}
         record={record}
         idx={idx}
      />
   })

   if (!categories.length) { return <p>Категорий пока нет. <NavLink to={'/categories'}>Создать</NavLink></p> }
   if (!records.length) { return <p>Записей пока нет. <NavLink to={'/record'}>Создать</NavLink></p> }
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
            {/* <Pagination /> */}
         </section>
      </div>
   )
}