import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layout/Root';
import Home from './components/Home';
import AdvantureDetails from './components/AdvantureDetails';


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
                  element: <AdvantureDetails></AdvantureDetails>,
                  loader: ({params})=> fetch ('/Data.json'),
              },
              {
                  path: '/login',
                  element: <h2>Login</h2>,
              },
              {
                  path: '/regiser',
                  element: <h2>Register</h2>,
              },
          ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
