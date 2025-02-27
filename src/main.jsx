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
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
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
        {
          path: '/profile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        },
        {
          path: '/update-profile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
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
