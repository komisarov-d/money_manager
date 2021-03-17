import { recordsApi } from "../API/records.api"
import { setBill } from "./authReducer"
import { hideLoader, showLoader, toastMessage } from "./commonReducer"
const LStorage = 'MMLocalStorage'
const initialRecordsState = {
   records: [],
   currentRecord: {}
}

export const recordsReducer = (state = initialRecordsState, action) => {
   switch (action.type) {
      case 'RECORDS/FETCH_RECORDS':
         return { ...state, records: [...action.payload.reverse()] }
      case 'RECORDS/CREATE_RECORD':
         return { ...state, records: [action.payload, ...state.records] }
      case 'RECORD/CURRENT_RECORD':
         return { ...state, currentRecord: action.payload }
      case 'RECORD/REMOVE_RECORD':
         return { ...state, records: state.records.filter(rec => rec._id !== action.payload) }
      default:
         return state;
   }
}

export const fetchRecords = () => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const records = await recordsApi.fetchRecords(localData.token)
      dispatch({ type: 'RECORDS/FETCH_RECORDS', payload: records })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}

export const removeRecord = (recordId) => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const resMessage = await recordsApi.deleteRecordById(recordId, localData.token)
      dispatch({ type: 'RECORD/REMOVE_RECORD', payload: recordId })
      dispatch(toastMessage(resMessage))
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}

export const createRecord = (record, categoryId) => async (dispatch) => {
   if (!record.type.length) { return dispatch(toastMessage('Выберите тип записи.')) }
   if (record.amount < 10) { return dispatch(toastMessage('Минимальная сумма записи 10.')) }
   if (record.description.length < 4) { return dispatch(toastMessage('Описание не может быть меньше 4 символов.')) }
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const res = await recordsApi.createRecord(record, categoryId, localData.token)
      dispatch({ type: 'RECORDS/CREATE_RECORD', payload: res.data.record })
      dispatch(setBill(res.data.bill))
      dispatch(toastMessage(res.data.message))
      dispatch(hideLoader())
      return res
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}

export const fetchRecord = (id) => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const record = await recordsApi.fetchRecordById(id, localData.token)
      dispatch({ type: 'RECORD/CURRENT_RECORD', payload: record })
      dispatch(hideLoader())
   } catch (e) {
      dispatch(toastMessage(e))
   }
}
