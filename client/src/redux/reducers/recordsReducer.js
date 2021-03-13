import { recordsApi } from "../API/records.api"
import { hideLoader, showLoader, toastMessage } from "./commonReducer"
const LStorage = 'MMLocalStorage'

const initialRecordsState = {
   records: [],
   currentRecord: {}
}

export const recordsReducer = (state = initialRecordsState, action) => {
   switch (action.type) {
      case 'RECORDS/FETCH_RECORDS':
         return { ...state, records: action.payload }
      case 'RECORDS/CREATE_RECORD':
         return { ...state, records: [...state.records, action.payload] }
      case 'RECORD/CURRENT_RECORD':
         return { ...state, currentRecord: action.payload }
      default:
         return state;
   }
}

export const fetchRecords = () => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const records = await recordsApi.fetchRecords(localData.token)
      dispatch({
         type: 'RECORDS/FETCH_RECORDS',
         payload: records
      })
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
      await recordsApi.deleteRecordById(recordId, localData.token)
      dispatch(hideLoader())
   } catch (e) {
      dispatch(hideLoader())
      dispatch(toastMessage(e))
   }
}

export const createRecord = (record, categoryId) => async (dispatch) => {
   try {
      dispatch(showLoader())
      const localData = await JSON.parse(localStorage.getItem(LStorage))
      const res = await recordsApi.createRecord(record, categoryId, localData.token)
      await dispatch(fetchRecords())
      dispatch(toastMessage(res.message))
      dispatch(hideLoader())
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