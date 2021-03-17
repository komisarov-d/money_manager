import React from 'react'
import { HistoryItem } from './HistoryItem'


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


   return { recordsEl }
}