import React from 'react';
import AnkitaSahu from '../assets/AnkitaSahu.jpg';
// import resumePDF from '../assets/Ankita_Sahu_Resume.pdf'; // Add your resume file here

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-neutral-900 text-white relative overflow-hidden mt-20"
    >
      {/* Background Glow Animation */}
      <div
        className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse"
        style={{ top: '-10%', left: '-10%' }}
      ></div>
      <div
        className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse"
        style={{ bottom: '-10%', right: '-10%' }}
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 p-6">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Hey, I'm Ankita!
          </h1>
          <h2 className="text-3xl mb-4">Full-Stack Developer & Tech Enthusiast</h2>
          <p className="text-gray-400 mb-6">
            Crafting seamless digital experiences with lines of code. From frontend magic to backend logic, I bring
            ideas to life.
          </p>
          {/* Resume Button */}
          <a
  href="/Ankita_Sahu_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 hover:bg-purple-700 py-3 px-8 rounded-full text-white font-bold transition-transform transform hover:scale-105"
>
  Download Resume
</a>

        </div>

        {/* Image Section with Orbiting Icons */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-indigo-600 shadow-lg relative animate-spin-slow">
            <img src={AnkitaSahu} alt="Ankita Sahu" className="w-full h-full object-cover" />
            {/* Orbiting Icons */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-md animate-orbit-1">
              💻
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md animate-orbit-2">
              🚀
            </div>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-md animate-orbit-3">
              🌐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
