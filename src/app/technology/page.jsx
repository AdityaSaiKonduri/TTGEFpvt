import React from 'react'
import Navbar from '../_components/navbar'
import Image from 'next/image'

const page = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col gap-10 md:gap-20 px-4 md:px-8 my-32'>
                    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-10'>
                        <div className='flex items-center justify-center w-full md:w-1/2 h-full'>
                            <img src="/tech_img1.png" alt="IMg" />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left gap-10">
                            <div className='text-4xl flex flex-col'>
                                <span>Energy Flow</span>
                                <span>Iron Flow Chemistry</span>
                            </div>
                            <div className='linespace-md flex flex-col justify-center items-center gap-10'>
                                <span className='text-xl'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rem nisi aspernatur obcaecati. Quaerat sequi accusamus ab illo aspernatur ad. Id dicta illum perspiciatis, ab necessitatibus maiores optio aliquid est nobis sapiente quaerat harum eum deleniti at ea quam ducimus in? Quia labore atque sed necessitatibus nostrum voluptatem, voluptatum voluptates id quasi. Ducimus deserunt laboriosam soluta amet omnis sed illum mollitia odio aliquid rem! Fuga maiores quibusdam incidunt soluta fugiat quasi debitis beatae voluptatem ullam sequi sunt accusamus consequuntur iusto repellat repellendus sint, cupiditate obcaecati illum consequatur! Eum soluta iusto placeat! Perspiciatis debitis totam sit suscipit. Dicta repellat vitae necessitatibus error dolorem iusto laudantium rem cum natus magnam eveniet cumque, provident esse odio deserunt tempore culpa eaque, corrupti aliquam quis ratione quos. Ipsum perferendis autem assumenda ea laboriosam vel dolorem et impedit dolor nam! Praesentium minus repellendus provident itaque dignissimos sed adipisci optio quisquam vero veritatis repudiandae maiores corrupti, incidunt quia illum, cum sint rerum deserunt ipsa omnis aliquid vitae at officia! Vitae sed ex repellendus molestias autem impedit libero magnam omnis cum illum iure aperiam recusandae animi ducimus, exercitationem, consectetur neque ipsum nihil consequuntur quidem saepe! Debitis autem, est quos iste quis consequuntur sint consectetur repellendus minima. Quam, ipsum.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-10 gap-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-[48px] text-center mb-6'>Harnessing Nature, Storing the Future</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-28 justify-center'>
                            <Image src="/image_t1.png" width={200} height={200} alt='Technology image 1' />
                            <Image src="/image_t2.png" width={200} height={200} alt='Technology image 2' />
                            <Image src="/image_t3.png" width={200} height={200} alt='Technology image 3' />
                            <Image src="/image_t4.png" width={200} height={200} alt='Technology image 4' />
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-lg flex justify-center items-center'>
                    {/* <div className='flex items-center justify-center bg-slate-400 rounded-lg w-3/4'>
                    <p>Video</p>
                </div> */}
                    <video src="" controls className='rounded-lg w-3/4 h-auto'></video>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-20'>
                    <div className='bg-[#04A763] flex flex-col justify-center items-center p-12 rounded-xl w-1/2'>
                        <p className='text-4xl'>Eco Friendly & Sustainable</p>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse items-center p-2 mt-3 w-full max-w-7xl gap-10">
                        <div className="flex justify-center p-3 w-full md:w-1/2">
                            <div className="bg-gray-400 w-full h-0 pb-[100%] rounded-lg relative"></div> {/* Grey block as placeholder */}
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
                            <div className="bg-gray-400 w-full h-0 pb-[100%] rounded-lg relative"></div> {/* Grey block as placeholder */}
                        </div>
                        <p className="p-4 text-center w-full max-w-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page;