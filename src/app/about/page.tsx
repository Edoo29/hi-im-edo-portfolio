"use client";

import { motion } from "framer-motion";
import { dancing_script } from "../font";
import Timeline from "../components/timeline/timeline";
import Scroll from "../components/scroll/scroll";

export default function About() {
  return (
    <>
      <div id="about" className="mt-[700px] h-10 md:h-[200px]"></div>
      <div className="flex flex-col justify-center items-center mt-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          className={`${dancing_script.className} text-5xl text-white`}
        >
          About me
        </motion.p>
        <p className="flex flex-col gap-1 text-white text-center">
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            Hi! My name is <strong>Edoardo</strong> and I am a web developer.
          </motion.span>
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            My passion for this was born in September 2023, where I started with
            HTML and CSS.
          </motion.span>
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            Then, I tried different languages, like C++ and Python.
          </motion.span>
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            Later on, I discovered JavaScript and I became passionate about it.
          </motion.span>
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            I currently really enjoy creating interactive and easy-to-use
            applicatios.
          </motion.span>
        </p>
        <motion.p
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-9xl mt-10"
          id="logo"
        >
          👨‍💻
        </motion.p>
        <Scroll />
        <Timeline />
        <Scroll />
      </div>
    </>
  );
}
