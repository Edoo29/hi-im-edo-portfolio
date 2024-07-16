"use client";

import { dancing_script } from "../font";
import { motion } from "framer-motion";
import Scroll from "../components/scroll/scroll";

export default function Skills() {
  return (
    <>
      <div id="skills" className="mt-[700px] h-10 md:h-[200px]"></div>
      <div className="mt-10 flex flex-col items-center justify-center gap-10">
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className={`${dancing_script.className} text-5xl text-white`}
        >
          Skills
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-white text-xl"
        >
          My stack ⬇️
        </motion.p>
        <div className="flex flex-col md:flex-row gap-10 text-white text-xl">
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
            className="box"
          >
            HTML
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.25 },
            }}
            className="box"
          >
            CSS
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.5 },
            }}
            className="box"
          >
            JS
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.75 },
            }}
            className="box"
          >
            TS
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 1 },
            }}
            className="box"
          >
            TailwindCSS
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 1.25 },
            }}
            className="box"
          >
            React
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 1.5 },
            }}
            className="box"
          >
            Nextjs
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-white text-xl mt-10"
        >
          Other tools 🚀
        </motion.p>
        <div className="flex gap-10 text-white text-xl">
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
            className="box"
          >
            GitHub
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.25 },
            }}
            className="box"
          >
            Git
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.5 },
            }}
            className="box"
          >
            VSCode
          </motion.p>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25, delay: 0.75 },
            }}
            className="box"
          >
            Postman
          </motion.p>
        </div>
        <Scroll />
      </div>
    </>
  );
}
