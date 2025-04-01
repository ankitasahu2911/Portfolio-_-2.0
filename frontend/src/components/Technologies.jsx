import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs, FaNode } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';

const Technologies = () => {
  return (
    <div id='skills' className="border-b border-neutral-900 pb-24">
      {/* Updated Heading with Gradient */}
      <h2 className="my-20 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
        Technologies I Work With
      </h2>

      <p className="text-center text-gray-400 mb-12">A curated set of tools and technologies that power my projects.</p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          { icon: <SiHtml5 className="text-7xl text-orange-500" />, name: 'HTML5' },
          { icon: <SiCss3 className="text-7xl text-blue-500" />, name: 'CSS3' },
          { icon: <SiJavascript className="text-7xl text-yellow-400" />, name: 'JavaScript' },
          { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: 'ReactJS' },
          { icon: <TbBrandNextjs className="text-7xl text-white" />, name: 'Next.js' },
          { icon: <FaNodeJs className="text-7xl text-green-500" />, name: 'Node.js' },
          { icon: <SiMongodb className="text-7xl text-green-500" />, name: 'MongoDB' },
          { icon: <DiRedis className="text-7xl text-red-700" />, name: 'Redis' },
          { icon: <SiBootstrap className="text-7xl text-purple-600" />, name: 'Bootstrap' },
          { icon: <SiTailwindcss className="text-7xl text-teal-400" />, name: 'TailwindCSS' },
        ].map((tech, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-6 transition-transform duration-300 transform hover:scale-110"
          >
            {tech.icon}
            <p className="text-center text-white mt-4 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
