import style from './App.module.scss';
import { useRouter } from './router';


export const App = () => {
   const router = useRouter(false)

   return (
      { router }
   )
}
