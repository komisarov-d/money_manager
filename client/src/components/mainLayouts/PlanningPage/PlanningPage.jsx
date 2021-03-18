import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryPlanning } from './ppPartials/CategoryPlanning'
import { useSelector } from 'react-redux'
import '../../commonStyles/common.css'
export const PlanningPage = () => {
   document.title = 'Planning'
   const categories = useSelector(state => state.categories.categories)
   const records = useSelector(state => state.records.records)
   const bill = useSelector(state => state.auth.bill)
   if (!categories.length) { return <p className='center'>Категорий пока нет. <NavLink to='/categories'>Создать?</NavLink></p> }

   const planningEl = categories.map((cat) => {
      const spend = records
         .filter(r => r.category === cat._id)
         .filter(r => r.type === 'outcome')
         .reduce((total, record) => {
            return total += +record.amount
         }, 0)
      const percent = 100 * spend / cat.limit
      const progressPercent = percent > 100 ? 100 : percent
      const progressColor = percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red'
      const left = cat.limit - spend

      return (<CategoryPlanning
         left={left}
         persent={percent}
         spend={spend}
         category={cat}
         progressColor={progressColor}
         progressPercent={progressPercent}
         key={cat._id}
      />)
   })

   return (
      <div>
         <div className="page-title">
            <h3>Планирование</h3>
            <h4>{bill}</h4>
         </div>
         <section>
            {planningEl}
         </section>
      </div>
   )
}