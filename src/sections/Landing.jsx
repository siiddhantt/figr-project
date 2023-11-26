import React from "react";
import { motion } from "framer-motion";

import Frame from "../assets/frame.png";
import ArrowIcon from "../svgComponents/ArrowIcon";
import FrameCard from "../svgComponents/FrameCard";

function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <img className="background" src={Frame}></img>
        <div className="content">
          <div className="flex items-start w-96">
            <motion.div
              className="flex items-center justify-between gap-1 px-2 py-1 rounded-full bg-[#7053ff]"
              whileHover={{ width: "374px" }}
            >
              ✨ $7.5M seed raised with Accel & Square Peg
              <ArrowIcon />
            </motion.div>
          </div>
          <div className="flex justify-between gap-8 mt-3">
            <section className="w-[350px] text-7xl font-semibold">
              Impactful stories. Made effortlessly
            </section>
            <FrameCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
