import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../../../redux/reducers/categoriesReducer'
import { CaregorySelector } from '../../../common/CategorySelector/CategorySelector'

export const UpdateCateg = ({ categories }) => {

   const dispatch = useDispatch()
   const [currentCat, setCurrent] = useState(categories[0]._id)
   const [updateForm, setUpdateForm] = useState({ title: '', limit: 10 })

   const updateChangeHandler = (e) => { setUpdateForm({ ...updateForm, [e.target.name]: e.target.value }) }

   const updateHandler = useCallback((e) => {
      e.preventDefault()
      dispatch(updateCategory(currentCat, updateForm.title, updateForm.limit))
   }, [dispatch, updateForm, currentCat])

   useEffect(() => {
      window.M.updateTextFields()
   }, [])

   const changeSelectHandler = (e) => { setCurrent(e.target.value) }
   let catEl = categories.map((cat, idx) => {
      return (
         <option key={idx} value={cat._id}>{cat.title}</option>
      )
   })
   return (
      <div className="col s12 m6">
         <div>
            <div className="page-subtitle">
               <h4>Редактировать</h4>
            </div>
            <form onSubmit={updateHandler}>
               <CaregorySelector catEl={catEl} changeSelectHandler={changeSelectHandler} />

               <div className="input-field">
                  <input
                     type="text"
                     id="title"
                     name='title'
                     onChange={updateChangeHandler}
                     value={updateForm.title}
                  />
                  <label htmlFor="title">Новое название</label>
               </div>
               <div className="input-field">
                  <input
                     name='limit'
                     value={updateForm.limit}
                     onChange={updateChangeHandler}
                     id="limit"
                     type="number"
                  />
                  <label htmlFor="limit">Новый лимит</label>
               </div>
               <button className="btn waves-effect waves-light" type="submit">
                  Обновить <i className="material-icons right">send</i>
               </button>
            </form>
         </div>
      </div>
   )
}