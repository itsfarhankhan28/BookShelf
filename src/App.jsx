/* eslint-disable react-refresh/only-export-components */

import './App.css'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import BookSearch from './pages/BookSearch'
import Navbar from './components/Navbar'
import AddBooks from './pages/AddBooks'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<BookSearch/>
      },
      {
        path:'/mybooks',
        element:<AddBooks/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
