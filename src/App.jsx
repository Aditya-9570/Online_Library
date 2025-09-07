import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Body from './Components/Body'

function App() {
  return (
   <div>
 <Body/>
 <Outlet/>
   </div> 
  )
}

export default App
