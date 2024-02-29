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
    <main className="flex justify-center items-center flex-col h-auto">
    <section className="text-center w-1/2 border border-blue-800 m-2 mt-28 p-5 shadow-2xl shadow-blue-950 bg-cyan-700 rounded-full">
    <h1 className="p-4 text-white text-4xl">T. Augustus Baker</h1>
    <p className="text-white">By day, I'm an <span>English teacher</span> for stage 5. I've worked in the American system; however, for almost 10 years most of my experience has been in the British system using Cambridge International Examination resources.</p>
    <p className='p-4 text-white'>I've enjoyed teaching and cultivating a bond with my students that makes learning fun and enjoyable. With all my strength, I think of fun and innovative ways to deliver the lesson everyday. </p>
    </section>
    <section className='flex justify-center mt-80 h-80'>
      <Carousel className='m-8 mt-10 w-auto h-auto'>
      <CarouselContent className='p-5'>
        <CarouselItem className='flex flex-col items-center w-10 h-60 mx-5 bg-blue-600 hover:bg-cyan-600 rounded-full text-white justify-center'><h2>BSEE</h2><p>Year 5 English teacher</p><p>Aug 2021 - Jun 2022</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-10 h-60 mx-5 bg-blue-600 hover:bg-cyan-600 rounded-full text-white justify-center'><h2>ISE</h2><p>Grade 2 Homerooom teacher</p><p>Aug 2019 - Jun 2021</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-10 h-60 mx-5 bg-blue-600 hover:bg-cyan-600 rounded-full text-white justify-center'><h2>St. Fatima Schools</h2><p>Aug 2017 - Jun 2019</p><p>Year 4 Homeroom</p><p>Years 1 - 6 English Conversation</p></CarouselItem>
        <CarouselItem className='flex flex-col items-center w-10 h-60 mx-5 bg-blue-600 hover:bg-cyan-600 rounded-full text-white justify-center'><h2>Cenex Zip Trip</h2><p>Assistant Manager</p><p>Oct 2012 - Apr 2015</p></CarouselItem>
        <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
       <CarouselNext />
      </Carousel>
      
    </section>
    <section className='border border-black p-5 mt-60 mb-10 '><h2>Experience</h2></section>
    <section className='border p-5 mt-60 mb-10'><h2>Contact</h2></section>
    </main>
    </>
  )
}

export default App
