import React from 'react';
import Navbar from '../_components/navbar';
import Image from 'next/image';

const Solution = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <h1 className="text-4xl lg:text-6xl font-semibold text-center p-4">OUR SOLUTION</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center p-2 mt-3 w-full max-w-7xl gap-10">
                    <div className="flex justify-center p-3">
                        <Image src="/solar.png" alt="Solution" width={500} height={500} className="max-w-full h-auto" />
                    </div>
                    <p className="p-4 text-start w-full max-w-2xl">
                        <span className='text-3xl font-semibold'>Why Energy Flow ?</span><br /> <br />
                        <span className='text-xl'>Long-duration energy storage is crucial for accelerating the adoption of renewables. Flow batteries are emerging as a promising solution for meeting long-duration storage needs. A key advantage of our approach is the use of abundant and affordable electrolytes, making our Sulfur Iron Flow battery an attractive option for long-duration storage. We are currently commercializing this innovative technology.</span>
                    </p>
                </div>

                <div className="w-full max-w-7xl p-4 flex flex-col items-center">
                    <p className="text-center text-4xl lg:text-5xl mb-4">Key Aspects</p>
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row-reverse items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image1.png" alt="Aspect 1" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center text-lg font-medium">
                                <span className='font-semibold text-xl block mb-4'>Long and Scalable Backup</span>
                                In a fully redox flow battery, the backup duration can be increased simply by scaling up the electrolyte volume alone, without requiring any corresponding scaling of the battery stack.
                            </p>
                        </div>
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image2.png" alt="Aspect 2" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center text-lg font-medium">
                                <span className='font-semibold text-xl block mb-4'>Safety</span>
                                Flow batteries are inherently safe and do not pose a risk of fire or thermal runaway.
                            </p>
                        </div>
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row-reverse items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image1.png" alt="Aspect 3" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center text-lg font-medium">
                                <span className='font-semibold text-xl block mb-4'>Sustainable and Affordable</span>
                                Our product leverages sulfur and iron-based electrolytes, which are naturally abundant and contribute to a more sustainable energy storage solution. By avoiding the use of rare earth metals like lithium and vanadium, we reduce the environmental impact associated with extensive mining activities. Furthermore, our affordable electrolyte makes our flow battery one of the most economical options for applications requiring backup durations exceeding 20 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;