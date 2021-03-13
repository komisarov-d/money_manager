import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { fetchRecord } from '../../../redux/reducers/recordsReducer'
import { Loader } from "../../common/Loader/Loader";
import { NavLink } from 'react-router-dom';
import { dateFilter } from "../../../redux/aside/dateFilter";

export const DetailPage = () => {

   const currentRecord = useSelector(state => state.records.currentRecord)
   const dispatch = useDispatch()
   const loading = useSelector(state => state.common.loading)
   const id = useParams().id
   let color = 'green'
   useEffect(() => {
      dispatch(fetchRecord(id))
   }, [id, dispatch])

   if (currentRecord.type === 'income') {
      color = 'green'
   } else { color = 'red' }

   if (loading || !currentRecord.date) {
      return <Loader />
   }

   return (
      <div>
         <div>
            <div className="breadcrumb-wrap">
               <NavLink to="/history" className="breadcrumb">История</NavLink>

               <a href='#!' className="breadcrumb">
                  {currentRecord.type === 'income' ? 'Доход' : 'Расход'}
               </a>
            </div>
            <div className="row">
               <div className="col s12 m6">
                  <div className={["card", `${color}`].join(' ')}>
                     <div className="card-content white-text">
                        <p>Описание: {currentRecord.description}</p>
                        <p>Сумма: {currentRecord.amount}</p>
                        <p>Категория: {currentRecord.category}</p>

                        <small>{dateFilter(currentRecord.date, 'date')}</small>
                        {/* <small>{currentRecord.date}</small> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}