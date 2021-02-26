import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../../redux/reducers/authReducer'

export const Header = (props) => {
   const dispatch = useDispatch()

   const name = useSelector(state => state.auth.name)
   const asideToggle = (e) => {
      e.preventDefault()
      props.sidebarToggle()
   }
   const logout = () => {
      dispatch(logoutAction())

   }
   useEffect(() => {
      const dropDown = document.querySelector('.dropdown-trigger')
      window.M.Dropdown.init(dropDown, { alignment: 'right' })
   }, [])

   // const currentTime = new Date()
   return (
      <header >
         <nav className="navbar orange lighten-1">
            <div className="nav-wrapper">
               <div className="navbar-left">
                  <span onClick={asideToggle} >
                     <i className="material-icons black-text">dehaze</i>
                  </span>
                  <span className="black-text">Time</span>
               </div>

               <ul className="right hide-on-small-and-down">
                  <li>
                     {/* eslint-disable-next-line */}
                     <a
                        className="dropdown-trigger black-text"
                        href='#'
                        data-target="dropdown"
                     >{name} <i className="material-icons right">arrow_drop_down</i>
                     </a>

                     <ul id='dropdown' className='dropdown-content'>
                        <li>
                           <NavLink to='/profile' className="black-text">
                              <i className="material-icons">account_circle</i>Профиль</NavLink>
                        </li>
                        <li className="divider" tabIndex="-1"></li>
                        <li>
                           <span onClick={logout} className="black-text">
                              <i className="material-icons">assignment_return</i>
                              Выйти</span>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </nav>
      </header >
   )
}