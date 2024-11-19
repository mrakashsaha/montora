import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layout/Root';
import Home from './components/Home';
import AdvantureDetails from './components/AdvantureDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    // errorElement: <h1>EROOR</h1>, 
    children:
      [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/adventure/:id',
          element: <PrivateRoute><AdvantureDetails></AdvantureDetails></PrivateRoute>,
          loader: ({ params }) => fetch('/Data.json'),
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <SignUp></SignUp>,
        },
      ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
