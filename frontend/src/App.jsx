import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Header from './Components/Header.jsx'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>

    </Router>
    <ToastContainer />
    </>
  )
}

export default App
