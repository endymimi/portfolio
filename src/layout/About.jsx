   import { useNavigate } from 'react-router-dom';
   import { Link } from "react-router-dom";


   
   
   
   const About = () => {

    
      

  return (
    <>
    <section className=" bg-[#0A0A0A] flex  justify-between">
   <div className="hidden md:block">
    <h1 className="text-6xl  uppercase font-bebas text-white font-[400] leading-[90%] mx-17 " >
        ABOUT ME
    </h1>
   </div>

    <div className="bg-[#0A0A0A] text-white font-manrope  max-w-3xl mr-8 hidden md:block p-2 ">
      <h1 className="text-3xl  font-manrope mb-6">
        I am a front-end developer based in Nigeria.
        <br />
        Has Biochemistry background.
      </h1>
      <p className="text-[#C7C7C7]  leading-tight text-sm ">
        I am a front-end developer based in Nigeria looking for exciting opportunities. Has Biochemistry background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy creating content, photography and learning a new language. Learning more to improve my skill.
      </p>
      <div className="flex space-x-6 text-[#D3E97A] font-medium text-sm mb-20 my-12 ">
                   <a className="border-b flex items-center gap-2 cursor-pointer ">
             <Link to="/AboutMe">MORE ABOUT ME</Link>
                </a>
            </div>
         </div>
          </section>
          
          <div className=" md:hidden bg-[#0A0A0A] p-5 ">
         <p className="text-[#C7C7C7]  leading-tight text-sm ">
        I am a front-end developer based in Nigeria looking for exciting opportunities. Has Biochemistry background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy creating content, photography and learning a new language. Learning more to improve my skill.
      </p>
      <div className="space-x-6 text-[#D3E97A] font-medium text-sm mb-5 my-12">
                <a className="underline flex items-center gap-2  ">
                  MORE ABOUT ME
                </a>
            </div>
            </div>

    </>
  );
};

export default About;