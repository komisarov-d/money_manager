import { BrowserRouter } from 'react-router-dom'
import { useRouter } from './router'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { useMessage } from './components/common/Message/Message'
import { fetchInfoAction } from './redux/reducers/authReducer'
import { Loader } from './components/common/Loader/Loader'
import 'materialize-css'

export const App = () => {
   const isAuth = useSelector(state => state.auth.isAuth)
   const isReady = useSelector(state => state.common.isReady)
   const router = useRouter(isAuth)
   const dispatch = useDispatch()
   const message = useSelector(state => state.common.message)
   const toast = useMessage()

   // Message subs
   useEffect(() => {
      toast(message)
   }, [message, toast])

   // Local storage observ
   useEffect(() => {
      dispatch(fetchInfoAction())
   })
   if (!isReady) {
      return <Loader />
   }
   return (
      <BrowserRouter>
         { router}
      </BrowserRouter>
   )
}
