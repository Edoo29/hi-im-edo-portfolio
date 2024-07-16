import { PiMouseScroll } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Scroll() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className="mt-10 md:mt-[60px] flex gap-3 place-items-center"
      >
        <PiMouseScroll className="text-white text-5xl" />
        <span className="text-white text-xl">Scroll</span>
      </motion.div>
    </>
  );
}
