import React, { useEffect, useState } from 'react'
import { CaregorySelector } from '../../common/CategorySelector/CategorySelector'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { createRecord } from '../../../redux/reducers/recordsReducer'

export const RecordPage = () => {
   document.title = 'Records'
   const history = useHistory()
   const dispatch = useDispatch()
   const categories = useSelector(state => state.categories.categories)

   const [currentCat, setCurrent] = useState(categories[0]._id)
   const [recordForm, setRecordForm] = useState({ type: '', amount: 10, description: '' })

   useEffect(() => { window.M.updateTextFields() }, [])

   const changeHandler = (e) => { setCurrent(e.target.value) }
   const newRecordHandler = (e) => { setRecordForm({ ...recordForm, [e.target.name]: e.target.value }) }

   const createNewRecord = async (e) => {
      e.preventDefault()
      const res = await dispatch(createRecord(recordForm, currentCat))
      if (res !== undefined) { return history.push('/history') }
      return
   }

   let catEl = categories.map((cat, idx) => <option key={idx} value={cat._id}>{cat.title}</option>)

   if (!categories.length) {
      return (
         <p>Категорий пока нет.<NavLink to='/categories'>Добавить новую категорию...</NavLink></p>
      )
   }
   return (
      <div>
         <div className="page-title">
            <h3>Новая запись</h3>
         </div>
         <form className="form" onSubmit={createNewRecord}>
            <CaregorySelector catEl={catEl} changeHandler={changeHandler} />
            <p>
               <label>
                  <input
                     className="with-gap"
                     name="type"
                     type="radio"
                     value="income"
                     onChange={newRecordHandler}
                  />
                  <span>Доход</span>
               </label>
            </p>
            <p>
               <label>
                  <input
                     className="with-gap"
                     name="type"
                     type="radio"
                     value="outcome"
                     onChange={newRecordHandler}

                  />
                  <span>Расход</span>
               </label>
            </p>
            <div style={{ paddingTop: '10px' }} className="input-field">
               <input
                  id="amount"
                  type="number"
                  name='amount'
                  value={recordForm.amount}
                  onChange={newRecordHandler}
               />
               <label style={{ paddingTop: '10px' }} htmlFor="amount">Сумма</label>
            </div>
            <div className="input-field">
               <input
                  id="description"
                  type="text"
                  name='description'
                  value={recordForm.description}
                  onChange={newRecordHandler}
               />
               <label htmlFor="description">Описание</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit">
               Создать
      <i className="material-icons right">send</i>
            </button>
         </form>
      </div>
   )
}