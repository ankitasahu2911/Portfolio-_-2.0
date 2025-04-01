import React from 'react';
import AnkitaSahu from '../assets/AnkitaSahu.jpg';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 px-6 py-12 mt-20"
    >
      {/* Updated Heading with Gradient */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-12">
        About Me
      </h2>

      <div className="w-full max-w-5xl bg-neutral-800 shadow-2xl rounded-lg flex flex-col md:flex-row overflow-hidden relative">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-indigo-500">
          <img
            src={AnkitaSahu}
            alt="Ankita Sahu"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 p-8">
          <p className="text-gray-400 mb-6">
            I’m a passionate full-stack developer specializing in crafting dynamic and engaging web
            applications. With expertise in frontend and backend technologies, I transform ideas
            into reality. I enjoy solving complex problems, building intuitive user interfaces,
            and optimizing web applications for performance. Whether it’s developing scalable
            backend systems or creating seamless user experiences, I’m committed to delivering
            high-quality solutions. In my free time, I explore emerging technologies and work on
            side projects to enhance my skills. Collaboration and continuous learning are key
            elements of my journey as a developer.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#follow"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
