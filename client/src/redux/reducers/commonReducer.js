
const initialCommonState = {
   loading: false,
   message: null
}


export const authReducer = (state = initialCommonState, action) => {
   switch (action.type) {
      case 'COMMON/SHOW_LOADER':
         return { ...state, loading: true }
      case 'COMMON/HIDE_LOADER':
         return { ...state, loading: false }
      case 'COMMON/SET_MESSAGE':
         return { ...state, message: action.payload }
      case 'COMMON/CLEAR_MESSAGE':
         return { ...state, message: '' }
      default:
         return state;
   }
}
export const showMessage = (newMessage) => ({ type: 'COMMON/SET_MESSAGE', newMessage })