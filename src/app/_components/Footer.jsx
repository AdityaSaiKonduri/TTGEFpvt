import Image from 'next/image';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bg-[#6EB6FF] flex flex-col justify-center items-center gap-10 h-auto p-5">
                <p className="font-bold text-2xl">We look forward to meeting you</p>
                <div className="flex flex-row justify-center items-center gap-64 p-5">
                    <Image src="/footer_dial.png" width={80} height={80} alt="Call" />
                    <Image src="/footer_mail.png" width={80} height={80} alt="Mail" />
                    <Image src="/footer_linkedin.png" width={80} height={80} alt="LinkedIn" />
                </div>
            </div>
            <div className="bg-[#000000] h-auto flex flex-row justify-between gap-3 p-4">
                <div className="flex items-center justify-center p-3">
                    {/* <Image src="/next.svg" width={100} height={100} alt="Logo" /> */}
                    <p className="text-white text-xl">LOGO</p>
                </div>
                <div>
                    <p className="text-white text-xl font-bold mb-3">Address</p>
                    <p className="text-white w-36">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <p className="text-white text-xl font-bold mb-3">Incubated By</p>
                    <p className="text-white w-36">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;