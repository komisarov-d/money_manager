import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../../../redux/reducers/categoriesReducer'

export const UpdateCateg = React.memo(({ categories }) => {

   const dispatch = useDispatch()

   const [updateForm, setUpdateForm] = useState({ title: '', limit: 0 })
   const updateChangeHandler = (e) => { setUpdateForm({ ...updateForm, [e.target.name]: e.target.value }) }
   const updateHandler = useCallback((e) => {
      e.preventDefault()
      dispatch(updateCategory(updateForm))
   }, [dispatch, updateForm])

   useEffect(() => {
      let select = document.querySelectorAll('select');
      window.M.FormSelect.init(select);
      window.M.updateTextFields()
   }, [])
   const catEl = []
   for (const cat of categories) {
      catEl.push(
         <option key={cat._id} value={cat._id}>{cat.title}</option>
      )
   }
   return (
      <div className="col s12 m6">
         <div>
            <div className="page-subtitle">
               <h4>Редактировать</h4>
            </div>
            <form
               onSubmit={updateHandler}
            >
               <div className="input-field" >
                  <select>

                     {catEl}
                  </select>
                  <label>Выберите категорию</label>
               </div>
               <div className="input-field">
                  <input
                     type="text"
                     id="name"
                     name='title'
                     onChange={updateChangeHandler}
                     value={updateForm.title}
                  />
                  <label htmlFor="name">Название</label>
               </div>
               <div className="input-field">
                  <input
                     name='limit'
                     value={updateForm.limit}
                     onChange={updateChangeHandler}
                     id="limit"
                     type="number"
                  />
                  <label htmlFor="limit">Лимит</label>
               </div>
               <button className="btn waves-effect waves-light" type="submit">
                  Обновить <i className="material-icons right">send</i>
               </button>
            </form>
         </div>
      </div>
   )
})