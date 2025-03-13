"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MagicButton from "./ui/MagicButton";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-36 lg:py-30 overflow-hidden">
      <div className="w-full px-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:gap-x-20">


        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-6/12 justify-center text-center md:text-right"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-transparent bg-clip-text">
            Hello, Amirul here 👋
          </h1>
          <p className="text-gray-400 mt-4 text-xl md:text-2xl lg:text-3xl">
            <Typewriter
              words={["Software Engineer", "Web Developer", "Mobile Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <MagicButton
            title="View Resume"
            href="/MuhammadAmirulAiman_ResumeSoftwareDeveloper.pdf"
            otherClasses="text-xl md:text-xl font-semibold"
          />
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-5/12 flex justify-center mt-12 md:mt-0"
        >
          <Image
            src="/profilePhoto.png"
            alt="Amirul Aiman"
            width={400}
            height={500}
            className="object-contain max-h-[70vh] md:max-h-screen"
          />
        </motion.div>

      </div>
    </section>
  );
}
