import { authApi } from "../API/auth.api"
import { toastMessage } from './commonReducer'
const initialAuthState = {
   isAuth: false,
   login: null,
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
      default:
         return state;
   }
}

export const loginAction = ({ email, password }) => async (dispatch) => {
   try {
      const data = await authApi.login(email, password)
      localStorage.setItem(LStorage, JSON.stringify({ token: data.token, userId: data.userId }))

      dispatch({
         type: 'AUTH/LOGIN',
         payload: data.user
      })

   } catch (e) {
      toastMessage(e.message)
   }
}
export const singUpAction = ({ email, password, name }) => async (dispatch) => {
   try {
      const data = await authApi.singUp(email, password, name)
      localStorage.setItem(LStorage, JSON.stringify({ token: data.token, userId: data.userId }))

      dispatch({
         type: 'AUTH/LOGIN',
         payload: data.user
      })
   } catch (e) {
      toastMessage(e.message)
   }
}

export const fetchInfoAction = (token) => async (dispatch) => {
   const localData = localStorage.getItem(LStorage)
   if (localData && localData.token) {
      const data = await authApi.fetchInfo(token)
      dispatch({ type: 'AUTH/SET_INFO', payload: data })
   }

}

export const logoutAction = async (dispatch) => {
   dispatch({ type: 'AUTH/LOGOUT' })
   localStorage.removeItem(LStorage)
}

