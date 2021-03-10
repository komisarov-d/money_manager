import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../../redux/reducers/authReducer'
import { dateFilter } from '../../../redux/aside/dateFilter'

export const Header = (props) => {
   const dispatch = useDispatch()

   const [date, setDate] = useState(new Date())
   // const [interval, changeInterval] = useState(null)

   const name = useSelector(state => state.auth.name)
   const asideToggle = (e) => {
      e.preventDefault()
      props.sidebarToggle()
   }
   const logout = (e) => {
      e.preventDefault()
      dispatch(logoutAction())
   }
   useEffect(() => {
      const dropDown = document.querySelector('.dropdown-trigger')
      window.M.Dropdown.init(dropDown)
   }, [])
   const dateInterval = (interval) => {
      setInterval(() => {
         setDate(new Date())
      }, interval);
   }

   useEffect(() => {
      dateInterval(1000)
      return () => {
         dateInterval(null)
         setDate(null)
      }
   }, [])

   return (
      <header >
         <nav className="navbar orange lighten-1">
            <div className="nav-wrapper">
               <div className="navbar-left">
                  <span onClick={asideToggle} >
                     <i className="material-icons black-text">dehaze</i>
                  </span>
                  <span style={{ paddingLeft: '10px' }} className="black-text">{dateFilter(date, 'datetime')}</span>
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
                           {/* eslint-disable-next-line */}
                           <a onClick={logout} href='/' className="black-text">
                              <i className="material-icons">assignment_return</i>
                              Выйти</a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </nav>
      </header >
   )
}