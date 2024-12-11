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
                    <p className="p-4 text-center w-full max-w-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
                
                <div className="w-full max-w-7xl p-4 flex flex-col items-center">
                    <p className="text-center text-4xl lg:text-5xl mb-4">Key Aspects</p>
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row-reverse items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image1.png" alt="Aspect 1" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image2.png" alt="Aspect 2" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row-reverse items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image1.png" alt="Aspect 3" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="bg-[#04A763] p-8 gap-10 rounded-xl flex flex-row items-center w-full max-w-4xl">
                            <Image src="/key_aspects/image2.png" alt="Aspect 4" width={100} height={100} className="mx-auto" />
                            <p className="mt-4 text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;