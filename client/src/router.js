import React, { Suspense, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components/common/Header/Header'
import { Sidebar } from './components/common/Sidebar/Sidebar'
import { LoginPage } from './components/AuthLayout/LoginPage/LoginPage'
import { SingUpPage } from './components/AuthLayout/SingUpPage/SingUpPage'
import { HomePage } from './components/mainLayouts/HomePage/HomePage'
import { DetailPage } from './components/mainLayouts/DetailPage/DetailPage'
import { CategoriesPage } from './components/mainLayouts/CategoriesPage/CategoriesPage'
import { PlanningPage } from './components/mainLayouts/PlanningPage/PlanningPage'
import { RecordPage } from './components/mainLayouts/RecordPage/RecordPage'
import { ProfilePage } from './components/mainLayouts/ProfilePage/ProfilePage'
import { HistoryPage } from './components/mainLayouts/HistoryPage/HistoryPage'
import { Loader } from './components/common/Loader/Loader'
import { useSelector } from 'react-redux'

export const useRouter = (isAuth) => {

   const [open, toggleOpen] = useState('')
   const sidebarToggle = () => open === '' ? toggleOpen('open') : toggleOpen('')
   const loading = useSelector(state => state.common.loading)

   if (isAuth) {
      return (
         <div>
            <div className="app-main-layout">
               <Header sidebarToggle={sidebarToggle} />
               <Sidebar open={open} />
               <main className={["app-content", open ? '' : 'full'].join(' ')}>
                  <div className="app-page">
                     {loading && <Loader />}

                     <Switch>

                        <Route exact path={'/'} >
                           <HomePage />
                        </Route>
                        <Route exact path={'/categories'} >
                           <CategoriesPage />
                        </Route>
                        <Route exact path={'/history'} >
                           <HistoryPage />
                        </Route>
                        <Route exact path={'/record'} >
                           <RecordPage />
                        </Route>
                        <Route path={'/detail/:id'} >
                           <DetailPage />
                        </Route>
                        <Route exact path={'/profile'} >
                           <ProfilePage />
                        </Route>
                        <Route exact path={'/planning'} >
                           <PlanningPage />
                        </Route>
                        <Redirect to={'/'} />

                     </Switch>
                  </div>
               </main>
               <div className="fixed-action-btn">
                  <a className="btn-floating btn-large blue" href="/record">
                     <i className="large material-icons">add</i>
                  </a>
               </div>
            </div>
         </div>
      )
   }
   if (!isAuth) {
      return (
         <div>
            <div className="grey darken-1 empty-layout">
               <Switch>
                  <Suspense fallback={<div><Loader /></div>}>
                     <Route exact path={'/login'}>
                        <LoginPage />
                     </Route>
                     <Route exact path={'/singup'}>
                        <SingUpPage />
                     </Route>
                     <Redirect to={'/login'} />
                  </Suspense>

               </Switch>
            </div></div>
      )
   }


}