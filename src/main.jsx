import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'; 
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Food from './components/Food';
import UseApi from './HandelApi';
// import { dataApi } from './HandelApi'; 
// console.log(()=>UseApi);
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
        path:'food/:search',
        element: <Food/>,
        loader:async ({ params }) => UseApi(params.search)
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
