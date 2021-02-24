import { authApi } from "../API/auth.api"

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

export const loginAction = (email, password) => async (dispatch) => {
   try {
      const data = await authApi.login(email, password)
      localStorage.setItem(LStorage, JSON.stringify({ token: data.token, userId: data.userId }))
      dispatch({
         type: 'AUTH/LOGIN',
         payload: data
      })

   } catch (e) {
      console.log(e.message)  //Change om message
   }
}
export const singUpAction = async ({ email, password, name }) => {
   try {
      await authApi.singUp(email, password, name)
   } catch (e) { }
}

export const logoutAction = async (dispatch) => {
   dispatch({ type: 'AUTH/LOGOUT' })
   localStorage.removeItem(LStorage)
}




