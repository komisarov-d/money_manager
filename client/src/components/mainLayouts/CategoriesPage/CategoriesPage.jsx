import React, { useEffect } from 'react'
import { CreateCateg } from './cpPartials/CreateCateg'
import { UpdateCateg } from './cpPartials/UpdateCateg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../../redux/reducers/categoriesReducer'
import { Loader } from '../../common/Loader/Loader'

export const CategoriesPage = () => {
   document.title = 'Categories'
   const dispatch = useDispatch()
   const loading = useSelector(state => state.common.loading)
   const categories = useSelector(state => state.categories.categories)

   useEffect(() => {
      dispatch(fetchCategories())
   }, [dispatch])

   return (
      <div>
         <div className="page-title">
            <h3>Категории</h3>
         </div>
         {loading ? <Loader />
            :
            <section>
               <div className="row">
                  <CreateCateg />
                  {!categories.length ? <p>Категорий пока нет</p> : <UpdateCateg categories={categories} />}
               </div>
            </section>}
      </div>
   )
}