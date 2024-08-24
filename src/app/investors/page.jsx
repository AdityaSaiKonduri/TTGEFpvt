import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/navbar';

const Investors = () => {
  return (
    <main className="flex flex-col min-h-screen bg_team_gradient">
        <div>
        <Navbar/>
        </div>
      <div className="flex flex-col min-h-screen">
        <p className="flex items-center justify-center mt-10 text-3xl">Our Investors</p>
        <div className="flex justify-center mt-5">
          <Image src="/investors.png" alt="Investors" width={1000} height={100} className="z-10 p-5" />
        </div>
        <p className="flex items-center justify-center mt-10 text-3xl">Long Term Plan</p>
        <div className="flex items-center justify-center">
        <Image src="/long_term_plan.png" alt="Long_term_Plan" width={1000} height={100} className="z-10 p-5" />  
        </div>
        <p className="flex items-center justify-center mt-10 text-3xl">Why invest on us?</p>
        <div className="flex items-center justify-center">
        <Image src="/why_invest_on_us.png" alt="why_invest_on_us" width={1000} height={100} className="z-10 p-5" />
        </div>
      </div>
        
    </main>
  );
};

export default Investors;
