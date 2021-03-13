import React, { useEffect } from 'react'

export const CaregorySelector = ({ catEl, changeHandler }) => {

   useEffect(() => {
      let select = document.querySelectorAll('select')
      window.M.FormSelect.init(select)
   }, [])



   return (
      <div className="input-field" >
         <select onChange={changeHandler}>
            {catEl}
         </select>
         <label>Выберите категорию</label>
      </div>
   )
}