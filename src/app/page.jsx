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

  const sections = {
    landingPage: landingPageRef,
    solution: solutionRef,
    application: applicationRef,
    technology: technologyRef,
    team: teamRef,
    investors: investorsRef,
  };

  return (
    <main>
      <section ref={landingPageRef}>
        <LandingImage />
      </section>
      <Navbar sections={sections} />
      <section ref={landingPageRef}>
        <LandingPage />
      </section>
      <section ref={solutionRef}>
        <Solution />
      </section>
      <section ref={applicationRef}>
        <Application />
      </section>
      <section ref={technologyRef}>
        <Technology />
      </section>
      <section ref={teamRef}>
        <TeamPage />
      </section>
      <section ref={investorsRef}>
        <Investors />
      </section>
    </main>
  );
};

export default App;
