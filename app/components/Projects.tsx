"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const projects = [
  {
    id: 1,
    title: "📱 Mobile-Based Dining Companion App",
    description: "A mobile app that helps UiTM Puncak Alam students find dining places based on preferences.",
    img: "/dining-app.svg", // Ensure this image exists in `public/`
    href: "https://github.com/amirulaimann17/uitm-dining-app",
    iconLists: ["/flutter.svg", "/dart.svg", "/sqlite.svg"],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        My <span className="text-teal-500">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
            key={project.id}
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <PinContainer title="Visit">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}></div>
                  <Image src={project.img} alt="cover" layout="fill" objectFit="contain" className="z-10 absolute bottom-0" />
                </div>
              </PinContainer>
            </a>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{project.title}</h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3 w-full">
              <div className="flex items-center">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image src={icon} alt="tech-icon" width={30} height={30} className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm">See GitHub</p>
                <FaLocationArrow className="ms-3" color="#008080" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
