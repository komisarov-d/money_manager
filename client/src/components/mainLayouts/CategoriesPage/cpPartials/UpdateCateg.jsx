import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../../../redux/reducers/categoriesReducer'

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
      let select = document.querySelectorAll('select')
      window.M.FormSelect.init(select)
   }, [])

   useEffect(() => {
      window.M.updateTextFields()
   }, [])

   let catEl = categories.map((cat, idx) => {
      return (
         <option key={idx} value={cat._id}>{cat.title}</option>
      )
   })

   const changeSelectHandler = (e) => { setCurrent(e.target.value) }

   return (
      <div className="col s12 m6">
         <div>
            <div className="page-subtitle">
               <h4>Редактировать</h4>
            </div>
            <form onSubmit={updateHandler}>
               <div className="input-field" >
                  <select onChange={changeSelectHandler}>
                     {catEl}
                  </select>
                  <label>Выберите категорию</label>
               </div>
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