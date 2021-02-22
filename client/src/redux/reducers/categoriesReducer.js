

const initialAuthState = {
   categories: []
}


export const categoriesReducer = (state = initialAuthState, action = authActions) => {
   switch (action.type) {
      case 'LOGIN':
         return { ...state, info: { ...action.payload } }

      default:
         return state;
   }
}
export const authActions = {
   fetchCategories: (categories) => ({ type: 'FETCH_CATEGORIES', payload: categories }),
   updateCategory: (title, limit) => ({ type: 'UPDATE_CATEGORY', payload: { title, limit } }),
   createCategory: (title, limit) => ({ type: 'CREATE_CATEGORY', payload: { title, limit } })
}

export const loginThunk = (email, password) => async (dispatch) => {

}
export const singUpThunk = (email, password, login) => async (dispatch) => {

}
export const logoutThunk = async (dispatch) => {

}
