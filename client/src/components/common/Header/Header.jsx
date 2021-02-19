import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


export const Header = (props) => {

   const asideToggle = (e) => {
      e.preventDefault()
      props.sidebarToggle()
   }

   useEffect(() => {
      const dropDown = document.querySelector('.dropdown-trigger')
      window.M.Dropdown.init(dropDown, { alignment: 'right' })
   }, [])


   return (
      <header >
         <nav className="navbar orange lighten-1">
            <div className="nav-wrapper">
               <div className="navbar-left">
                  <span onClick={asideToggle} >
                     <i className="material-icons black-text">dehaze</i>
                  </span>
                  <span className="black-text">{Date.now().toLocaleString()}</span>
               </div>

               <ul className="right hide-on-small-and-down">
                  <li>
                     {/* eslint-disable-next-line */}
                     <a
                        className="dropdown-trigger black-text"

                        href='#'
                        data-target="dropdown"


                     >USER NAME <i className="material-icons right">arrow_drop_down</i>
                     </a>

                     <ul id='dropdown' className='dropdown-content'>
                        <li>
                           <NavLink to='/profile' className="black-text">
                              <i className="material-icons">account_circle</i>Профиль</NavLink>
                        </li>
                        <li className="divider" tabindex="-1"></li>
                        <li>
                           <NavLink to='/login' className="black-text">
                              <i className="material-icons">assignment_return</i>
                              Выйти</NavLink>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </nav>
      </header >
   )
}