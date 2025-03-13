import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"; // Import BentoGrid

export default function About() {
    return (
        <section id="about" className="py-16 text-center">
             <div className="w-full px-6 lg:w-full flex flex-col items-center justify-center gap-12">
                <h1 className="heading">
                    What{" "}
                    <span className="text-teal-500">about me?</span>
                </h1>
                <BentoGrid>
                    <BentoGridItem
                        id={1} // Add unique id
                        title="A Software Engineer passionate about building Web & Mobile Apps with seamless user experiences and efficient backends."
                        description=""
                        className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
                        imgClassName="w-full h-full"
                        titleClassName="justify-end"
                        img="/b1.svg"
                        spareImg=""
                    />
                    <BentoGridItem
                        id={2}
                        title="Always exploring new tech—whether it’s frontend, backend, or cloud solutions."
                        description=""
                        className="lg:col-span-2 md:col-span-3 md:row-span-2"
                        imgClassName="w-full h-full"
                        titleClassName="justify-end"
                        img="/am2.jpg"
                        spareImg=""
                    />
                    <BentoGridItem
                        id={3}
                        title="I enjoy simplifying complex problems"
                        description=""
                        className="lg:col-span-2 md:col-span-3 md:row-span-2"
                        imgClassName="w-full h-full"
                        titleClassName="justify-end"
                        img="/am1.svg"
                        spareImg=""
                    />
                    <BentoGridItem
                        id={3}
                        title="Looking to grow my skills in full-stack development, API design, and building fast, user-friendly applications."
                        description=""
                        className="md:col-span-3 md:row-span-2"
                        imgClassName="w-full h-full"
                        titleClassName="justify-end"
                        img="/am1.jpg"
                        spareImg=""
                    />
                    <BentoGridItem
                        id={4}
                        title="My tech stack"
                        description="Currently improving"
                        className="lg:col-span-2 md:col-span-3 md:row-span-2"
                        imgClassName=""
                        titleClassName="justify-center"
                        img=""
                        spareImg=""
                    />

                </BentoGrid>
            </div>
        </section>
    );
}
