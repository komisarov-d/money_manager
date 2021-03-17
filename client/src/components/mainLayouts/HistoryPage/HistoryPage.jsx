import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HistoryRecord } from './HistoryPartials/HistoryRecord';
import { HistoryPie } from './HistoryPartials/HistoryPie';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../../common/Paginator/Paginator';
import _ from 'lodash'
import { setCurrentPage } from '../../../redux/reducers/commonReducer';
import '../../commonStyles/common.css'


export const HistoryPage = () => {
   document.title = 'History'

   let categories = useSelector(state => state.categories.categories)
   let records = useSelector(state => state.records.records)
   const pageArrIndex = useSelector(state => state.common.pageArrIndex)
   const dispatch = useDispatch()
   let paginationArr = []
   if (records.length) {
      paginationArr = _.chunk(records, 6)

   }
   const paginationHandler = useCallback((page) => { dispatch(setCurrentPage(page)) }, [dispatch])

   if (!categories.length) { return <p className='center'>Категорий пока нет.<NavLink to={'/categories'}>Создать?</NavLink></p> }
   if (records.length === 0) { return <p className='center'>Записей пока нет.<NavLink to={'/record'}>Создать?</NavLink></p> }

   const recordsEl = paginationArr[pageArrIndex].map((record, idx) => {
      return <HistoryRecord
         categories={categories}
         key={record._id}
         record={record}
         idx={idx}
      />
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
            <Pagination
               paginationArr={paginationArr}
               paginationHandler={paginationHandler}
               records={records}
               pageArrIndex={pageArrIndex}
            />
         </section>
      </div>
   )
}