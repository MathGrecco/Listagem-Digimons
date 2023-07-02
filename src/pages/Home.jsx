import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchDigimons } from '../services/api'

function Home() {
  const [digimons, setDigimons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDigimons()
      data && setDigimons(data)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <h1 className="home-title">Lista de Digimons</h1>
      <ul className="home-list">
        {digimons &&
          digimons.map((digimon, index) => (
            <li className="home-item" key={index}>
              <Link className="home-link" to={`/digimon/${digimon.name}`}>
                {digimon.name} - {digimon.level}
              </Link>
            </li>
          ))}
      </ul>
      <Link to="/digimon-details" className="btn">
        Ir para Detalhes do Digimon
      </Link>
    </div>
  )
}

export default Home
