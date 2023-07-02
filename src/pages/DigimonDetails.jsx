import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDigimonByName } from '../services/api'

function DigimonDetails() {
  const { name } = useParams()
  const [digimon, setDigimon] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDigimonByName(name)
      if (data) {
        console.log(Array.isArray(data))
        setDigimon(data)
        console.log(digimon)
      }
    }
    fetchData()
  }, [name])

  if (!digimon) {
    return <div className="container">Carregando...</div>
  }

  return (
    <div className="container">
      <h1 className="details-title">Detalhes do Digimon</h1>
      <img className="details-image" src={digimon.img} alt={digimon.name} />
      <div className="details-info">
        <h2>{digimon.name}</h2>
        <p>Level: {digimon.level}</p>
      </div>
    </div>
  )
}

export default DigimonDetails
