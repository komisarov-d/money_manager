import { useCallback } from "react"

export const useMessage = () => {
   return useCallback((message) => {
      if (message && window.M) {
         window.M.toast({ html: message })
      }
   }, [])
}