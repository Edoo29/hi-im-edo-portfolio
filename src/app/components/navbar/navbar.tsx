"use client";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { jetbrains_mono } from "../../font";
import { motion } from "framer-motion";
import { navbarElements } from "./navbar-elements";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      className={`${jetbrains_mono.className} hidden md:flex justify-between p-5 bg-transparent backdrop-blur-xl rounded-xl shadow-xl`}
    >
      <div className="grid grid-cols-2 gap-3 md:flex md:gap-10">
        {navbarElements.map((element) => {
          return (
            <motion.a
              key={element.id}
              href={element.href}
              className="hover:text-[#914eb1] hover:font-extrabold transition-all cursor-pointer"
            >
              {element.element}
            </motion.a>
          );
        })}
      </div>
      <div className="hidden md:flex md:gap-3">
        <a
          href="https://discordapp.com/users/1221847032499667149"
          className="hover:text-2xl transition-all"
          aria-label="My Discord profile"
        >
          <FaDiscord />
        </a>
        <a
          href="https://github.com/Edoo29"
          className="hover:text-2xl transition-all"
          aria-label="My GitHub profile"
        >
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  );
}
