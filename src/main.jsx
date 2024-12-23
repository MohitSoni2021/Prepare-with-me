import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPageComponent from './Components/LandingPage/LandingPage.jsx'
import QuizDashboardPageLayout from './Components/QuizDashboard/QuizDashboardPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageComponent />
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/datadashboard',
    element: <QuizDashboardPageLayout />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
