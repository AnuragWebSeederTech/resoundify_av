import React from 'react';
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <div>
      <div className="flex gap-10 px-10 flex-col py-28">
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`md:text-7xl text-5xl  uppercase text-main bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent font-bold`}
        >
          Let’s change the world together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-lg text-main text-justify"
        >
         Our partners are the pioneers — the most daring agencies, brands, <br /> and causes pushing boundaries around the globe.
        </motion.p>
      </div>
    </div>
  );
};

export default Heading;
