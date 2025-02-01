"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    // const [visitorCount, setVisitorCount] = useState(0);

    // useEffect(() => {
    //     const storedCount = localStorage.getItem('visitorCount');
    //     const count = storedCount ? parseInt(storedCount, 10) + 1 : 1;
    //     setVisitorCount(count);
    //     localStorage.setItem('visitorCount', count.toString());
    // }, []);

    const date = new Date();
    const year = date.getFullYear();

    return (
        <main className="flex flex-col mt-20">
            <div className="bg-white flex flex-col md:flex-row justify-between items-start py-4 px-10 gap-10">
                <div className="text-center w-full md:w-1/4 flex flex-col">
                    <h1 className="text-4xl mb-6 lg:mb-10">Incubated By</h1>
                    <p className='my-3'>
                        MaDeIT Innovation Foundation, 3rd floor Laboratory complex, IIITDM Kancheepuram, Melakkottiyur, Kandigai, Chennai, Tamilnadu, India-600127.
                    </p>
                    <p className='my-3'>
                        Clean Energy International Incubation Centre, TATA Power - DDL, Smart Grid lab, Sector 15, Rohini, New Delhi, India - 110085.
                    </p>
                </div>
                <div className="text-center w-full md:w-1/3 flex flex-col gap-6 md:gap-10">
                    <h1 className="text-4xl">Address</h1>
                    <p>
                        306 J J Nagar Iyyangarkulam-Kancheepuram,<br /> Tamil Nadu, India - 631502.
                    </p>
                </div>
                <div className="text-center w-full md:w-1/5 flex flex-col gap-6 md:gap-10">
                    <h1 className="text-4xl">Contact Us</h1>
                    <p className="flex flex-row gap-4 text-xl items-center justify-center text-center">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.272 1.68311C10.7456 0.41168 9.35799 -0.265049 8.03187 0.0972402L2.01651 1.73779C0.827112 2.0659 0 3.14593 0 4.37635C0 21.2877 13.7123 35 30.6236 35C31.8541 35 32.9341 34.1729 33.2622 32.9835L34.9028 26.9681C35.265 25.642 34.5883 24.2544 33.3169 23.728L26.7547 20.9938C25.6405 20.529 24.3485 20.8502 23.5898 21.7867L20.8282 25.1567C16.0159 22.8804 12.1196 18.9841 9.84332 14.1718L13.2133 11.4171C14.1498 10.6515 14.471 9.36636 14.0062 8.25216L11.272 1.68994V1.68311Z" fill="black" />
                        </svg>
                        <span>+91 9629205600</span>
                    </p>
                    <Link href={"mailto:umesh@energyflow.co.in"} target='_blank'>
                        <p className="flex flex-row gap-4 text-md lg:text-xl items-center justify-center text-center">
                            <svg className="w-[35px] h-[35px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                            </svg>
                            <span>umesh@energyflow.co.in</span>
                        </p>
                    </Link>
                    <Link href={"https://www.linkedin.com/company/tharam-thiram-green-energy-flow-llp/?viewAsMember=true"} target='_blank'>
                        <p className="flex flex-row gap-4 text-xl items-center justify-center text-center">
                            <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.5 0.1875H2.49219C1.11719 0.1875 0 1.17871 0 2.39552V28.6045C0 29.8213 1.11719 30.8125 2.49219 30.8125H32.5C33.875 30.8125 35 29.8213 35 28.6045V2.39552C35 1.17871 33.875 0.1875 32.5 0.1875ZM10.5781 26.4375H5.39061V11.8223H10.5859V26.4375H10.5781ZM7.98438 9.82615C6.3203 9.82615 4.97656 8.64354 4.97656 7.19432C4.97656 5.74511 6.3203 4.5625 7.98438 4.5625C9.64062 4.5625 10.9922 5.74511 10.9922 7.19432C10.9922 8.65041 9.64845 9.82615 7.98438 9.82615ZM30.0234 26.4375H24.836V19.3281C24.836 17.6328 24.7969 15.4521 22.1406 15.4521C19.4375 15.4521 19.0234 17.2979 19.0234 19.2051V26.4375H13.8359V11.8223H18.8125V13.8183H18.8828C19.5781 12.6699 21.2734 11.46 23.7969 11.46C29.0469 11.46 30.0234 14.4883 30.0234 18.4258V26.4375Z" fill="black" />
                            </svg>
                            <span>LinkedIn</span>
                        </p>
                    </Link>
                    {/* <span className="text-xl">Number of visitors: {visitorCount}</span> */}
                </div>
            </div>
            <div className="bg-[#04A763] p-8 flex md:flex-row flex-col gap-8 md:gap-0 w-full text-center items-center">
                {/* <img src="/logo.png" alt="Logo" className='w-36' /> */}

                <div className="flex-col flex-1 text-xl">
                    <p>&copy; Copyright {year}</p>
                    <p>Tharam Thiran Green Energy Flow Private Limited</p>
                </div>
            </div>


        </main>
    );
};

export default Footer;

