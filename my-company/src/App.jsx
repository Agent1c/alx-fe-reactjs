import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import ErrorHandle from './error-page'

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Create path.
const router = createBrowserRouter([
  { path: "/", 
    element: <Home />,
    errorElement: <ErrorHandle />
   },
  { path: "pages/about", element: <About /> },
  { path: "pages/services", element: <Services /> },
  { path: "pages/contact", element: <Contact /> },

])


function App() {

  return (
    <>
      <RouterProvider router={router} />
      {/* </RouterProvider> */}

    </>
  )
}

export default App
