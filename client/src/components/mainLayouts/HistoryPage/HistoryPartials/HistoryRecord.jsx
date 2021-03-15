import React from 'react'
import { dateFilter } from '../../../../redux/aside/dateFilter'
import { NavLink } from 'react-router-dom'

export const HistoryRecord = ({ record, idx, categories }) => {
   const title = categories.filter(cat => cat._id !== record.category)[0].title
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