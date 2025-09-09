import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Learn from './pages/Learn'
import LanguageSelector from './components/LanguageSelector'
import Navbar from './components/Navbar'
import About from './pages/About'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import Result from './pages/Result'


const router=createBrowserRouter([
  {
    path:'/',
    element:<>
    <Navbar />
    <LanguageSelector />
    </>
  },
  {
    path:'/learn',
    element:<>
    <Navbar />
    <Learn />
    </>
  },
  {
    path:'/about',
    element:<>
    <Navbar />
    <About />
    </>
  },
  {
    path:'/about',
    element:<>
    <Navbar />
    <About />
    </>
  },
   {
    path:'/quiz',
    element:<>
    <Navbar />
    <Quiz />
    </>
  },
  {
    path:'/result',
    element:<>
    <Navbar />
    <Result />
    </>
  },
  {
    path:'/login',
    element:<Login />
  },
])
function App() {

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
