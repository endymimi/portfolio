import React from 'react'
import imageOne from "../assets/desktop-design (8).jpg";
import imageTwo from '../assets/productpageo.png';
import imageThree from "../assets/desktop-thank-you-stated.jpg";
import github from "../assets/github.svg.png";

const FeaturedProjects = () => {
 
 const projects = [
  {
    tag: "Conceptual Work",
    image: imageOne, 
    title: "Promotional landing page for our favorite show",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    info: {
      year: "2024",
      role: "Front-end Developer",
    },
    demoLink: "https://endymimi.github.io/Advice-generator/",
    githubLink: "https://endymimi.github.io/Advice-generator/",
  },
  {
    image: imageThree,
    title: "Blog site for World News",
    description:
      "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
    info: {
      client: "World News",
      year: "2025",
      role: "Front-end Developer",
    },
    demoLink: "https://endymimi.github.io/Rating-Interactive-App/",
    githubLink:  "https://endymimi.github.io/Rating-Interactive-App/",
  },
  {
    tag: "Challenge",
    image: imageTwo,
    title: "E-commerce product page",
    description:
      "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
    info: {
      year: "2025",
      role: "Front-end Developer",
    },
    demoLink:  "https://eggy-place-endy.vercel.app/",
    githubLink: "https://eggy-place-endy-kfm5t3gh1-endys-projects-186cabc5.vercel.app/",
  },
];
 
 
 
 
 
    return (
        <>
       <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16">
      <h2 className="text-6xl  uppercase font-bebas text-white font-[400] leading-[90%]  mb-2">FEATURED PROJECTS</h2>
      <p className="text-[#C7C7C7] mt-4 text-sm mb-10">
        Here are some of the selected projects that showcase my passion for front-end development.
      </p>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:flex md:items-start md:space-x-10 space-y-6 md:space-y-0"
          >
            {/* Image with Tag */}
            <div className="relative bg-[#1A1A1A] rounded-lg p-4 md:w-1/2">
              {project.tag && (
                <span className="absolute top-4 left-4 bg-[#262626] text-white text-sm px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-full mt-10"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 leading-loose font-manrope my-10">
              <h3 className="text-3xl  mb-4 ">{project.title}</h3>
              <p className="text-[#C7C7C7] mb-6 ">{project.description}</p>

              <div className="text-sm text-[#C7C7C7] mb-4 leading-loose border-b border-[#C7C7C7]">
                <p className="uppercase font-bold mb-1 border-b border-[#C7C7C7] my-4 ">Project Info</p>
                {project.info.client && (
                  <p className="flex justify-between border-b border-[#C7C7C7] my-4 ">
                    <span>Client</span> <span>{project.info.client}</span>
                  </p>
                )}
                <p className="flex justify-between border-b border-[#C7C7C7] my-4">
                  <span>Year</span> <span>{project.info.year}</span>
                </p>
                <p className="flex justify-between border-b border-[#C7C7C7]">
                  <span>Role</span> <span>{project.info.role}</span>
                </p>
              </div>

              {/* Links */}
              <div className="flex space-x-6 text-[#D3E97A] font-medium text-sm mb-5 my-8">
                <a href={project.demoLink} className="border-b flex items-center gap-2 ">
                  LIVE DEMO <span>↗</span>
                </a>
                <a
                  href={project.githubLink}
                  className="border-b flex items-center gap-2"
                >
                  {index === 1 ? "SEE ON GITHUB" : "SEE ON GITHUB"} <span><img src={github} alt="" /></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};
export default FeaturedProjects