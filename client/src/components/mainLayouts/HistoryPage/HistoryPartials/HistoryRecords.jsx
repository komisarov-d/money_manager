import React from 'react'
// import { HistoryItem } from './HistoryItem'

import { dateFilter } from '../../../../redux/aside/dateFilter'
import { NavLink } from 'react-router-dom'

export const HistoryRecords = ({ paginationArr, categories, pageArrIndex }) => {

   const recordsEl = paginationArr[pageArrIndex].map((record, idx) => {
      const title = categories.filter(cat => cat._id === record.category)[0].title
      return <HistoryItem
         title={title}
         key={record._id}
         record={record}
         idx={idx}
      />
   })


   return <tbody>{recordsEl}</tbody>
}

export const HistoryItem = ({ record, idx, title }) => {

   return (
      <tr>
         <td>{idx + 1}</td>
         <td>{record.amount}</td>
         <td>{dateFilter(record.date, 'datetime')}</td>
         <td>{title}</td>
         <td>
            {record.type === 'income' ? <span className="white-text badge green">Доход</span> : <span className="white-text badge red">Расход</span>}
         </td>
         <td>
            <NavLink className="btn tooltipped" data-position="top" data-tooltip="Открыть" to={`/detail/${record._id}`}>
               <i className="material-icons">open_in_new</i>
            </NavLink>
         </td>
      </tr>
   )
}