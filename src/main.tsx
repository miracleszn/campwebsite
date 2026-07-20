import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import SignUpVerify from './pages/SignUpVerify.tsx'
import Home from './pages/Home.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Property from './pages/Property.tsx'
import Login from './pages/Login.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path:"/", element:<App/> },
  { path:"/login", element:<Login/>},
  { path:"/signup", element:<SignUp/>},
  { path:"/verifyOTP", element:<SignUpVerify/>},
  { path:"/home", element:<Home/>},
  { path:"/home/listing/:id", element:<Property/>},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)



