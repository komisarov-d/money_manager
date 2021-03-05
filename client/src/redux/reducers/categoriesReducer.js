
import { categoriesApi } from "../API/categories.api"
import { hideLoader, showLoader, toastMessage } from "./commonReducer"
const LStorage = 'MMLocalStorage'


const initialCategoriesState = {
   categories: []
}


export const categoriesReducer = (state = initialCategoriesState, action) => {
   switch (action.type) {
      case 'CATEGORIES/FETCH':
         return { ...state, categories: [...action.payload] }
      case 'CATEGORIES/UPDATE':
         return { ...state, categories: [...state.categories, action.payload] }
      case 'CATEGORIES/CREATE':
         return { ...state, categories: [...state.categories, action.payload] }
      default:
         return state;
   }
}


export const fetchCategories = () => async (dispatch) => {
   dispatch(showLoader())
   try {
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const categories = await categoriesApi.fetchCategories(localData.token)


      dispatch({ type: 'CATEGORIES/FETCH', payload: categories })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
export const updateCategory = (name, limit) => async (dispatch) => {
   dispatch(showLoader())
   try {
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const updatedCategory = await categoriesApi.updateCategory(name, limit, localData.token)
      dispatch({ type: 'CATEGORIES/UPDATE', payload: updatedCategory })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
export const createCategory = ({ title, limit }) => async (dispatch) => {
   dispatch(showLoader())
   try {

      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const newCategories = await categoriesApi.createCategory(title, limit, localData.token)
      dispatch({ type: 'CATEGORIES/CREATE', payload: newCategories })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
