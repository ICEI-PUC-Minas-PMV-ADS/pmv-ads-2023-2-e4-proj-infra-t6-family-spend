import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Spending from './pages/Spending';
import NewFamilyMember from './pages/NewFamilyMember';
import NewSpend from './pages/NewSpend';
import Spend from './pages/Spend';
import Family from './pages/Family';
import NewFamily from './pages/NewFamily';
import FinalizarCadastro from './pages/FinalizarCadastro';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/spending",
      element: <Spending/>,
    },
    {
      path: "/CreateFamilyMember",
      element: <NewFamilyMember/>,
    },
    {
      path: "/NewSpend",
      element: <NewSpend/>,
    },
    {
      path: "/importar",
      element: <useAxios/>,
    },
    {
      path: "/spend",
      element: <Spend/>,
    },
    {
      path: "/family",
      element: <Family/>,
    },
    {
      path: "/newFamily",
      element: <NewFamily/>,
    },
    {
      path: "/finalizarCadastro",
      element: <FinalizarCadastro/>,
    }
  ]
);

export default router;