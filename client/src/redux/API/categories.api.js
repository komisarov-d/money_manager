import axios from axios

export const authApi = {
   async fetchCategories(token) {
      try {
         const response = await axios.get('/api/categories', {}, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async createCategory(category, token) {
      try {
         const response = await axios.post('/api/categories/create', { category }, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async updateCategory(categoryId, updatedCategory, token) {
      try {
         const response = await axios.post(`/api/categories/update/${categoryId}`, { updatedCategory }, {
            headers: {
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