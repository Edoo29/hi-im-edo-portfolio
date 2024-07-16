import { motion } from "framer-motion";
import { dancing_script } from "@/app/font";

export default function Timeline() {
  return (
    <div className="mt-[700px] flex flex-col md:flex-row md:justify-evenly gap-[100px]">
      <div className="flex flex-col gap-3 md:gap-10 justify-center items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-white text-xl"
        >
          My learning timeline
        </motion.p>
        <div className="flex">
          <div className="flex flex-col gap-[100px]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="flex gap-3"
            >
              <p className="text-white text-xl p-3 number">01</p>
              <div className="w-[100px] h-[2px] border-2 border-solid border-white"></div>
            </motion.div>
            <div className="w-[100px] h-[2px] border-2 border-solid border-transparent"></div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="flex gap-3"
            >
              <p className="text-white text-xl p-3 number">03</p>
              <div className="w-[100px] h-[2px] border-2 border-solid border-white"></div>
            </motion.div>
            <div className="w-[100px] h-[2px] border-2 border-solid border-transparent"></div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="flex gap-3"
            >
              <p className="text-white text-xl p-3 number">05</p>
              <div className="w-[100px] h-[2px] border-2 border-solid border-white"></div>
            </motion.div>
            <div className="w-[100px] h-[2px] border-2 border-solid border-transparent"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="h-[524px] border-2 border-solid border-white"
          ></motion.div>
          <div className="flex flex-col gap-[100px]">
            <div className="w-[100px] h-[2px] border-2 border-solid border-transparent"></div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="flex gap-3"
            >
              <div className="w-[100px] h-[2px] border-2 border-solid border-white"></div>
              <p className="text-white text-xl p-3 number">02</p>
            </motion.div>
            <div className="w-[100px] h-[2px] border-2 border-solid border-transparent"></div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="flex gap-3"
            >
              <div className="w-[100px] h-[2px] border-2 border-solid border-white"></div>
              <p className="text-white text-xl p-3 number">04</p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="mt-5 md:mt-10 text-white text-center"
      >
        <p className={`${dancing_script.className} text-5xl`}>Caption</p>
        <div className="mt-3">
          <p>01. HTML, CSS, JS</p>
          <p>02. TailwindCSS</p>
          <p>03. React</p>
          <p>04. TypeScript</p>
          <p>05. Nextjs</p>
        </div>
      </motion.div>
    </div>
  );
}
