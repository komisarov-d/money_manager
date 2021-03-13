import axios from 'axios'

export const recordsApi = {

   async fetchRecords(token) {
      try {
         const response = await axios.get('/api/record', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const data = response.data.records
         return data
      } catch (e) {
         throw e.response.data.message
      }
   },
   async fetchRecordById(recordId, token) {
      try {
         const response = await axios.get(`/api/record/detail//${recordId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const record = response.data.record
         return record
      } catch (e) {
         throw e.response.data.message
      }
   },
   async deleteRecordById(recordId, token) {
      try {
         const response = await axios.delete(`/api/record/${recordId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         console.log(response)

         // const data = response.json()
         // return data
      } catch (e) {
         throw e.response.data.message

      }
   },
   async createRecord(record, categoryId, token) {
      try {
         const response = await axios.post('/api/record/create', { record, categoryId }, {
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
         })
         const data = response.data
         return data
      } catch (e) {
         throw e.response.data.message
      }
   }
}
