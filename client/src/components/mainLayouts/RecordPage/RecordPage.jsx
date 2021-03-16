import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { createRecord } from '../../../redux/reducers/recordsReducer'
import { RecordForm } from './rpPartials/RecordForm'

export const RecordPage = () => {
   document.title = 'Records'
   const history = useHistory()
   const dispatch = useDispatch()
   const categories = useSelector(state => state.categories.categories)

   const createNewRecord = (recordForm, currentCat) => {
      const res = dispatch(createRecord(recordForm, currentCat))
      if (res !== undefined) { return history.push('/history') }
      return
   }

   if (!categories.length) { return (<p>Категорий пока нет. <NavLink to='/categories'>Создать категорию...</NavLink></p>) }
   return (
      <div>
         <div className="page-title">
            <h3>Новая запись</h3>
         </div>
         <RecordForm createNewRecord={createNewRecord} categories={categories} />
      </div>
   )
}