import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import endy from "../assets/endyport.jpeg";

const Hero = () => (
  <section className="bg-[#0A0A0A]  text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
    
    
    <div className="w-full md:w-[50%] text-left h-[360px] mx-10">
      <h2 className="text-6xl  uppercase font-bebas text-white font-[400] leading-[90%]">
        Hi, I am<br />
        <span className="text-white font-bebas font-[400] ">Endurance Ighobue.</span>
      </h2>
      <p className="text-[#C7C7C7] mt-4 text-base">
        A Nigerian based front-end developer passionate about building<br />
        accessible and user friendly websites.
      </p>

      <div className="flex items-center mt-8 space-x-4">
        <a
          href="#contact"
          className="bg-lime-300 text-black font-medium px-6 py-2 rounded-full flex items-center hover:bg-lime-400"
        >
          CONTACT ME <span className="ml-2">•</span>
        </a>

        <a
          href="https://linkedin.com/in/ighobuendurance"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-3 rounded-full hover:bg-gray-700"
        >
          <FaLinkedinIn className="text-[#D3E97A]" />
        </a>

        <a
          href="https://github.com/endymimi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-3 rounded-full hover:bg-gray-700"
        >
          <FaGithub className="text-[#D3E97A]" />
        </a>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full md:w-[40%] flex justify-center mt-10 md:mt-0">
      <img
        src={endy}
        alt="Endurance Ighobue"
        className="rounded-xl object-cover w-[400px] h-auto"
      />
    </div>
  </section>
);

export default Hero;
