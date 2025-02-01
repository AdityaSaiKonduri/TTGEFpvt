import React from 'react'
import Navbar from '../_components/navbar'
import Image from 'next/image'

const Technology = () => {
    return (
        <main className="overflow-x-hidden">
            {/* <Navbar /> */}
            {/* <div className='invisible'><Navbar /></div> */}
            <h1 className="text-4xl lg:text-6xl font-semibold text-center p-4">Technology</h1>
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col gap-10 md:gap-20 px-4 md:px-8 my-32'>
                    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-10'>
                        {/* <div className='flex items-center justify-center w-full md:w-1/2 h-full'>
                            <img src="/tech_img1.png" alt="IMg" />
                        </div> */}
                        <div className="flex flex-col w-full md:w-3/4 lg:w-3/5 text-center md:text-left gap-10">
                            <div className='text-4xl flex flex-col'>
                                <span>Energy Flow</span>
                                <span>Sulfur - Iron Flow Battery</span>
                            </div>
                            <div className='linespace-md flex flex-col justify-center items-center gap-10'>
                                <span className='text-xl'>
                                    A flow battery is an electrochemical energy storage device. Unlike conventional batteries, the electrolyte, which stores the energy, is kept outside the cell section in liquid form within a tank. The electrolyte is pumped into the cell section during charging or discharging processes. This design allows for the adjustment of the electrolyte volume to modify the battery system&apos;s backup duration.
                                    <br />Flow batteries, with their scalable backup capacity, offer a promising solution. Unlike vanadium-based flow batteries, which rely on expensive and rare materials, our sulfur-iron flow battery utilizes abundant and affordable electrolytes, making it an ideal choice for long-duration storage exceeding 20 hours.                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-10 gap-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-[48px] text-center mb-6'>Harnessing Nature, Storing the Future</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-28 justify-center'>
                            <Image src="/image_t2.png" width={200} height={200} alt='Technology image 2' />
                            <Image src="/image_t4.png" width={200} height={200} alt='Technology image 4' />
                            <Image src="/image_t1.png" width={200} height={200} alt='Technology image 1' />
                            <Image src="/image_t3.png" width={200} height={200} alt='Technology image 3' />
                        </div>
                    </div>
                </div>


                <div className='w-full rounded-lg flex justify-center items-center'>
                    <div className="relative w-3/5" style={{ paddingBottom: '35%' }}>
                        <iframe
                            src="https://www.youtube.com/embed/yKhfsODlTaI"
                            title="YouTube video player"
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>




                {/* <div className='w-full flex flex-col items-center justify-center gap-20'>
                    <div className='bg-[#04A763] flex flex-col justify-center items-center p-12 rounded-xl w-1/2'>
                        <p className='text-4xl'>Eco Friendly & Sustainable</p>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse items-center p-2 mt-3 w-full max-w-7xl gap-10">
                        <div className="flex justify-center p-3 w-full md:w-1/2">
                            <div className="bg-gray-400 w-full h-0 pb-[100%] rounded-lg relative"></div>
                        </div>
                        <p className="p-4 text-center w-full max-w-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='bg-[#04A763] flex flex-col justify-center items-center p-12 rounded-xl w-1/2'>
                        <p className='text-4xl'>Built for Safety And Stability</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center p-2 mt-3 w-full max-w-7xl gap-10">
                        <div className="flex justify-center p-3 w-full md:w-1/2">
                            <div className="bg-gray-400 w-full h-0 pb-[100%] rounded-lg relative"></div>
                        </div>
                        <p className="p-4 text-center w-full max-w-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div> */}
            </div>
        </main>
    )
}

export default Technology;