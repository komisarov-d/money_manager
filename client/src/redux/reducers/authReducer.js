
const initialAuthState = {
   isAuth: true,
   login: 'Dima',
   bill: 12500,
   userId: null,
   token: null
}


export const authReducer = (state = initialAuthState, action = authActions) => {
   switch (action.type) {
      case 'AUTH/LOGIN':
         return { ...state, info: { ...action.payload } }
      case 'AUTH/LOGOUT':
         return { ...state, info: { login: null, bill: null, uid: null, token: null } }
      case 'AUTH/SING_UP':
         return { ...state, info: { ...action.payload } }
      default:
         return state;
   }
}
export const authActions = {
   loginAction: (login, uid) => ({ type: 'LOGIN', payload: { login, uid } }),
   logoutAction: () => ({ type: 'LOGOUT' }),
   singUpAction: (login, uid) => ({ type: 'SING_IN', payload: { login, uid } }),
   setInfoAction: ({ login, uid, bill }) => ({ type: 'FETCH_INFO', payload: { login, uid, bill } })
}

export const loginThunk = (email, password) => async (dispatch) => {
   try {

   } catch (e) {

   }
}
export const singUpThunk = (email, password, login) => async (dispatch) => {
   try {

   } catch (e) {

   }
}
export const logoutThunk = async (dispatch) => {
   try {

   } catch (e) {

   }
}




