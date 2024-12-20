
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Redirect from './pages/Redirect'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/redirect' element={<Redirect />}/>
        </Routes>
        <Routes>
          <Route path='/journal' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
