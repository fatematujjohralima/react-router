import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Component/Home/Home.jsx'
import Laptop from './Component/Laptop/Laptop.jsx'
import Mobiles from './Component/Mobiles/Mobiles.jsx'
import Root from './Component/Root/Root.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:'laptop', Component: Laptop},
      {path:'mobiles', Component: Mobiles},
      
    ]
  },

  {
    path: '/home',
    element:<Home></Home>
  },
  
  {
    path: '/laptop',
    element: <Laptop></Laptop>
  },

  {
    path: '/mobiles',
    element: <Mobiles></Mobiles>
  }
])


// createBrowserRouter([
//   {
//     path: "/root",
//     Component: Dashboard,
//     children: [
//       { index: true, Component: Home },
//       { path: "settings", Component: Settings },
//     ],
//   },
// ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
