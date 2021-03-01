import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../../redux/reducers/authReducer'

export const LoginPage = () => {
   const dispatch = useDispatch()
   const [loginForm, setLoginForm] = useState({
      email: '',
      password: ''
   })
   const formChangeHandler = e => {
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
   }

   const loginHandler = (e) => {
      e.preventDefault()
      dispatch(loginAction(loginForm))
   }

   return (
      <form className="card auth-card" onSubmit={loginHandler}>
         <div className="card-content">
            <span className="card-title">Домашняя бухгалтерия</span>
            <div className="input-field">
               <input
                  id="email"
                  type="email"
                  className="validate"
                  value={loginForm.email}
                  name='email'
                  onChange={formChangeHandler}
               />
               <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
               <input
                  id="password"
                  type="password"
                  className="validate"
                  value={loginForm.password}
                  name='password'
                  onChange={formChangeHandler}
               />
               <label htmlFor="password">Пароль</label>
            </div>
         </div>
         <div className="card-action">
            <div>
               <button
                  className="btn waves-effect waves-light auth-submit"
                  type="submit"
               >Войти<i className="material-icons right">send</i>
               </button>
            </div>
            <p className="center">
               Нет аккаунта?
      <NavLink style={{ paddingLeft: '10px' }} to={'/singup'}>Зарегистрироваться</NavLink>
            </p>
         </div>
      </form>
   )

}