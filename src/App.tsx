import React from  'react';
import { BackgroundGradientAnimation } from './components/ui/Background-gradient-animantion';
import { TextGenerateEffect } from './components/ui/Text-generate-effect';
import { FloatingNav } from './components/ui/Floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';

const App: React.FC = () => {
  //for the header
  const headerWords = `T. Augustus Baker`;
  const headerText = `An Afro-American English Teacher living in Cairo`;

  const navItems = [
    {
      name: "Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
    <header>
      <nav className='relative w-full'>
       <FloatingNav navItems={navItems} />
      </nav>
    </header>
    <main className="flex justify-center items-center flex-col h-auto">
      <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <TextGenerateEffect words={headerWords} />
          <TextGenerateEffect words={headerText} />
        </p>
      </div>
      </BackgroundGradientAnimation>
    <section className="text-center w-1/2 border border-blue-800 m-2 mt-28 p-5 shadow-2xl shadow-blue-950 bg-cyan-700 rounded-full">
    <p className="text-white p-5">By day, I'm an <span>English teacher</span> for stage 5. I've worked in the American system; however, for almost 10 years most of my experience has been in the British system using Cambridge International Examination resources.</p>
    <p className='p-5 text-white'>I've enjoyed teaching and cultivating a bond with my students that makes learning fun and enjoyable. With all my strength, I think of fun and innovative ways to deliver the lesson everyday. </p>
    </section>
   
    <section className='border border-black p-5 mt-60 mb-10 grid gap-5 grid-cols-3 grid-rows-3 place-content-around'>
      <h2 className='col-span-3 col-start-2 col-end-3 text-center'>Experience</h2>
    <article className='col-span-1 col-start-1 col-end-2 row-span-1'><h3>2017 - 2019</h3></article>
    <article className='col-pan-1 col-start-3 col-end-4 row-span-1'><h3>2019 - 2021</h3></article>
    <article className='col-span-1 row-span-1 '><h3>2021 - 2022</h3></article>
    <article className='col-span-1 row-span-1 col-start-3 col-end-4'><h3>2023 - now</h3></article>
    </section>
    <section className='border p-5 mt-60 mb-10'>
      <h2>Contact</h2><ul>
      <li>GitHub</li>
      <li>Outlook</li>
      <li>LinkedIn</li>
      <li>Discord</li>
      <li>Reddit</li></ul></section>
    </main>
    </>
  )
}

export default App
