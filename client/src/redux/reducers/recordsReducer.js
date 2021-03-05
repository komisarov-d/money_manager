import { recordsApi } from "../API/records.api"

const initialRecordsState = {
   records: []
}

export const recordsReducer = (state = initialRecordsState, action) => {
   switch (action.type) {
      case 'RECORDS/FETCH_RECORDS':
         return { ...state, records: action.payload }
      case 'RECORDS/REMOVE_RECORD':
         return { ...state, records: [action.payload] }
      case 'RECORDS/CREATE_RECORD':
         return { ...state, records: [...state.records, action.payload] }

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

export const fetchRecord = () => async (dispatch) => {
   const records = await recordsApi.fetchRecords()
   dispatch({
      type: 'RECORDS/FETCH_RECORDS',
      payload: records
   })
}
export const removeRecord = (recordId) => async (dispatch) => {

}
export const createRecord = async (dispatch) => {

}
// const fetchRecordById = async (id) => {
//    const record = await recordsApi()
//    return record
// }