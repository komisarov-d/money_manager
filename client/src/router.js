import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components/common/Header/Header'
import { Sidebar } from './components/common/Sidebar/Sidebar'
import { LoginPage } from './components/AuthLayout/LoginPage'
import { SingUpPage } from './components/AuthLayout/SingUpPage'
import { HomePage } from './components/mainLayouts/HomePage/HomePage'
import { DetailPage } from './components/mainLayouts/DetailPage/DetailPage'
import { CategoriesPage } from './components/mainLayouts/CategoriesPage/CategoriesPage'
import { PlanningPage } from './components/mainLayouts/PlanningPage/PlanningPage'
import { RecordPage } from './components/mainLayouts/RecordPage/RecordPage'
import { ProfilePage } from './components/mainLayouts/ProfilePage/ProfilePage'
import { HistoryPage } from './components/mainLayouts/HistoryPage/HistoryPage'
export const useRouter = (isAuth) => {
   if (isAuth) {
      return (
         <div>
            <div className="app-main-layout">
               <Header />
               <Sidebar />


               <main className="app-content">
                  <div className="app-page">
                     <Switch>
                        <Suspense fallback={<div><Loader /></div>}>
                           <Route exact path={'/home'} >
                              <HomePage />
                           </Route>
                           <Route path={'/categories'} >
                              <CategoriesPage />
                           </Route>
                           <Route path={'/history'} >
                              <HistoryPage />
                           </Route>
                           <Route path={'/record'} >
                              <RecordPage />
                           </Route>
                           <Route path={'/detail/:id'} >
                              <DetailPage />
                           </Route>
                           <Route path={'/profile'} >
                              <ProfilePage />
                           </Route>
                           <Route path={'/planning'} >
                              <PlanningPage />
                           </Route>
                           <Redirect to={'/home'} />
                        </Suspense>
                     </Switch>
                  </div>
               </main>
               <div className="fixed-action-btn">
                  <a className="btn-floating btn-large blue" href="#">
                     <i className="large material-icons">add</i>
                  </a>
               </div>
            </div>
         </div>
      )
   }
   return (
      <div>
         <div className="grey darken-1 empty-layout">
            <Switch>
               <Suspense fallback={<div><Loader /></div>}>
                  <Route exact path={'/login'}>
                     <LoginPage />
                  </Route>
                  <Route exact path={'/singin'}>
                     <SingUpPage />
                  </Route>
                  <Redirect to={'/login'} />
               </Suspense>
            </Switch>
         </div></div>
   )

}