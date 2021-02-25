
const initialCommonState = {
   loading: false,
   message: null
}


export const commonReducer = (state = initialCommonState, action) => {
   switch (action.type) {
      case 'COMMON/SHOW_LOADER':
         return { ...state, loading: true }
      case 'COMMON/HIDE_LOADER':
         return { ...state, loading: false }
      case 'COMMON/SET_MESSAGE':
         return { ...state, message: action.payload }
      case 'COMMON/CLEAR_MESSAGE':
         return { ...state, message: null }
      default:
         return state;
   }
}

export const toastMessage = (newMessage) => (dispatch) => {
   dispatch({ type: 'COMMON/SET_MESSAGE', payload: newMessage })
   setTimeout(() => {
      dispatch({ type: 'COMMON/CLEAR_MESSAGE' })
   }, 4000);
}

export const showLoader = () => ({ type: 'COMMON/SHOW_LOADER' })
export const hideLoader = () => ({ type: 'COMMON/HIDE_LOADER' })