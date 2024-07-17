"use client";

import { dancing_script, jetbrains_mono } from "../font";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Scroll from "../components/scroll/scroll";

export default function Home() {
  return (
    <main
      id="home"
      className="flex flex-col justify-center place-items-center mt-10 md:mt-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <TypeAnimation
          sequence={[
            "Hi!👋",
            1000,
            "¡Hola!👋",
            1000,
            "Ciao!👋",
            1000,
            "Bonjour!👋",
            1000,
            "GutenTag👋",
            1000,
            "こんにちは👋",
            1000,
            "你好👋",
            1000,
            "привет!👋",
            1000,
            "cześć!👋",
            1000,
          ]}
          wrapper="p"
          style={{
            fontSize: "45px",
            color: "white",
          }}
          className={jetbrains_mono.className}
          repeat={Infinity}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        className="text-5xl font-extrabold text-white cursor-pointer"
      >
        My name is
        <span className={`${dancing_script.className} text-5xl md:text-7xl`}>
          {" "}
          Edo
        </span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        className="white mt-3 text-center text-white text-xl cursor-pointer"
      >
        I design and create websites of various types.
        <br />I like to create simple and easy-to-use websites for all users.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        className={`${dancing_script.className} mt-10 text-3xl md:text-5xl text-center text-white cursor-pointer`}
      >
        Frontend Developer
      </motion.p>
      <div className="hidden md:block">
        <Scroll />
      </div>
      <p className="block md:hidden mt-10 text-white">
        Visit this portfolio on desktop for the full version
      </p>
    </main>
  );
}
