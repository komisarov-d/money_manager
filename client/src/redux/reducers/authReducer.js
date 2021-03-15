import { authApi } from "../API/auth.api"
import { fetchCategories } from "./categoriesReducer"
import { hideLoader, setReady, showLoader, toastMessage } from './commonReducer'
import { fetchRecords } from "./recordsReducer"
export const initialAuthState = {
   isAuth: false,
   name: null,
   bill: null,
   userId: null,
   token: null
}
const LStorage = 'MMLocalStorage'

export const authReducer = (state = initialAuthState, action) => {
   switch (action.type) {
      case 'AUTH/LOGIN':
         return { ...state, ...action.payload, isAuth: true }
      case 'AUTH/LOGOUT':
         return { ...state, login: null, bill: null, uid: null, token: null, isAuth: false }
      case 'AUTH/SET_INFO':
         return { ...state, ...action.payload, isAuth: true }
      case 'AUTH/UPDATE_INFO':
         return { ...state, name: action.payload.name, bill: action.payload.bill }
      case 'AUTH/SET_BILL':
         return { ...state, bill: action.payload }
      default:
         return state;
   }
}

export const loginAction = ({ email, password }) => async (dispatch) => {
   if (!email.length || !password.length) { return dispatch(toastMessage('Некорректные данные при входе в систему.')) }
   try {
      dispatch(showLoader())
      const data = await authApi.login(email, password)
      localStorage.setItem(LStorage, JSON.stringify({ token: data.token, userId: data.userId }))
      dispatch({ type: 'AUTH/LOGIN', payload: data.user })
      dispatch(fetchInfoAction())
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
export const singUpAction = ({ email, password, name, bill }, agree) => async (dispatch) => {
   if (!email.length || !name.length) { return dispatch(toastMessage('Некорректные данные при регистрации.')) }
   if (password.length < 8) { return dispatch(toastMessage('Минимальная длина пароля 8 символов.')) }
   if (agree === false) { return dispatch(toastMessage('Требуется согласие с правилами.')) }
   try {
      dispatch(showLoader())
      const data = await authApi.singUp(email, password, name, bill)
      localStorage.setItem(LStorage, JSON.stringify({ token: data.token, userId: data.userId }))
      dispatch({ type: 'AUTH/LOGIN', payload: data.user })
      dispatch(fetchInfoAction())
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}

export const fetchInfoAction = () => async (dispatch) => {
   const localData = await JSON.parse(localStorage.getItem(LStorage))
   if (localData && localData.token) {
      try {
         const data = await authApi.fetchInfo(localData.token)
         dispatch({ type: 'AUTH/SET_INFO', payload: data.user })
         await dispatch(fetchCategories())
         await dispatch(fetchRecords())
      } catch (e) {
         dispatch(toastMessage('Войдите в систему.'))
      }
   }
   dispatch(hideLoader())
   dispatch(setReady())
}
export const updateInfoAction = ({ name, bill }) => async (dispatch) => {
   const localData = await JSON.parse(localStorage.getItem(LStorage))
   if (localData && localData.token) {
      try {
         dispatch(showLoader())
         console.log(bill);
         const data = await authApi.updateInfo(name, bill, localData.token)
         dispatch({ type: 'AUTH/UPDATE_INFO', payload: { name, bill } })
         dispatch(toastMessage(data.message))
         dispatch(hideLoader())
      } catch (e) {
         dispatch(toastMessage(e))
         dispatch(hideLoader())
      }
   }
}
export const setBill = (newBill) => ({ type: 'AUTH/SET_BILL', payload: newBill })
export const logoutAction = () => {
   localStorage.removeItem(LStorage)
   return { type: 'AUTH/LOGOUT' }
}

