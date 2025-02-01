'use client'
import React, { useRef } from 'react';
import LandingImage from './_components/LandingImage';
import LandingPage from './_components/LandingPage';
import Navbar from './_components/navbar';
import Solution from './_solution/page';
import TeamPage from './_ourteam/page';
import Investors from './_investors/page';
import Technology from './_technology/page';
import Application from './_application/page';

const App = () => {
  const landingPageRef = useRef(null);
  const solutionRef = useRef(null);
  const applicationRef = useRef(null);
  const technologyRef = useRef(null);
  const teamRef = useRef(null);
  const investorsRef = useRef(null);
  const landingImageRef = useRef(null);

  const sections = {
    landingImage: landingImageRef,
    landingPage: landingPageRef,
    solution: solutionRef,
    application: applicationRef,
    technology: technologyRef,
    team: teamRef,
    investors: investorsRef,
  };

  return (
    <main className="relative">
      <section ref={landingImageRef}>
        <LandingImage />
      </section>
      <div className="sticky top-0 z-50">
        <Navbar sections={sections} />
      </div>
      <section ref={landingPageRef} className="scroll-mt-24 md:scroll-mt-20">
        <LandingPage />
      </section>
      <section ref={solutionRef} className="scroll-mt-24 md:scroll-mt-20">
        <Solution />
      </section>
      <section ref={applicationRef} className="scroll-mt-24 md:scroll-mt-20">
        <Application />
      </section>
      <section ref={technologyRef} className="scroll-mt-24 md:scroll-mt-20">
        <Technology />
      </section>
      <section ref={teamRef} className="scroll-mt-24 md:scroll-mt-20">
        <TeamPage />
      </section>
      <section ref={investorsRef} className="scroll-mt-24 md:scroll-mt-20">
        <Investors />
      </section>
    </main>
  );
};

export default App;