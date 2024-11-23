import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter , RouterProvider
} from "react-router-dom"
import Home from './Home'
import Meal from './components/Meal/Meal'
import MealDetails from './components/MealDetails/MealDetails'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : '/meal',
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element : <Meal></Meal>
      },
      {
        path : '/meal/:mealId',
        loader : () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`),
        element : <MealDetails></MealDetails>,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>,
)
