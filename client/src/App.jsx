import { BrowserRouter } from 'react-router-dom';
import { useRouter } from './router';
import 'materialize-css'
import { useSelector } from 'react-redux';

export const App = () => {
   const isAuth = useSelector(state => state.auth.isAuth)
   const router = useRouter(isAuth)

   return (
      <BrowserRouter>
         { router}
      </BrowserRouter>

   )
}
