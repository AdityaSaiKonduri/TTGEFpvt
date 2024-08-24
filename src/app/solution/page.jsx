import React from 'react'
import Navbar from '../_components/navbar'
import Image from 'next/image'

const Solution = () => {
    return (
        <div className="flex flex-col min-h-screen bg_team_gradient">
            <Navbar />
            <h1 className="text-4xl lg:text-6xl font-semibold text-center p-4">OUR SOLUTION</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row justify-center items-center sm:justify-between p-2 mt-3 w-full max-w-7xl">
                    <div className="flex justify-center sm:justify-start p-3">
                        <Image src="/solar.png" alt="Solution" width={500} height={500} className="max-w-full h-auto" />
                    </div>
                    <p className="text-center sm:text-left flex items-center sm:items-start sm:text-4xl text-2xl mt-4 sm:mt-0">
                        Why EnergyFlow?
                    </p>
                </div>
                <p className="p-4 sm:text-left w-full max-w-7xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>
                <div className="w-full max-w-7xl p-4">
                    <p className="text-left text-4xl lg:text-5xl mb-4">Key Aspects</p>
                    <div className="space-y-4">
                        <div className="bg-[#d4fbc0] p-4 flex items-center lg:w-4/5 lg:float-left w-full">
                            <Image src="/key_aspects/image1.png" alt="Aspect 1" width={100} height={100} className="mx-auto lg:mx-0" />
                            <div className="flex-grow ml-4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#d4fbc0] p-4 flex items-center lg:w-3/5 lg:float-right w-full">
                            <div className="flex-grow mr-4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <Image src="/key_aspects/image2.png" alt="Aspect 2" width={100} height={100} className="mx-auto lg:mx-0" />
                        </div>
                        <div className="bg-[#d4fbc0] p-4 flex items-center lg:w-4/5 lg:float-left w-full">
                            <Image src="/key_aspects/image1.png" alt="Aspect 3" width={100} height={100} className="mx-auto lg:mx-0" />
                            <div className="flex-grow ml-4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#d4fbc0] p-4 flex items-center lg:w-3/5 lg:float-right w-full">
                            <div className="flex-grow mr-4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <Image src="/key_aspects/image2.png" alt="Aspect 4" width={100} height={100} className="mx-auto lg:mx-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution
