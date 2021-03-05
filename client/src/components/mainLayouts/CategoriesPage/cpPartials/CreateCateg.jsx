import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../../../redux/reducers/categoriesReducer'

export const CreateCateg = () => {
   const dispatch = useDispatch()
   const [createForm, setCreateForm] = useState({ title: '', limit: 10 })
   const createChangeHandler = (e) => { setCreateForm({ ...createForm, [e.target.name]: e.target.value }) }
   const createHandler = useCallback((e) => {
      e.preventDefault()
      dispatch(createCategory(createForm))
   }, [dispatch, createForm])

   useEffect(() => { window.M.updateTextFields() }, [])

   return (
      <div className="col s12 m6">
         <div>
            <div className="page-subtitle">
               <h4>Создать</h4>
            </div>
            <form
               onSubmit={createHandler}
            >
               <div className="input-field">
                  <input
                     onChange={createChangeHandler}
                     id="name"
                     name='title'
                     value={createForm.title}
                     type="text"
                  />
                  <label htmlFor="name">Название</label>
               </div>
               <div className="input-field">
                  <input
                     onChange={createChangeHandler}
                     name="limit"
                     id="limit"
                     type="number"
                     value={createForm.limit}
                  />
                  <label htmlFor="limit">Лимит</label>
               </div>
               <button className="btn waves-effect waves-light" type="submit">
                  Создать<i className="material-icons right">send</i>
               </button>
            </form>
         </div >
      </div >
   )
}