import { BrowserRouter } from 'react-router-dom';
import { useRouter } from './router';
import 'materialize-css'

export const App = () => {
   const router = useRouter(true)

   return (
      <BrowserRouter>
         { router}
      </BrowserRouter>

   )
}
