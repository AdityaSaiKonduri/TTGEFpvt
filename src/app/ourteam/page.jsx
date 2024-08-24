import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import team_data from './data'
import Image from 'next/image'
import Navbar from '../_components/navbar'

const TeamPage = () => {
  return (
    <div className="bg_team_gradient">
      <Navbar />
      <p className="text-center font-extrabold justify-center p-4 mt-4 xs:text-3xl sm:text-5xl lg:text-7xl">Meet Our Team</p>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          {team_data.slice(0, 2).map((team, index) => (
            <Card key={team.name} className="col-span-1 bg_team_card">
              <CardContent>
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex items-center rounded-md">
                    <Image
                      src="/next.svg"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.designation}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col">
                      <div className="flex flex-row gap-4 p-2">
                        <Image src="/dial_small.png" alt="Call" width={20} height={5} />
                        <a href={`tel:${team.phone_number}`} className="block">{team.phone_number}</a>
                      </div>
                      <div className="flex flex-row gap-4 p-2">
                        <Image src="/mail_small.png" alt="Call" width={30} height={5} />
                        <a href={`mailto:${team.email}`} className="block">{team.email}</a>
                      </div >
                    </CardFooter>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Middle centered card */}
          <Card key={team_data[2].name} className="col-span-1 md:col-span-2 mx-auto max-w-md w-full bg_team_card">
            <CardContent>
              <div className="flex flex-row justify-between gap-2">
                <div className="flex items-center rounded-md">
                  <Image
                    src="/next.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>{team_data[2].name}</CardTitle>
                    <CardDescription>{team_data[2].designation}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col">
                    <div className="flex flex-row gap-4 p-2">
                      <Image src="/dial_small.png" alt="Call" width={20} height={5} />
                      <a href={`tel:${team_data[2].phone_number}`} className="block">{team_data[2].phone_number}</a>
                    </div>
                    <div className="flex flex-row gap-4 p-2">
                      <Image src="/mail_small.png" alt="Call" width={30} height={5} />
                      <a href={`mailto:${team_data[2].email}`} className="block">{team_data[2].email}</a>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </CardContent>
          </Card>

          {team_data.slice(3, 5).map((team, index) => (
            <Card key={team.name} className="col-span-1 bg_team_card">
              <CardContent>
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex items-center rounded-md">
                    <Image
                      src="/next.svg"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.designation}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col">
                      <div className="flex flex-row gap-4 p-2">
                        <Image src="/dial_small.png" alt="Call" width={20} height={5} />
                        <a href={`tel:${team.phone_number}`} className="block">{team.phone_number}</a>
                      </div>
                      <div className="flex flex-row gap-4 p-2">
                        <Image src="/mail_small.png" alt="Call" width={30} height={5} />
                        <a href={`mailto:${team.email}`} className="block">{team.email}</a>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
