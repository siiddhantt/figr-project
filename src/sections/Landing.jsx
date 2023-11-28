import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Frame from "../assets/frame.png";
import ArrowIcon from "../svgComponents/ArrowIcon";
import FrameCard from "../svgComponents/FrameCard";

function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1.8 1"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  return (
    <div className="landing">
      <motion.div
        className="container"
        ref={ref}
        style={{
          originX: "100px",
          rotateX,
          scaleY,
        }}
      >
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
      </motion.div>
    </div>
  );
}

export default Landing;
