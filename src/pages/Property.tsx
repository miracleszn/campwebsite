import NavBar from '@/components/NavBar'
import React from 'react'
import { useParams } from 'react-router-dom'

const Property = () => {

    const { id } = useParams()

  return (
    <div className='h-screen bg-amber-600'>
        <NavBar/>
        <h1>{id}</h1>
    </div>
  )
}

export default Property