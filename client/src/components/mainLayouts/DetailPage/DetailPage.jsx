import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { fetchRecord, removeRecord } from '../../../redux/reducers/recordsReducer'
import { Loader } from "../../common/Loader/Loader";
import { NavLink } from 'react-router-dom';
import { dateFilter } from "../../../redux/aside/dateFilter";
import s from './DetailPage.module.css'

export const DetailPage = () => {

   const currentRecord = useSelector(state => state.records.currentRecord)
   const categories = useSelector(state => state.categories.categories)
   const category = categories.filter(cat => cat._id === currentRecord.category)
   const dispatch = useDispatch()
   const history = useHistory()
   const loading = useSelector(state => state.common.loading)
   const id = useParams().id
   let color = 'green'
   useEffect(() => {
      dispatch(fetchRecord(id))
      window.scrollTo(0, 0);
   }, [id, dispatch])

   const removeHandler = useCallback(() => {
      debugger
      dispatch(removeRecord(id))
      history.push('/history')
   }, [dispatch, history, id])

   currentRecord.type === 'income' ? color = 'green' : color = 'red'

   if (loading || !currentRecord.date || !category.length) {
      return <Loader />
   }

   return (
      <div>
         <div>
            <div className="breadcrumb-wrap">
               <NavLink to="/history" className="breadcrumb">История</NavLink>
               <a href='#!' className="breadcrumb" style={{ cursor: 'default' }}>
                  {currentRecord.type === 'income' ? 'Доход' : 'Расход'}
               </a>
            </div>
            <div className="row">
               <div className="col s12 m6">
                  <div className={`card ${color}`}>
                     <div className="card-content white-text">
                        <p>Описание: {currentRecord.description}</p>
                        <p>Сумма: {currentRecord.amount}</p>
                        <p>Категория: {category[0].title}</p>
                        <small>{dateFilter(currentRecord.date, 'datetime')}</small>
                        <p><button onClick={removeHandler} className={s.remove}>Удалить запись</button></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}