import axios from 'axios'

export const recordsApi = {

   async fetchRecords(token) {
      try {
         const response = await axios.get('/api/records', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         console.log(response)
         // const data = response.json()
         // return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async fetchRecordById(recordId, token) {
      try {
         const response = await axios.get(`/api/records/${recordId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         console.log(response)

         // const data = response.json()
         // return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async deleteRecordById(recordId, token) {
      try {
         const response = await axios.delete(`/api/records/${recordId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         console.log(response)

         // const data = response.json()
         // return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async createRecord(record, token) {
      try {
         const response = await axios.get('/api/records', { record }, {
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
         })
         console.log(response)

         // const data = response.json()
         // return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   }
}

export const fetchCurrency = async () => {
   const currency = await fetch(`https://api.exchangerate-api.com/v4/latest/UAH`)
   return await currency.json()
}