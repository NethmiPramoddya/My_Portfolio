import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => (
  <footer className="py-10 text-white bg-gray-900">
    <div className="flex flex-col items-center max-w-6xl gap-10 px-6 mx-auto text-center md:flex-row justify-evenly md:text-left">
      
      {/* Social Links */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Connect with me</h3>
        <div className="flex justify-center gap-4 md:justify-start">
          <a
            href="https://www.linkedin.com/in/nethmi-kathriarachchi-916bb7328/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition rounded-full bg-white/10 hover:bg-gradient-to-r from-indigo-500 to-purple-600"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/NethmiPramoddya/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition rounded-full bg-white/10 hover:bg-gradient-to-r from-indigo-500 to-purple-600"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Contact</h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li className="flex items-center justify-center gap-2 md:justify-start">
            <HiOutlineMail /> nethmik2001@gmail.com
          </li>
          <li className="flex items-center justify-center gap-2 md:justify-start">
            <HiOutlineLocationMarker /> Colombo, Sri Lanka
          </li>
          <li className="flex items-center justify-center gap-2 md:justify-start">
            <HiOutlinePhone /> 0787211872
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 text-sm text-center opacity-60">
      © 2025 Nethmi Pramoddya. All rights reserved.
    </div>
  </footer>
);

export default Footer;
