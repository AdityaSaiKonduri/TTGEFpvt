import React from 'react'
import LandingImage from './_components/LandingImage'
import Dummy from './_components/Dummy'
import Navbar from './_components/navbar'

const page = () => {
  return (
    <main>
      <Navbar/>
      <LandingImage />
      <Dummy />
    </main>
  )
}

export default page