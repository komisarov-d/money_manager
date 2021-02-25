import { BrowserRouter } from 'react-router-dom';
import { useRouter } from './router';
import { useDispatch, useSelector } from 'react-redux';
import 'materialize-css'
import React, { useEffect } from 'react';
import { useMessage } from './components/common/Message/Message';
import { fetchInfoAction } from './redux/reducers/authReducer'

export const App = () => {
   const isAuth = useSelector(state => state.auth.isAuth)
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
   }, [dispatch])

   return (
      <BrowserRouter>
         { router}
      </BrowserRouter>

   )
}
