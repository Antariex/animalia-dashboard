import React from 'react'
import Loading from '../components/Loading'
import ResumeCard from '../components/ResumeCard'
import { useCustomFetch } from '../hooks/useCustomFetch'

const WelcomePage = () => {
  let {data,isLoading,hasErrors} = useCustomFetch('http:localhost:3000/api/info')
  //SE QUITAN DATOS DE RELLENO. FALTA CORREGIR CONSUMO DE API PROPIA (AUN NO FUNCIONA)
  return (
    <div className='container'>
      <h2>Administración</h2>
      
      <div className='resume-card__container'>
        {
          isLoading ? 
            (
              <Loading />
            )
            :
            (
              <ResumeCard value={data}/>
            )
        }
      </div>
    </div>
  )
}

export default WelcomePage