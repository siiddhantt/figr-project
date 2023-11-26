import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";
import Landing from "./sections/Landing";
import Text from "./sections/Text";
import Parallax from "./sections/Parallax";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1.50 1"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  return (
    <div>
      <motion.div
        ref={ref}
        style={{
          originX: "0px",
          rotateX,
        }}
      >
        <Landing />
      </motion.div>
      <Text />
      <Parallax />
      <Text />
    </div>
  );
}

export default App;
