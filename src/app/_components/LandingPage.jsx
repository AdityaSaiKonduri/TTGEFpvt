import React from 'react'
import Navbar from './navbar'

const LandingPage = () => {
  return (
    <main className="h-screen bg_custom_gradient">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-32">
        <p className="text-5xl">
          About Us
        </p>
        <p className="w-1/2 mt-10">
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.
        </p>
      </div>
    </main>
  )
}

export default LandingPage