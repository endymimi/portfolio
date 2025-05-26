import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, } from 'react-icons/fa';
import endythree from "../assets/endythreethree.jpeg";
import circle from "../assets/circle.svg";


const AboutMe = () => {



  return (

  <>
  <header className='bg-[#0A0A0A]  justify center'>
       <section className='flex mx-40 '>

        <div className="hidden md:block ">
    <h1 className="text-4xl  uppercase font-bebas text-white font-[400] leading-[90%] mx-15 " >
        ABOUT ME
    </h1>
   </div>
     <div className="bg-[#0A0A0A] text-white font-manrope  max-w-3xl mr-8 hidden md:block p-2 mx-15 ">
      <h1 className="text-3xl  font-manrope mb-6">
        I am a front-end developer based in Nigeria.
        <br />
        Has Biochemistry background.
      </h1>
      <p className="text-[#C7C7C7]  leading-tight text-sm ">
        I am a front-end developer based in Nigeria looking for exciting opportunities. Has Biochemistry background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy creating content, photography and learning a new language. Learning more to improve my skill.
      </p>
      <div className="flex space-x-6 text-[#D3E97A] font-medium text-sm mb-20 my-12 ">
                   <a
          href="#contact"
          className="bg-lime-300 text-black font-medium px-6 py-2 rounded-full flex items-center hover:bg-lime-400"
        >
          DOWNLOAD RESUME<span className="ml-2">•</span>
        </a>

        <a
          href="https://linkedin.com/in/ighobuendurance"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-ful"
        >
          <FaLinkedinIn className="text-[#D3E97A]" />
        </a>


           <a
          href="https://github.com/endymimi"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full "
        >
          <FaGithub className="text-[#D3E97A]" />
        </a>

           
            </div>
         </div>
       </section>

       <section className=' '>

        <div className= "md:hidden" >
    <h1 className="text-3xl  uppercase font-bebas text-white font-[400]  mx-15 " >
      
    </h1>
   </div>
     <div className="bg-[#0A0A0A] text-white font-manrope  max-w-3xl mr-8 md:hidden  mx-15 ">
      <h1 className="text-3xl  font-manrope mb-6 my-5">
        I am a front-end developer based in Nigeria.
        <br />
        Has Biochemistry background.
      </h1>
      <p className="text-[#C7C7C7]  leading-tight text-sm ">
        I am a front-end developer based in Nigeria looking for exciting opportunities. Has Biochemistry background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy creating content, photography and learning a new language. Learning more to improve my skill.
      </p>
      <div className="flex space-x-6 text-[#D3E97A] font-medium text-sm mb-20 my-12 ">
            <a
          href="#contact"
          className="bg-lime-300 text-black font-medium px-6 py-2 rounded-full flex items-center hover:bg-lime-400"
        >
          DOWNLOAD RESUME <span className="ml-2"><img src={circle} alt="" /></span>
        </a>

        <a
          href="https://linkedin.com/in/ighobuendurance"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full "
        >
          <FaLinkedinIn className="text-[#D3E97A]" />
        </a>


         <a
          href="https://github.com/endymimi"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full"
        >
          <FaGithub className="text-[#D3E97A]" />
        </a>

            </div>
         </div>
       </section>


           <section className="bg-[#0A0A0A] text-white px-6 py-12">
  {/* IMAGE */}
  <div className="flex justify-center mb-10">
    <img 
      className="w-full md:w-[600px] lg:w-[800px] h-auto rounded-lg object-cover" 
      src={endythree} 
      alt="Endy profile" 
    />
  </div>

  {/* CAPABILITIES SECTION */}
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
    {/* LEFT: Heading */}
    <div className="md:w-1/3">
      <h1 className="text-4xl md:text-4xl font-bebas font-[400] tracking-wider mb-4">
        MY CAPABILITIES
      </h1>
    </div>

    {/* RIGHT: Paragraph + Skills */}
    <div className="md:w-2/3">
      <p className="text-sm text-[#C7C7C7] leading-loose mb-6">
        I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. 
        Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
      </p>

      <div className="flex flex-wrap md:gap-6 gap-3">
        {[
          'HTML',
          'CSS',
          'JAVASCRIPT',
          'JQUERY',
          'ACCESSIBILITY',
          'FIGMA',
          'TAILWIND CSS',
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

    <section className="bg-[#0A0A0A] text-white px-6 py-12">
      <div className='  gap-8 max-w-6xl mx-auto md:flex '>
        <div className='md:w-1/3'>
      <h2 className=" font-bebas  text-4xl  md:text-4xl font-[400]  mb-4">
        MY EXPERIENCE
      </h2>
      </div>

      <div className='md:mx-30'>
      <div className="mb-8 leading-loose">
        <h3 className="font-semibold text-lg">Freelance Developer</h3>
        <p className="text-sm text-[#C7C7C7] mb-2">May 2025 — Present</p>
        <p className="text-sm text-[#C7C7C7] leading-relaxed">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariaur.
        </p>
      </div>
    

    
      <div className='leading-loose'>
        <h3 className="font-semibold text-lg">Front-End Intern</h3>
        <p className="text-sm text-[#C7C7C7] mb-1">April 2025 - present</p>
        <p className="text-sm text-[#D3E97A] font-medium mb-2">Tech Studio Academy</p>
        <p className="text-sm text-[#C7C7C7] leading-relaxed">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      </div>
      </div>
    </section>

    <section id="contact" className="p-10 bg-[#0A0A0A] md:flex  justify-between border-t border-[#C7C7C7] ">
       
        <div className='mx-7 my-20 md:mx-27 '>
        <h3 className="md:text-4xl text-5xl  uppercase font-bebas text-white font-[400] leading-[90%]  ">LET'S CONNECT</h3>
        <p className='text-[#C7C7C7] my-4 text-sm'>
          Say hello at <span className='border-b border-[#D3E97A] text-l'>ighobuendy@gmail.com</span>
        </p>
        <p className='text-[#C7C7C7] text-sm'>
          For more info, here's my <span className='border-b border-[#D3E97A] text-l'>resume</span>
        </p>
      <div className='flex my-8 leading-loose'>
        <a
              href="https://linkedin.com/in/ighobuendurance"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 rounded-full "
            >
              <FaLinkedinIn className="text-[#D3E97A]" />
            </a>
    
                    <a
              href="https://github.com/endymimi"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 rounded-full "
            >
              <FaGithub className="text-[#D3E97A]" />
            </a>
    
             <a
              href="http://t.co/eunORzPAsg"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 rounded-full "
            >
              <FaTwitter className="text-[#D3E97A]" />
            </a>
    
             <a
              href="https://www.instagram.com/enduranceighobue?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 rounded-full  "
            >
              <FaInstagram className="text-[#D3E97A]" />
            </a>
            </div>
            <div>
    
            </div>
    
        </div>
        <div className='mr-108 my-20  hidden md:block'>
        <form action="https://formspree.io/f/mrbqvzyn" method="POST" className="space-y-4 max-w-md mx-auto text-[#C7C7C7] bg-[#0A0A0A]">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded bg-[#1A1A1A]" />
         <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded bg-[#1A1A1A]" />
          <textarea name="message" placeholder="Your Message" rows={6} cols={100} required className="w-full p-2 border rounded bg-[#1A1A1A]"></textarea>
          <button type="submit" className="bg-[#D3E97A] text-black px-4 py-2 rounded-full font-[400]">SUBMIT</button>
        </form>
        </div>
    
         <form action="https://formspree.io/f/mrbqvzyn" method="POST" className=" md:hidden space-y-4 max-w-md mx-auto text-[#C7C7C7] bg-[#0A0A0A]">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded bg-[#1A1A1A]" />
         <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded bg-[#1A1A1A]" />
         <textarea name="message" placeholder="Your Message" cols={100} rows={6} required className="w-full p-2 border rounded bg-[#1A1A1A]"></textarea>
          <button type="submit" className="bg-[#D3E97A] text-black px-4 py-2 rounded-full font-[400]">SUBMIT</button>
        </form>   
    
    
    
      </section>
    </header>
    </>
  );
};

  

export default AboutMe