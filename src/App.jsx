import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App ">
     {/* <h1 className='btn btn-primary'>Hello World</h1> */}
     <NavBar/>
     <Outlet/>
    </div>
  )
}

export default App
