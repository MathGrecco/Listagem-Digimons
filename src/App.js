import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DigimonDetails from './pages/DigimonDetails'
import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route index path="/" element={<Home />} />
          <Route path="/digimon/:name" element={<DigimonDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
