import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className="bg-[#f8d9fd] h-[100vh]">
      <RouterProvider router={routes}></RouterProvider>
    </div>
    
  </StrictMode>,
)
