import React from  'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const App: React.FC = () => {
  

  return (
    <>
    <header>
      <nav>
        <ul className='p-5 m-5 flex justify-end border shadow-2xl rounded-full bg-cyan-700'>
          <li className="text-white px-4">About Me</li>
          <li className="text-white px-4">Experience</li>
          <li className="text-white px-4">Contact</li>
        </ul>
      </nav>
    </header>
    <main className="flex justify-center items-center flex-col">
    <section className="text-center w-1/2 border border-blue-800 m-2 p-5 shadow-2xl shadow-blue-950 bg-cyan-700">
    <h1 className="p-4 text-white text-4xl">T. Augustus Baker</h1>
    <p className="text-white">By day, I'm an <span>English teacher</span> for stage 5. I've worked in the American system; however, most of my experience is in the British system using Cambridge International Examination resources.</p>
    <p className='p-4 text-white'>I've enjoyed teaching and cultivating a bond with my students that makes learning fun and enjoyable. With all my strength, I think of fun and innovative ways to deliver the lesson everyday. </p>
    </section>
    <section className='flex justify-center'>
      <Carousel className='m-8 mt-10 w-2/3 h-auto'>
      <CarouselContent className='border p-5 border-cyan-400'>
        <CarouselItem className='flex flex-col items-center w-1/2'><h2>BSEE</h2><p>Year 5 English teacher</p><p>Aug 2021 - Jun 2022</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-1/2'><h2>ISE</h2><p>Grade 2 Homerooom teacher</p><p>Aug 2019 - Jun 2021</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-1/2'><h2>St. Fatima Schools</h2><p>Aug 2017 - Jun 2019</p><p>Year 4 Homeroom</p><p>Years 1 - 6 English Conversation</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-1/2'><h2>Cenex Zip Trip</h2><p>Assistant Manager</p><p>Oct 2012 - Apr 2015</p></CarouselItem>
        <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
       <CarouselNext />
      </Carousel>
    </section>
    </main>
    </>
  )
}

export default App
