import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.45 1"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <div className="h-screen flex justify-evenly" ref={ref}>
      <div>
        <motion.div className="glassy-card" style={{ y: y4 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi dolores at velit totam error quo
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div className="glassy-card" style={{ y: y2 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi dolores at velit totam error quo
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div className="glassy-card" style={{ y: y1 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi dolores at velit totam error quo
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div className="glassy-card" style={{ y: y3 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi dolores at velit totam error quo
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Parallax;
