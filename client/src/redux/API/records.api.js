import axios from axios

export const recordsApi = {
   async fetchRecords() {
      try {
         const response = await axios.get('/api/records')
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async fetchRecordById(recordId) {
      try {
         const response = await axios.get(`/api/records/${recordId}`)
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async deleteRecordById(recordId) {
      try {
         const response = await axios.delete(`/api/records/${recordId}`)
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async createRecord(record, token) {
      try {
         const response = await axios.get('/api/records', { record }, {
            header: {
               Authorization: `Bearer ${token}`
            }
         })
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   }
}