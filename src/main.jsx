import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'; 
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Food from './components/Food';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/> ,
    children:[
      {
        path: '/',
        element: <Home/>, 
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path:'food',
        element: <Food/>,
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish') 
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
