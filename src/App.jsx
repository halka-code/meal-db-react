import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <div className="App w-[90%] mx-auto">
     {/* <h1 className='btn btn-primary'>Hello World</h1> */}
     <NavBar/>
     <Home></Home>
    </div>
  )
}

export default App
