import React from  'react';

const App: React.FC = () => {
  

  return (
    <>
    <header>

      <nav>
        <ul className='p-5 m-5 flex justify-evenly'>
          <li className="border p-4 shadow-2xl rounded-full bg-cyan-700 text-white">About me</li>
          <li className="border p-4 shadow-2xl rounded-full bg-cyan-700 text-white">Experience</li>
          <li className="border p-4 shadow-2xl rounded-full bg-cyan-700 text-white">Contact</li>
        </ul>
      </nav>
    </header>
    <main className="flex justify-center">
    <section className="text-center w-1/2 border border-blue-800 m-2 p-5 shadow-2xl shadow-blue-950 bg-cyan-700">
    <h1 className="p-4">T. Augustus Baker</h1>
    <p>By day, I'm an <span>English teacher</span> for stage 5. I've worked in the American system; however, most of my experience is in the British system using Cambridge International Examination resources.</p>
    <p className='p-4'>I've enjoyed teaching and cultivating a bond with my students that makes learning fun and enjoyable. With all my strength, I think of fun and innovative ways to deliver the lesson everyday. </p>
    </section>
    </main>
    </>
  )
}

export default App
