/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/20 pb-20">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <BentoGrid />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
