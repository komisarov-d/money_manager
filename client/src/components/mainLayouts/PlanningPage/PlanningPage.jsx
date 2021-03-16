import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryPlanning } from './ppPartials/CategoryPlanning'
import { useSelector } from 'react-redux'

export const PlanningPage = () => {
   document.title = 'Planning'
   const categories = useSelector(state => state.categories.categories)
   const records = useSelector(state => state.records.records)
   const bill = useSelector(state => state.auth.bill)

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

   if (!categories.length) { <p>Категорий пока нет. <NavLink to='/categories'>Создать</NavLink></p> }
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