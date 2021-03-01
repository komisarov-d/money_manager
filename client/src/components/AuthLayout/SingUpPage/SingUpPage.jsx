import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { singUpAction } from '../../../redux/reducers/authReducer'




export const SingUpPage = () => {
   const dispatch = useDispatch()
   const [agree, toggleAgree] = useState(false)
   const checkHandler = () => { toggleAgree(!agree) }
   const [singUpForm, setSingUpForm] = useState({
      email: '',
      password: '',
      name: ''
   })
   const formChangeHandler = useCallback(e => {
      setSingUpForm({ ...singUpForm, [e.target.name]: e.target.value })
   }, [singUpForm])

   const singUpHandler = (e) => {
      e.preventDefault()
      dispatch(singUpAction(singUpForm, agree))
   }
   return (
      <form className="card auth-card">
         <div className="card-content">
            <span className="card-title">Домашняя бухгалтерия</span>
            <div className="input-field">
               <input
                  id="email"
                  type="text"
                  name='email'
                  value={singUpForm.email}
                  onChange={formChangeHandler}
               />
               <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
               <input
                  id="password"
                  type="password"
                  name='password'
                  className="validate"
                  onChange={formChangeHandler}
                  value={singUpForm.password}
               />
               <label htmlFor="password">Пароль</label>
            </div>
            <div className="input-field">
               <input
                  id="name"
                  type="text"
                  className="validate"
                  onChange={formChangeHandler}
                  value={singUpForm.name}
                  name='name'
               />
               <label htmlFor="name">Имя</label>
            </div>
            <p>
               <label>
                  <input
                     type="checkbox"
                     checked={agree}
                     onChange={checkHandler}
                     name="checked"
                  />
                  <span>С правилами согласен</span>
               </label>
            </p>
         </div>
         <div className="card-action">
            <div>
               <button
                  onClick={singUpHandler}
                  className="btn waves-effect waves-light auth-submit"
                  type="submit"
               >
                  Зарегистрироваться<i className="material-icons right">send</i>
               </button>
            </div>
            <p className="center">
               Уже есть аккаунт?
      <NavLink style={{ paddingLeft: '10px' }} to={'/login'}>Войти!</NavLink>
            </p>
         </div>
      </form>
   )
}