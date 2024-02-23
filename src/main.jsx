import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Lyrics from './pages/lyrics/Lyrics.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'lyrics',
    element: <Lyrics />
  }
])

import { VarProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VarProvider>
      <RouterProvider router={route}> <App /> </RouterProvider>
    </VarProvider>
  </React.StrictMode>
)