import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateInfoAction } from '../../../redux/reducers/authReducer'


export const ProfilePage = () => {
   document.title = 'Profile'
   const history = useHistory()
   const dispatch = useDispatch()
   useEffect(() => { window.M.updateTextFields() }, [])
   const [profileForm, setForm] = useState({
      name: '',
      bill: 0
   })

   const changeHandler = (e) => { setForm({ ...profileForm, [e.target.name]: e.target.value }) }

   const updateHandler = (e) => {
      e.preventDefault()
      dispatch(updateInfoAction(profileForm))
      history.push('/home')
   }

   return (
      <div>
         <div className="page-title">
            <h3>Профиль</h3>
         </div>
         <form className="form" onSubmit={updateHandler}>
            <div className="input-field">
               <input
                  onChange={changeHandler}
                  id="name"
                  type="text"
                  name='name'
                  value={profileForm.name}
               />
               <label htmlFor="description">Имя</label>
            </div>
            <div className="input-field">
               <input
                  id="bill"
                  type="number"
                  name='bill'
                  onChange={changeHandler}
                  value={profileForm.bill}
               />
               <label htmlFor="description">Капитал</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit">
               Обновить
      <i className="material-icons right">send</i>
            </button>
         </form>
      </div>
   )
}