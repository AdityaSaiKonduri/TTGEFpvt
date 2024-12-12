import React from 'react'
import team_data from './data'
import Image from 'next/image'
import Navbar from '../_components/navbar'

const TeamPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className='mt-5 flex flex-col justify-center text-center items-center pb-10 w-full'>
        <div className='text-5xl py-5'>
          Meet Our Team
        </div>

        <div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 px-5 md:px-10 pb-10'>
          <div className='flex flex-col items-center w-full md:w-1/2'>
            <div className='h-64 w-64 lg:h-96 lg:w-96  rounded-3xl'>
            <img src="/people/shan_Dec24.jpeg" alt="Application" srcset="" className="w-full h-full"/>
            </div>
            <div className='text-xl md:text-2xl mt-5'>
              <p>
                {team_data[0].name}
              </p>
              <p>
                {team_data[0].designation}
              </p>
              <div className='flex justify-center items-center gap-2'>
                <Image src="/dial_small.png" alt="Call" width={20} height={20} />
                <span>{team_data[0].phone_number}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={`mailto:${team_data[0].email}`} target="_blank" className="flex items-center gap-2">
                  <Image src="/mail_small.png" alt="Mail" width={30} height={20} />
                  <span>{team_data[0].email}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full md:w-1/2'>
            <div className='h-64 w-64 lg:h-96 lg:w-96 rounded-3xl'>
            <img src="/people/umesh_Dec24.jpeg" alt="Application" srcset="" className="w-full h-full"/>
            </div>
            <div className='text-xl md:text-2xl mt-5'>
              <p>
                {team_data[1].name}
              </p>
              <p>
                {team_data[1].designation}
              </p>
              <div className='flex justify-center items-center gap-2'>
                <Image src="/dial_small.png" alt="Call" width={20} height={20} />
                <span>{team_data[1].phone_number}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={`mailto:${team_data[1].email}`} target="_blank" className="flex items-center gap-2">
                  <Image src="/mail_small.png" alt="Mail" width={30} height={20} />
                  <span>{team_data[1].email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 px-5 md:px-10 pb-10'>
          <div className='flex flex-col items-center w-full'>
            <div className='h-64 w-64 lg:h-96 lg:w-96 rounded-3xl'>
            <img src="/application.png" alt="Application" srcset="" className="w-full h-full"/>
            </div>
            <div className='text-xl md:text-2xl mt-5'>
              <p>
                {team_data[2].name}
              </p>
              <p>
                {team_data[2].designation}
              </p>
              <div className='flex justify-center items-center gap-2'>
                <Image src="/dial_small.png" alt="Call" width={20} height={20} />
                <span>{team_data[2].phone_number}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={`mailto:${team_data[2].email}`} target="_blank" className="flex items-center gap-2">
                  <Image src="/mail_small.png" alt="Mail" width={30} height={20} />
                  <span>{team_data[2].email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 px-5 md:px-10'>
          <div className='flex flex-col items-center w-full md:w-1/2'>
            <div className='h-64 w-64 lg:h-96 lg:w-96  rounded-3xl'>
            <img src="/application.png" alt="Application" srcset="" className="w-full h-full"/>
            </div>
            <div className='text-xl md:text-2xl mt-5'>
              <p>
                {team_data[3].name}
              </p>
              <p>
                {team_data[3].designation}
              </p>
              <div className='flex justify-center items-center gap-2'>
                <Image src="/dial_small.png" alt="Call" width={20} height={20} />
                <span>{team_data[3].phone_number}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={`mailto:${team_data[3].email}`} target="_blank" className="flex items-center gap-2">
                  <Image src="/mail_small.png" alt="Mail" width={30} height={20} />
                  <span>{team_data[3].email}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full md:w-1/2'>
            <div className='h-64 w-64 lg:h-96 lg:w-96  rounded-3xl'>
            <img src="/application.png" alt="Application" srcset="" className="w-full h-full"/>
            </div>
            <div className='text-xl md:text-2xl mt-5'>
              <p>
                {team_data[4].name}
              </p>
              <p>
                {team_data[4].designation}
              </p>
              <div className='flex justify-center items-center gap-2'>
                <Image src="/dial_small.png" alt="Call" width={20} height={20} />
                <span>{team_data[4].phone_number}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link href={`mailto:${team_data[4].email}`} target="_blank" className="flex items-center gap-2">
                  <Image src="/mail_small.png" alt="Mail" width={30} height={20} />
                  <span>{team_data[4].email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TeamPage
