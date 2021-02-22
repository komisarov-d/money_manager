

const initialAuthState = {
   records: []
}


export const recordsReducer = (state = initialAuthState, action = authActions) => {
   switch (action.type) {
      case 'LOGIN':
         return { ...state, info: { ...action.payload } }
      case 'LOGOUT':
         return { ...state, info: { login: null, bill: null }, uid: null }
      case 'SING_UP':
         return { ...state, info: { ...action.payload } }
      case 'SET_INFO':
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

}
export const singUpThunk = (email, password, login) => async (dispatch) => {

}
export const logoutThunk = async (dispatch) => {

}
