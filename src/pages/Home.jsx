import React from 'react'
import Header from '../component/Header'
import ComidaRecomendada from '../component/ComidaRecomendada'
import Servicios from '../component/Servicios'
import NuevaComida from '../component/NuevaComida'
import Servicios2 from '../component/Servicios2'
const Home = () => {
  return (
    <div>
        <Header />
        <ComidaRecomendada />
        <Servicios />
        <NuevaComida />
        <Servicios2 />
    </div>
  )
}

export default Home