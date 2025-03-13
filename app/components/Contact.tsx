import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn & GitHub icons
import MagicButton from "./ui/MagicButton"; // Ensure this is correctly imported

const Contact = () => {
  return (
    <footer id="contact" className="text-center text-white mt-5">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl font-bold">
        Let&apos;s connect and solve <span className="text-teal-500">real</span> world problems together!
      </h2>


      {/* Description */}
      <p className="text-gray-400 mt-4 text-lg md:text-xl">
        Feel free to reach out for collaborations or any inquiries!
      </p>

      {/* Contact Button */}
      <div className="mt-6">
        <MagicButton
          title="Let's get in touch"
          href="mailto:amirulaimann17@gmail.com"
          otherClasses="text-lg md:text-xl font-semibold"
        />
      </div>

      {/* Social Icons (LinkedIn & GitHub) */}
      <div className="mt-6 flex justify-center items-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-amirul-aiman-shahrizar-804690312"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/amirulaimann17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition duration-300 text-3xl"
        >
          <FaGithub />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Muhammad Amirul Aiman. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Contact;
