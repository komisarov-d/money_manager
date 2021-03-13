
import { categoriesApi } from "../API/categories.api"
import { updateObjectInArray } from "../aside/updateObjInArr"
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
         return { ...state, categories: updateObjectInArray(state.categories, action.id, "_id", { title: action.title, limit: action.limit }) }
      default:
         return state;
   }
}

export const fetchCategories = () => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const categories = await categoriesApi.fetchCategories(localData.token)
      await dispatch({ type: 'CATEGORIES/FETCH', payload: categories })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
export const updateCategory = (id, title, limit) => async (dispatch) => {
   if (title.length < 3) { return dispatch(toastMessage('Название не может быть короче 3 символов.')) }
   if (limit < 10) { return dispatch(toastMessage('Лимит не может быть менее 10.')) }
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const updateResponse = await categoriesApi.updateCategory(id, title, limit, localData.token)
      await dispatch({ type: 'CATEGORIES/UPDATE', id, title, limit })
      dispatch(toastMessage(updateResponse.message))
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
export const createCategory = ({ title, limit }) => async (dispatch) => {
   if (title.length < 3) { return dispatch(toastMessage('Название не может быть короче 3 символов.')) }
   if (limit < 10) { return dispatch(toastMessage('Лимит не может быть менее 10.')) }
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      await categoriesApi.createCategory(title, limit, localData.token)
      await dispatch(fetchCategories())
      dispatch(toastMessage('Категория успешно создана.'))
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}
