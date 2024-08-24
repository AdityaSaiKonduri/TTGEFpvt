import React from 'react'
import Navbar from '../_components/navbar'
import Image from 'next/image'

const page = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <div className='flex flex-col gap-10 md:gap-20 px-4 md:px-8 my-32'>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-10'>
                    <div className='flex items-center justify-center w-full md:w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-gray-500'>
                        {/* image content */}
                    </div>
                    <div className="text-center md:text-left">
                        <div className='text-3xl md:text-4xl lg:text-[56px] linespace-md flex flex-col justify-center items-center gap-5'>
                            <span>Energy Flow</span>
                            <span>Iron Flow Chemistry</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 gap-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-[48px] text-center mb-6'>Harnessing Nature, Storing the Future</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-28'>
                        <Image src="/image_t1.png" width={200} height={200} alt='Technology image 1' />
                        <Image src="/image_t2.png" width={200} height={200} alt='Technology image 2' />
                        <Image src="/image_t3.png" width={200} height={200} alt='Technology image 3' />
                        <Image src="/image_t4.png" width={200} height={200} alt='Technology image 4' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center p-5">
                    <div className="md:w-1/2 mb-6 md:mb-0 order-1">
                        <Image
                            src="/application.png"
                            alt="Grid Stabilization"
                            width={400}
                            height={100}
                            className="w-full max-w-md mx-auto h-auto object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 order-2">
                        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2> */}
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center p-5">
                    <div className="md:w-1/2 mb-6 md:mb-0 order-1">
                        <Image
                            src="/application.png"
                            alt="image"
                            width={400}
                            height={100}
                            className="w-full max-w-md mx-auto h-auto object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Eco Friendly and Sustainable:</h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center p-5">
                    <div className="md:w-1/2 mb-6 md:mb-0 order-1">
                        <Image
                            src="/application.png"
                            alt="image"
                            width={400}
                            height={100}
                            className="w-full max-w-md mx-auto h-auto object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Safety and Sustainability</h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default page