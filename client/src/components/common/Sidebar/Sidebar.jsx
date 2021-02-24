import React from 'react'
import { NavLink } from 'react-router-dom'


export const Sidebar = (props) => {

   return (

      <ul className={['sidenav', 'app-sidenav', props.open].join(' ')}>
         <li>
            <NavLink to="/" className="waves-effect waves-orange pointer">Счет</NavLink>
         </li>
         <li>
            <NavLink to="/history" className="waves-effect waves-orange pointer">История</NavLink>
         </li>
         <li>
            <NavLink to="/planning" className="waves-effect waves-orange pointer">Планирование</NavLink>
         </li>
         <li>
            <NavLink to="/record" className="waves-effect waves-orange pointer">Новая запись</NavLink>
         </li>
         <li>
            <NavLink to="/categories" className="waves-effect waves-orange pointer">Категории</NavLink>
         </li>
      </ul>

   )


}