const initialCommonState = {
   loading: false,
   message: null,
   isReady: false,
   currency: {},
   pageArrIndex: 0
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
      case 'COMMON/SET_READY':
         return { ...state, isReady: true }
      case 'COMMON/SET_CURRENCY':
         return { ...state, currency: action.payload }
      case 'COMMON/SET_CURRENT-PAGE':
         return { ...state, currentPage: action.payload }
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
export const setReady = () => ({ type: 'COMMON/SET_READY' })
export const setCurrency = (currency) => ({ type: 'COMMON/SET_CURRENCY', payload: currency })
export const setCurrentPage = (page) => ({ type: 'COMMON/SET_CURRENT-PAGE', payload: page })
export const fetchCurrencies = async () => {
   try {
      const result = await fetch(`https://api.exchangerate-api.com/v4/latest/UAH`)
      return result.json()
   } catch {
      fetchCurrencies()
   }
}