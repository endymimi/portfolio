import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, } from 'react-icons/fa';
import endytwo from "../assets/endytwotwo.jpeg";

const Contact = () => (
  <section id="contact" className="p-10 bg-[#0A0A0A] md:flex  justify-between border-t border-[#C7C7C7] ">
    <img className='md:hidden' src={endytwo} alt="" />
    <div className='mx-7 my-20 '>
    <h3 className="md:text-6xl text-5xl  uppercase font-bebas text-white font-[400] leading-[90%]  ">LET'S CONNECT</h3>
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
    <div className='mr-58 my-20  hidden md:block'>
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
);

export default Contact;

